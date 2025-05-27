#!/bin/bash

# XEUR.AI Google Cloud VM Deployment Script
# Version: 1.0
# Last Updated: May 27, 2025
# Description: Complete deployment script for XEUR.AI platform on Google Cloud VM

set -e  # Exit on any error

# Configuration
PROJECT_NAME="xeur-ai"
APP_DIR="/var/www/xeur-ai"
NODE_VERSION="18.17.0"
PM2_APP_NAME="xeur-ai-platform"
BACKUP_DIR="/var/backups/xeur-ai"
LOG_FILE="/var/log/xeur-ai-deploy.log"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_FILE"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1" | tee -a "$LOG_FILE"
    exit 1
}

warning() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1" | tee -a "$LOG_FILE"
}

info() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')] INFO:${NC} $1" | tee -a "$LOG_FILE"
}

# Check if running as root
check_root() {
    if [[ $EUID -eq 0 ]]; then
        warning "Running as root. This is not recommended for production."
        read -p "Continue anyway? (y/N): " -r
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi
}

# System updates and prerequisites
install_prerequisites() {
    log "Installing system prerequisites..."
    
    # Update system
    sudo apt-get update -y
    sudo apt-get upgrade -y
    
    # Install essential packages
    sudo apt-get install -y \
        curl \
        wget \
        git \
        build-essential \
        nginx \
        certbot \
        python3-certbot-nginx \
        ufw \
        htop \
        unzip
    
    log "System prerequisites installed successfully"
}

# Install Node.js and npm
install_nodejs() {
    log "Installing Node.js $NODE_VERSION..."
    
    # Install Node.js using NodeSource repository
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
    
    # Verify installation
    node_version=$(node --version)
    npm_version=$(npm --version)
    
    log "Node.js $node_version and npm $npm_version installed successfully"
}

# Install PM2 for process management
install_pm2() {
    log "Installing PM2 process manager..."
    
    sudo npm install -g pm2
    
    # Configure PM2 to start on boot
    sudo pm2 startup
    
    log "PM2 installed and configured for startup"
}

# Create application directory and user
setup_app_directory() {
    log "Setting up application directory..."
    
    # Create app directory
    sudo mkdir -p "$APP_DIR"
    sudo mkdir -p "$BACKUP_DIR"
    sudo mkdir -p "$(dirname "$LOG_FILE")"
    
    # Set permissions
    sudo chown -R "$USER:$USER" "$APP_DIR"
    sudo chown -R "$USER:$USER" "$BACKUP_DIR"
    
    log "Application directory setup completed"
}

# Deploy application code
deploy_application() {
    log "Deploying XEUR.AI application..."
    
    # Backup existing deployment
    if [ -d "$APP_DIR/.next" ]; then
        warning "Existing deployment found. Creating backup..."
        sudo cp -r "$APP_DIR" "$BACKUP_DIR/backup-$(date +%Y%m%d-%H%M%S)"
    fi
    
    # Navigate to app directory
    cd "$APP_DIR"
    
    # Pull latest code (assuming Git repository is already cloned)
    if [ -d ".git" ]; then
        log "Updating from Git repository..."
        git pull origin main
    else
        error "Git repository not found. Please clone the repository first."
    fi
    
    # Install dependencies
    log "Installing Node.js dependencies..."
    npm ci --production
    
    # Build application
    log "Building application for production..."
    npm run build
    
    log "Application deployment completed"
}

# Configure environment variables
setup_environment() {
    log "Setting up environment variables..."
    
    # Create production environment file
    cat > "$APP_DIR/.env.production" << EOL
# XEUR.AI Production Environment
NEXT_PUBLIC_APP_URL=https://xeur.ai
NEXT_PUBLIC_API_URL=https://api.xeur.ai
NEXT_PUBLIC_ENVIRONMENT=production
NEXT_PUBLIC_COMPANY_STAGE=alpha-beta
NEXT_PUBLIC_FUNDING_STATUS=raising
NODE_ENV=production
PORT=3000
EOL
    
    # Set secure permissions
    chmod 600 "$APP_DIR/.env.production"
    
    log "Environment variables configured"
}

