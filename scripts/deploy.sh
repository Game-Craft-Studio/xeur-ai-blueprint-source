#!/bin/bash
# XEUR.AI Production Deployment Script for Google Cloud VM
# Version: 1.0
# Usage: ./scripts/deploy.sh [environment]

set -e  # Exit on any error

# =================================================================
# CONFIGURATION
# =================================================================
PROJECT_NAME="xeur-ai-platform"
REPO_URL="https://github.com/cpg-xeur-ai/xeur-ai-blueprint-source.git"
DEPLOY_USER="deploy"
APP_DIR="/var/www/xeur-ai"
BACKUP_DIR="/var/backups/xeur-ai"
LOG_FILE="/var/log/xeur-ai-deploy.log"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# =================================================================
# HELPER FUNCTIONS
# =================================================================
log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_FILE"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" | tee -a "$LOG_FILE"
    exit 1
}

warn() {
    echo -e "${YELLOW}[WARNING]${NC} $1" | tee -a "$LOG_FILE"
}

info() {
    echo -e "${BLUE}[INFO]${NC} $1" | tee -a "$LOG_FILE"
}

# =================================================================
# SYSTEM CHECKS
# =================================================================
check_prerequisites() {
    log "🔍 Checking prerequisites..."
    
    # Check if running as root or with sudo
    if [[ $EUID -ne 0 ]]; then
        error "This script must be run as root or with sudo"
    fi
    
    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed. Please install Node.js 18+ first."
    fi
    
    # Check Node.js version
    NODE_VERSION=$(node --version | cut -d'v' -f2)
    if ! node -e "process.exit(require('semver').gte('$NODE_VERSION', '18.17.0'))" 2>/dev/null; then
        error "Node.js version 18.17.0 or higher is required. Current: $NODE_VERSION"
    fi
    
    # Check if PM2 is installed
    if ! command -v pm2 &> /dev/null; then
        warn "PM2 is not installed. Installing PM2..."
        npm install -g pm2
    fi
    
    # Check if Git is installed
    if ! command -v git &> /dev/null; then
        error "Git is not installed. Please install Git first."
    fi
    
    log "✅ Prerequisites check passed"
}

# =================================================================
# BACKUP FUNCTIONS
# =================================================================
create_backup() {
    log "📦 Creating backup..."
    
    if [ -d "$APP_DIR" ]; then
        BACKUP_NAME="xeur-ai-backup-$(date +%Y%m%d-%H%M%S)"
        mkdir -p "$BACKUP_DIR"
        
        # Stop the application before backup
        pm2 stop xeur-ai || true
        
        # Create backup
        tar -czf "$BACKUP_DIR/$BACKUP_NAME.tar.gz" -C "$(dirname "$APP_DIR")" "$(basename "$APP_DIR")"
        
        log "✅ Backup created: $BACKUP_DIR/$BACKUP_NAME.tar.gz"
    else
        info "No existing application to backup"
    fi
}

# =================================================================
# DEPLOYMENT FUNCTIONS
# =================================================================
setup_directories() {
    log "📁 Setting up directories..."
    
    # Create app directory
    mkdir -p "$APP_DIR"
    
    # Create backup directory
    mkdir -p "$BACKUP_DIR"
    
    # Create log directory
    mkdir -p "$(dirname "$LOG_FILE")"
    
    # Set permissions
    chown -R "$DEPLOY_USER:$DEPLOY_USER" "$APP_DIR" || true
    
    log "✅ Directories setup complete"
}

clone_or_update_repo() {
    log "📥 Fetching latest code..."
    
    if [ -d "$APP_DIR/.git" ]; then
        # Update existing repository
        cd "$APP_DIR"
        sudo -u "$DEPLOY_USER" git fetch origin
        sudo -u "$DEPLOY_USER" git reset --hard origin/main
        sudo -u "$DEPLOY_USER" git clean -fd
    else
        # Clone fresh repository
        rm -rf "$APP_DIR"
        sudo -u "$DEPLOY_USER" git clone "$REPO_URL" "$APP_DIR"
        cd "$APP_DIR"
    fi
    
    # Get commit info
    COMMIT_SHA=$(git rev-parse HEAD)
    COMMIT_MSG=$(git log -1 --pretty=%B)
    
    info "Deployed commit: $COMMIT_SHA"
    info "Commit message: $COMMIT_MSG"
    
    log "✅ Code fetch complete"
}

install_dependencies() {
    log "📦 Installing dependencies..."
    
    cd "$APP_DIR"
    
    # Clear npm cache
    sudo -u "$DEPLOY_USER" npm cache clean --force
    
    # Install dependencies
    sudo -u "$DEPLOY_USER" npm ci --only=production --no-audit
    
    log "✅ Dependencies installed"
}

build_application() {
    log "🔨 Building application..."
    
    cd "$APP_DIR"
    
    # Set production environment
    export NODE_ENV=production
    
    # Build the application
    sudo -u "$DEPLOY_USER" npm run build
    
    log "✅ Application built successfully"
}

setup_environment() {
    log "⚙️ Setting up environment..."
    
    cd "$APP_DIR"
    
    # Copy environment file if it doesn't exist
    if [ ! -f ".env.local" ]; then
        if [ -f ".env.example" ]; then
            cp ".env.example" ".env.local"
            warn "Created .env.local from .env.example. Please configure it manually."
        else
            warn "No .env.example found. Please create .env.local manually."
        fi
    fi
    
    # Set ownership
    chown "$DEPLOY_USER:$DEPLOY_USER" ".env.local" || true
    
    log "✅ Environment setup complete"
}

