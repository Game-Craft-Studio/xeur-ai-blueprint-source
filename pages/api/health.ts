import { NextApiRequest, NextApiResponse } from 'next';

interface HealthCheck {
  status: 'healthy' | 'unhealthy';
  timestamp: string;
  uptime: number;
  version: string;
  commit: string;
  environment: string;
  services: {
    database: 'connected' | 'disconnected' | 'not_configured';
    external_apis: 'operational' | 'degraded' | 'not_configured';
    file_system: 'writable' | 'read_only' | 'error';
  };
  metrics: {
    memory_usage: number;
    response_time_ms: number;
    active_connections?: number;
  };
  build_info: {
    build_time: string;
    node_version: string;
    next_version: string;
  };
}

/**
 * Health Check API Endpoint
 * GET /api/health - Returns application health status
 * 
 * This endpoint is used by:
 * - Load balancers for health checks
 * - Monitoring systems (Uptime Robot, Pingdom)
 * - CI/CD pipelines for deployment verification
 * - Internal monitoring scripts
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthCheck | { error: string }>
) {
  const startTime = Date.now();
  
  try {
    // Only allow GET requests
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET']);
      return res.status(405).json({ error: 'Method not allowed' });
    }

    // Basic service checks
    const services = await checkServices();
    const metrics = await getMetrics(startTime);
    const buildInfo = getBuildInfo();

    // Determine overall health status
    const isHealthy = 
      services.file_system === 'writable' &&
      metrics.memory_usage < 90 && // Less than 90% memory usage
      metrics.response_time_ms < 1000; // Response time under 1 second

    const healthCheck: HealthCheck = {
      status: isHealthy ? 'healthy' : 'unhealthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: process.env.NEXT_PUBLIC_APP_VERSION || '1.3.0',
      commit: process.env.NEXT_PUBLIC_COMMIT_SHA || 'development',
      environment: process.env.NEXT_PUBLIC_ENVIRONMENT || 'development',
      services,
      metrics,
      build_info: buildInfo
    };

    // Set appropriate cache headers
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    // Return appropriate status code
    const statusCode = isHealthy ? 200 : 503;
    
    return res.status(statusCode).json(healthCheck);

  } catch (error) {
    console.error('Health check error:', error);
    
    return res.status(500).json({
      error: 'Health check failed',
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
    } as any);
  }
}

/**
 * Check various services and dependencies
 */
async function checkServices() {
  const services = {
    database: 'not_configured' as const,
    external_apis: 'not_configured' as const,
    file_system: 'error' as const,
  };

  try {
    // Check file system write permissions
    const fs = require('fs').promises;
    const testFile = '/tmp/xeur-ai-health-check';
    
    await fs.writeFile(testFile, 'health-check');
    await fs.unlink(testFile);
    services.file_system = 'writable';
  } catch (error) {
    console.error('File system check failed:', error);
    services.file_system = 'read_only';
  }

  // TODO: Add database connection check when implemented
  // try {
  //   await prisma.$queryRaw`SELECT 1`;
  //   services.database = 'connected';
  // } catch (error) {
  //   services.database = 'disconnected';
  // }

  // TODO: Add external API checks when implemented
  // try {
  //   const response = await fetch('https://api.xeur.ai/status');
  //   services.external_apis = response.ok ? 'operational' : 'degraded';
  // } catch (error) {
  //   services.external_apis = 'degraded';
  // }

  return services;
}

/**
 * Get system metrics
 */
async function getMetrics(startTime: number) {
  const memoryUsage = process.memoryUsage();
  const totalMemory = memoryUsage.heapTotal + memoryUsage.external;
  const usedMemory = memoryUsage.heapUsed;
  const memoryUsagePercent = Math.round((usedMemory / totalMemory) * 100);

  return {
    memory_usage: memoryUsagePercent,
    response_time_ms: Date.now() - startTime,
    // active_connections: getActiveConnections(), // TODO: Implement if needed
  };
}

/**
 * Get build information
 */
function getBuildInfo() {
  return {
    build_time: process.env.NEXT_PUBLIC_BUILD_TIME || new Date().toISOString(),
    node_version: process.version,
    next_version: require('next/package.json').version,
  };
}