# Configure Nginx reverse proxy
setup_nginx() {
    log "Configuring Nginx reverse proxy..."
    
    # Create Nginx configuration
    sudo tee /etc/nginx/sites-available/xeur-ai << EOL
server {
    listen 80;
    server_name xeur.ai www.xeur.ai;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
    
    # Health check endpoint
    location /api/health {
        proxy_pass http://localhost:3000/api/health;
        access_log off;
    }
    
    # Static assets
    location /_next/static {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
    
    # Favicon and robots.txt
    location /favicon.ico {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=86400";
    }
    
    location /robots.txt {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=86400";
    }
}
EOL
    
    # Enable the site
    sudo ln -sf /etc/nginx/sites-available/xeur-ai /etc/nginx/sites-enabled/
    sudo rm -f /etc/nginx/sites-enabled/default
    
    # Test Nginx configuration
    sudo nginx -t || error "Nginx configuration test failed"
    
    # Reload Nginx
    sudo systemctl reload nginx
    
    log "Nginx configuration completed"
}

# Setup SSL with Let's Encrypt
setup_ssl() {
    log "Setting up SSL certificate with Let's Encrypt..."
    
    # Install SSL certificate
    sudo certbot --nginx -d xeur.ai -d www.xeur.ai --non-interactive --agree-tos --email hello@xeur.ai
    
    # Setup auto-renewal
    sudo crontab -l | { cat; echo "0 2 * * * /usr/bin/certbot renew --quiet"; } | sudo crontab -
    
    log "SSL certificate installed and auto-renewal configured"
}

# Configure firewall
setup_firewall() {
    log "Configuring UFW firewall..."
    
    # Reset firewall rules
    sudo ufw --force reset
    
    # Default policies
    sudo ufw default deny incoming
    sudo ufw default allow outgoing
    
    # Allow SSH, HTTP, and HTTPS
    sudo ufw allow ssh
    sudo ufw allow 'Nginx Full'
    
    # Enable firewall
    sudo ufw --force enable
    
    log "Firewall configured successfully"
}

# Start the application with PM2
start_application() {
    log "Starting XEUR.AI application with PM2..."
    
    cd "$APP_DIR"
    
    # Stop existing PM2 process if running
    pm2 stop "$PM2_APP_NAME" 2>/dev/null || true
    pm2 delete "$PM2_APP_NAME" 2>/dev/null || true
    
    # Start application
    pm2 start npm --name "$PM2_APP_NAME" -- start
    
    # Save PM2 configuration
    pm2 save
    
    # Show PM2 status
    pm2 status
    
    log "Application started successfully"
}

# Setup monitoring and logging
setup_monitoring() {
    log "Setting up monitoring and logging..."
    
    # Create log rotation configuration
    sudo tee /etc/logrotate.d/xeur-ai << EOL
/var/log/xeur-ai-deploy.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 $USER $USER
}
EOL
    
    # Setup PM2 log rotation
    pm2 install pm2-logrotate
    
    log "Monitoring and logging configured"
}

# Health check
perform_health_check() {
    log "Performing health check..."
    
    # Wait for application to start
    sleep 10
    
    # Check if application is responding
    if curl -f http://localhost:3000/api/health > /dev/null 2>&1; then
        log "✅ Health check passed - Application is running correctly"
    else
        error "❌ Health check failed - Application is not responding"
    fi
    
    # Check Nginx status
    if sudo systemctl is-active nginx > /dev/null 2>&1; then
        log "✅ Nginx is running correctly"
    else
        error "❌ Nginx is not running"
    fi
}

# Main deployment function
main() {
    log "🚀 Starting XEUR.AI deployment process..."
    
    check_root
    install_prerequisites
    install_nodejs
    install_pm2
    setup_app_directory
    deploy_application
    setup_environment
    setup_nginx
    setup_ssl
    setup_firewall
    start_application
    setup_monitoring
    perform_health_check
    
    log "🎉 XEUR.AI deployment completed successfully!"
    log "🌐 Website: https://xeur.ai"
    log "📊 Health Check: https://xeur.ai/api/health"
    log "📱 Beta Signup: https://xeur.ai/#beta"
    log "🎮 Demo: https://xeur.ai/#demo"
    
    info "Deployment Summary:"
    info "- Application Directory: $APP_DIR"
    info "- Log File: $LOG_FILE"
    info "- PM2 Process: $PM2_APP_NAME"
    info "- Backup Directory: $BACKUP_DIR"
    
    info "Next Steps:"
    info "1. Test the website: https://xeur.ai"
    info "2. Monitor logs: pm2 logs $PM2_APP_NAME"
    info "3. Check status: pm2 status"
    info "4. Update DNS if needed"
}

# Run deployment
main "$@"