configure_pm2() {
    log "🚀 Configuring PM2..."
    
    cd "$APP_DIR"
    
    # Create PM2 ecosystem file
    cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'xeur-ai',
    script: 'npm',
    args: 'start',
    cwd: '$APP_DIR',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    log_file: '/var/log/xeur-ai/combined.log',
    out_file: '/var/log/xeur-ai/out.log',
    error_file: '/var/log/xeur-ai/error.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    max_memory_restart: '1G',
    node_args: '--max-old-space-size=1024',
    watch: false,
    ignore_watch: ['node_modules', '.git', '.next'],
    restart_delay: 5000,
    max_restarts: 10,
    min_uptime: '10s',
  }]
};
EOF
    
    # Create log directory
    mkdir -p /var/log/xeur-ai
    chown -R "$DEPLOY_USER:$DEPLOY_USER" /var/log/xeur-ai
    
    log "✅ PM2 configuration complete"
}

deploy_application() {
    log "🚀 Deploying application..."
    
    cd "$APP_DIR"
    
    # Stop existing application
    pm2 stop xeur-ai || true
    pm2 delete xeur-ai || true
    
    # Start application with PM2
    sudo -u "$DEPLOY_USER" pm2 start ecosystem.config.js
    
    # Save PM2 configuration
    sudo -u "$DEPLOY_USER" pm2 save
    
    # Setup PM2 startup script
    pm2 startup systemd -u "$DEPLOY_USER" --hp "/home/$DEPLOY_USER"
    
    log "✅ Application deployed successfully"
}

setup_nginx() {
    log "🌐 Setting up Nginx..."
    
    # Check if Nginx is installed
    if ! command -v nginx &> /dev/null; then
        warn "Nginx is not installed. Installing..."
        apt update
        apt install -y nginx
    fi
    
    # Create Nginx configuration
    cat > /etc/nginx/sites-available/xeur-ai << EOF
server {
    listen 80;
    server_name xeur.ai www.xeur.ai;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private auth;
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
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
    
    # Static files caching
    location /_next/static/ {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
    
    # Health check
    location /health {
        proxy_pass http://localhost:3000;
        access_log off;
    }
}
EOF
    
    # Enable site
    ln -sf /etc/nginx/sites-available/xeur-ai /etc/nginx/sites-enabled/
    
    # Remove default site
    rm -f /etc/nginx/sites-enabled/default
    
    # Test Nginx configuration
    nginx -t
    
    # Reload Nginx
    systemctl reload nginx
    
    log "✅ Nginx setup complete"
}

setup_ssl() {
    log "🔒 Setting up SSL with Let's Encrypt..."
    
    # Check if certbot is installed
    if ! command -v certbot &> /dev/null; then
        warn "Certbot is not installed. Installing..."
        apt update
        apt install -y certbot python3-certbot-nginx
    fi
    
    # Generate SSL certificate
    certbot --nginx -d xeur.ai -d www.xeur.ai --non-interactive --agree-tos --email admin@xeur.ai || warn "SSL setup failed - manual configuration required"
    
    log "✅ SSL setup complete"
}

# =================================================================
# MONITORING FUNCTIONS
# =================================================================
setup_monitoring() {
    log "📊 Setting up monitoring..."
    
    # Install PM2 monitor
    sudo -u "$DEPLOY_USER" pm2 install pm2-logrotate
    
    # Configure log rotation
    sudo -u "$DEPLOY_USER" pm2 set pm2-logrotate:max_size 10M
    sudo -u "$DEPLOY_USER" pm2 set pm2-logrotate:retain 30
    sudo -u "$DEPLOY_USER" pm2 set pm2-logrotate:compress true
    
    log "✅ Monitoring setup complete"
}

# =================================================================
# HEALTH CHECK
# =================================================================
health_check() {
    log "🏥 Performing health check..."
    
    # Wait for application to start
    sleep 10
    
    # Check if application is responding
    if curl -f http://localhost:3000/health &> /dev/null; then
        log "✅ Health check passed - Application is running"
    else
        error "❌ Health check failed - Application is not responding"
    fi
}

# =================================================================
# CLEANUP
# =================================================================
cleanup_old_backups() {
    log "🧹 Cleaning up old backups..."
    
    # Keep only last 5 backups
    find "$BACKUP_DIR" -name "xeur-ai-backup-*.tar.gz" -type f | sort -r | tail -n +6 | xargs rm -f
    
    log "✅ Old backups cleaned up"
}

# =================================================================
# MAIN DEPLOYMENT FUNCTION
# =================================================================
main() {
    local ENVIRONMENT="${1:-production}"
    
    log "🚀 Starting XEUR.AI deployment to $ENVIRONMENT environment"
    log "🔗 Repository: $REPO_URL"
    log "📂 Deploy to: $APP_DIR"
    
    # Run deployment steps
    check_prerequisites
    create_backup
    setup_directories
    clone_or_update_repo
    install_dependencies
    setup_environment
    build_application
    configure_pm2
    deploy_application
    setup_nginx
    setup_ssl
    setup_monitoring
    health_check
    cleanup_old_backups
    
    log "🎉 Deployment completed successfully!"
    log "🌐 Application is running at: http://localhost:3000"
    log "📊 Monitor with: pm2 monit"
    log "📝 Logs: pm2 logs xeur-ai"
    
    # Show application status
    pm2 list
}

# =================================================================
# ERROR HANDLING
# =================================================================
trap 'error "Deployment failed on line $LINENO"' ERR

# =================================================================
# SCRIPT EXECUTION
# =================================================================
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
fi