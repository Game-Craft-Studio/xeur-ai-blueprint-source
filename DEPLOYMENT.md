# XEUR.AI Production Deployment Guide

**Last Updated:** May 27, 2025  
**Version:** 1.0  
**Target Platform:** Google Cloud VM  

## 🚀 Overview

This guide provides complete instructions for deploying XEUR.AI on Google Cloud Platform VM with production-ready configuration, SSL certificates, monitoring, and maintenance automation.

## 📋 Prerequisites

### System Requirements
- **OS:** Ubuntu 20.04 LTS or higher
- **CPU:** 2+ cores
- **RAM:** 4GB+ recommended
- **Storage:** 20GB+ SSD
- **Network:** Public IP with domain pointed to server

### Required Access
- Root/sudo access to the server
- Domain configured (xeur.ai)
- GitHub repository access
- SSL certificate capability (Let's Encrypt)

## 🛠️ Pre-Deployment Setup

### 1. Server Preparation
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Git
sudo apt install git -y

# Clone repository
git clone https://github.com/cpg-xeur-ai/xeur-ai-blueprint-source.git
cd xeur-ai-blueprint-source

# Make scripts executable
chmod +x scripts/*.sh
```

### 2. Domain Configuration
Ensure your domain (xeur.ai) points to your server's IP address:
```bash
# Check DNS resolution
nslookup xeur.ai
dig xeur.ai
```

## 🚀 Production Deployment

### Option 1: Automated Deployment (Recommended)
```bash
# Run the comprehensive deployment script
sudo ./scripts/deploy-gcp.sh
```

This script will automatically:
- ✅ Install Node.js, npm, PM2, Nginx
- ✅ Configure application environment
- ✅ Set up SSL certificates
- ✅ Configure firewall (UFW)
- ✅ Start application with process management
- ✅ Set up monitoring and logging
- ✅ Perform health checks

### Option 2: Manual Step-by-Step Deployment

#### Step 1: Install Dependencies
```bash
# Install Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx -y

# Install Certbot for SSL
sudo apt install certbot python3-certbot-nginx -y
```

#### Step 2: Application Setup
```bash
# Navigate to project directory
cd /path/to/xeur-ai-blueprint-source

# Install dependencies
npm ci --production

# Build for production
npm run build

# Set up environment variables
cp .env.example .env.production
# Edit .env.production with your configuration
```

#### Step 3: PM2 Configuration
```bash
# Start application with PM2
pm2 start npm --name "xeur-ai-platform" -- start

# Save PM2 configuration
pm2 save

# Set up PM2 to start on boot
pm2 startup
```

#### Step 4: Nginx Configuration
```bash
# Create Nginx site configuration
sudo cp configs/nginx/xeur-ai.conf /etc/nginx/sites-available/xeur-ai
sudo ln -s /etc/nginx/sites-available/xeur-ai /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

#### Step 5: SSL Certificate
```bash
# Install SSL certificate
sudo certbot --nginx -d xeur.ai -d www.xeur.ai

# Set up auto-renewal
sudo crontab -e
# Add: 0 2 * * * /usr/bin/certbot renew --quiet
```

#### Step 6: Firewall Setup
```bash
# Configure UFW firewall
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

## 🔧 Post-Deployment Configuration

### Environment Variables
Key environment variables for production:
```bash
# .env.production
NEXT_PUBLIC_APP_URL=https://xeur.ai
NEXT_PUBLIC_ENVIRONMENT=production
NEXT_PUBLIC_COMPANY_STAGE=alpha-beta
NEXT_PUBLIC_FUNDING_STATUS=raising
NODE_ENV=production
PORT=3000
```

### Health Check
Verify deployment success:
```bash
# Check application health
curl https://xeur.ai/api/health

# Check PM2 status
pm2 status

# Check Nginx status
sudo systemctl status nginx

# Check SSL certificate
openssl s_client -servername xeur.ai -connect xeur.ai:443 </dev/null
```

## 📊 Monitoring & Maintenance

### Server Maintenance Script
Use the comprehensive maintenance script:
```bash
# Show system status
./scripts/server-maintenance.sh status

# Run health checks
./scripts/server-maintenance.sh health

# Start monitoring dashboard
./scripts/server-maintenance.sh monitor

# Restart application
./scripts/server-maintenance.sh restart

# Update application
./scripts/server-maintenance.sh update

# Create backup
./scripts/server-maintenance.sh backup
```

### Log Management
```bash
# View PM2 logs
pm2 logs xeur-ai-platform

# View Nginx logs
sudo tailf /var/log/nginx/access.log
sudo tailf /var/log/nginx/error.log

# View system logs
journalctl -u nginx -f
```

### Backup Strategy
```bash
# Manual backup
./scripts/server-maintenance.sh backup

# Automated daily backups (add to crontab)
0 2 * * * /path/to/scripts/server-maintenance.sh backup
```

## 🔄 Updates & Maintenance

### Application Updates
```bash
# Pull latest changes
git pull origin main

# Update dependencies
npm ci --production

# Rebuild application
npm run build

# Restart with zero downtime
pm2 reload xeur-ai-platform
```

### System Updates
```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Update Node.js if needed
# Update PM2
pm2 update

# Restart services if required
sudo systemctl restart nginx
```

## 🚨 Troubleshooting

### Common Issues

#### Application Not Starting
```bash
# Check PM2 logs
pm2 logs xeur-ai-platform

# Check Node.js version
node --version

# Verify environment variables
cat .env.production
```

#### SSL Certificate Issues
```bash
# Check certificate status
sudo certbot certificates

# Renew certificates manually
sudo certbot renew

# Check Nginx configuration
sudo nginx -t
```

#### High Resource Usage
```bash
# Check system resources
htop
df -h
free -h

# Analyze PM2 processes
pm2 monit

# Clean up if needed
./scripts/server-maintenance.sh cleanup
```

### Performance Optimization
```bash
# Enable Nginx compression
# Add to Nginx config:
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css application/json application/javascript;

# PM2 cluster mode (if needed)
pm2 start npm --name "xeur-ai-platform" -i max -- start
```

## 📱 Monitoring Dashboard

### Key Metrics to Monitor
- **Application Response Time**: < 200ms
- **Memory Usage**: < 80%
- **CPU Usage**: < 70%
- **Disk Space**: < 80%
- **SSL Certificate**: > 30 days to expiry

### Automated Alerts
Set up monitoring alerts for:
- Application downtime
- High resource usage
- SSL certificate expiry
- Failed deployments

## 🔐 Security Considerations

### Server Security
- Keep system packages updated
- Use strong SSH keys
- Regular security scans
- Monitor access logs
- Implement fail2ban for SSH protection

### Application Security
- Regular dependency updates
- Security headers in Nginx
- HTTPS enforcement
- Input validation
- Rate limiting

## 📞 Support & Maintenance

### Maintenance Schedule
- **Daily**: Automated backups, log rotation
- **Weekly**: Security updates, performance checks
- **Monthly**: Full system updates, security audit

### Emergency Procedures
```bash
# Emergency restart
pm2 restart xeur-ai-platform

# Quick health check
curl -f https://xeur.ai/api/health

# Emergency backup
./scripts/server-maintenance.sh backup

# Roll back if needed
# Restore from last known good backup
```

## 📊 Performance Benchmarks

### Expected Performance
- **Page Load Time**: < 2 seconds
- **API Response**: < 100ms
- **Uptime**: 99.9%+
- **Concurrent Users**: 1000+

### Optimization Tips
1. Enable Nginx caching for static assets
2. Use PM2 cluster mode for high traffic
3. Implement Redis for session management
4. Use CDN for global content delivery
5. Monitor and optimize database queries

---

## 🎉 Deployment Checklist

- [ ] Server prerequisites installed
- [ ] Domain DNS configured
- [ ] Repository cloned and scripts executable
- [ ] Automated deployment script executed
- [ ] Health checks passing
- [ ] SSL certificates installed
- [ ] Monitoring configured
- [ ] Backup strategy implemented
- [ ] Documentation reviewed
- [ ] Team access configured

---

**For additional support or questions:**
- 📧 Email: devops@xeur.ai
- 📖 Documentation: [GitHub Repository](https://github.com/cpg-xeur-ai/xeur-ai-blueprint-source)
- 🌐 Website: [https://xeur.ai](https://xeur.ai)

---

*This deployment guide ensures XEUR.AI runs reliably in production with proper monitoring, security, and maintenance procedures.*
