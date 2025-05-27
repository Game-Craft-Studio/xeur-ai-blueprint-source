import type { NextApiRequest, NextApiResponse } from 'next';

interface HealthResponse {
  status: 'healthy' | 'unhealthy';
  timestamp: string;
  version: string;
  environment: string;
  uptime: number;
  services: {
    database: 'connected' | 'disconnected' | 'not_configured';
    cache: 'connected' | 'disconnected' | 'not_configured';
    external_apis: 'connected' | 'degraded' | 'disconnected';
  };
  company: {
    name: string;
    stage: string;
    funding_status: string;
    last_updated: string;
  };
  system: {
    memory_usage: string;
    node_version: string;
    next_version: string;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthResponse>
) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      version: '1.3.0',
      environment: process.env.NODE_ENV || 'development',
      uptime: process.uptime(),
      services: {
        database: 'not_configured',
        cache: 'not_configured',
        external_apis: 'not_configured'
      },
      company: {
        name: 'XEUR.AI',
        stage: 'alpha-beta',
        funding_status: 'raising-seed',
        last_updated: '2025-05-27'
      },
      system: {
        memory_usage: 'unknown',
        node_version: process.version,
        next_version: 'unknown'
      }
    } as HealthResponse);
  }

  try {
    // Basic health checks
    const memoryUsage = process.memoryUsage();
    const memoryUsageMB = Math.round(memoryUsage.heapUsed / 1024 / 1024);
    
    // Check external services (placeholder for actual checks)
    const services = {
      database: 'not_configured' as const, // Would check actual DB connection
      cache: 'not_configured' as const,    // Would check Redis/cache connection
      external_apis: 'connected' as const  // Would check external API status
    };

    // Company information (updated for current status)
    const company = {
      name: 'XEUR.AI',
      stage: process.env.NEXT_PUBLIC_COMPANY_STAGE || 'alpha-beta',
      funding_status: process.env.NEXT_PUBLIC_FUNDING_STATUS || 'raising-seed',
      last_updated: '2025-05-27'
    };

    // System information
    const system = {
      memory_usage: `${memoryUsageMB}MB`,
      node_version: process.version,
      next_version: '14.1.0' // Would get from package.json in real implementation
    };

    // Determine overall health status
    const isHealthy = true; // Add actual health logic here

    const healthResponse: HealthResponse = {
      status: isHealthy ? 'healthy' : 'unhealthy',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '1.3.0',
      environment: process.env.NODE_ENV || 'development',
      uptime: Math.floor(process.uptime()),
      services,
      company,
      system
    };

    // Set appropriate cache headers
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    // Return health status
    res.status(200).json(healthResponse);
    
  } catch (error) {
    console.error('Health check failed:', error);
    
    // Return unhealthy status on error
    res.status(503).json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '1.3.0',
      environment: process.env.NODE_ENV || 'development',
      uptime: Math.floor(process.uptime()),
      services: {
        database: 'disconnected',
        cache: 'disconnected',
        external_apis: 'disconnected'
      },
      company: {
        name: 'XEUR.AI',
        stage: 'alpha-beta',
        funding_status: 'raising-seed',
        last_updated: '2025-05-27'
      },
      system: {
        memory_usage: 'unknown',
        node_version: process.version,
        next_version: 'unknown'
      }
    });
  }
}
