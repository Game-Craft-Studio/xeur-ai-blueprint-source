#!/bin/bash
# XEUR.AI Server Setup Script for Google Cloud VM
# Version: 1.0
# Usage: ./scripts/setup-server.sh

set -e  # Exit on any error

# =================================================================
# CONFIGURATION
# =================================================================
DEPLOY_USER="deploy"
NODE_VERSION="18.17.0"
LOG_FILE="/var/log/xeur-ai-setup.log"

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
# SYSTEM SETUP
# =================================================================
setup_system() {
    log "🔧 Setting up system..."
    
    # Update system packages
    apt update && apt upgrade -y
    
    # Install essential packages
    apt install -y curl wget git unzip software-properties-common \
                   build-essential python3 python3-pip \
                   nginx certbot python3-certbot-nginx \
                   ufw fail2ban htop tree jq
    
    # Configure timezone
    timedatectl set-timezone UTC
    
    log "✅ System setup complete"
}

setup_user() {
    log "👤 Setting up deploy user..."
    
    # Create deploy user if it doesn't exist
    if ! id "$DEPLOY_USER" &>/dev/null; then
        useradd -m -s /bin/bash "$DEPLOY_USER"
        usermod -aG sudo "$DEPLOY_USER"
        
        # Set up SSH directory
        mkdir -p "/home/$DEPLOY_USER/.ssh"
        chmod 700 "/home/$DEPLOY_USER/.ssh"
        chown "$DEPLOY_USER:$DEPLOY_USER" "/home/$DEPLOY_USER/.ssh"
        
        log "✅ Deploy user created: $DEPLOY_USER"
    else
        info "Deploy user already exists: $DEPLOY_USER"
    fi
}

install_nodejs() {
    log "📦 Installing Node.js..."
    
    # Install Node.js using NodeSource repository
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
    apt install -y nodejs
    
    # Verify installation
    NODE_INSTALLED_VERSION=$(node --version | cut -d'v' -f2)
    log "✅ Node.js installed: v$NODE_INSTALLED_VERSION"
    
    # Install global packages
    npm install -g pm2 npm@latest
    
    log "✅ Global packages installed"
}

setup_firewall() {
    log "🔥 Setting up firewall..."
    
    # Reset UFW to defaults
    ufw --force reset
    
    # Default policies
    ufw default deny incoming
    ufw default allow outgoing
    
    # Allow SSH
    ufw allow ssh
    ufw allow 22/tcp
    
    # Allow HTTP and HTTPS
    ufw allow 80/tcp
    ufw allow 443/tcp
    
    # Allow application port (if needed for direct access)
    ufw allow 3000/tcp comment "XEUR.AI App"
    
    # Enable firewall
    ufw --force enable
    
    log "✅ Firewall configured"
}

setup_fail2ban() {
    log "🛡️ Setting up Fail2Ban..."
    
    # Create custom jail configuration
    cat > /etc/fail2ban/jail.local << EOF
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 3
backend = systemd

[sshd]
enabled = true
port = ssh
logpath = %(sshd_log)s

[nginx-http-auth]
enabled = true
port = http,https
logpath = /var/log/nginx/error.log

[nginx-limit-req]
enabled = true
port = http,https
logpath = /var/log/nginx/error.log
maxretry = 10
EOF
    
    # Restart fail2ban
    systemctl restart fail2ban
    systemctl enable fail2ban
    
    log "✅ Fail2Ban configured"
}

configure_nginx() {
    log "🌐 Configuring Nginx..."
    
    # Remove default configuration
    rm -f /etc/nginx/sites-enabled/default
    
    # Create optimized nginx.conf
    cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup
    
    cat > /etc/nginx/nginx.conf << 'EOF'
user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
    worker_connections 1024;
    use epoll;
    multi_accept on;
}

http {
    # Basic Settings
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    server_tokens off;
    
    # File uploads
    client_max_body_size 50M;
    
    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    
    # SSL Settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;
    
    # Logging Settings
    log_format detailed '$remote_addr - $remote_user [$time_local] '
                       '"$request" $status $body_bytes_sent '
                       '"$http_referer" "$http_user_agent" '
                       '$request_time $upstream_response_time';
    
    access_log /var/log/nginx/access.log detailed;
    error_log /var/log/nginx/error.log;
    
    # Gzip Settings
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/xml+rss
        application/atom+xml
        image/svg+xml;
    
    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
    limit_req_zone $binary_remote_addr zone=login:10m rate=1r/s;
    
    # Include site configurations
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
EOF
    
    # Test nginx configuration
    nginx -t
    
    # Restart nginx
    systemctl restart nginx
    systemctl enable nginx
    
    log "✅ Nginx configured"
}

setup_monitoring() {
    log "📊 Setting up monitoring..."
    
    # Create monitoring script
    mkdir -p /opt/xeur-ai/monitoring
    
    cat > /opt/xeur-ai/monitoring/health-check.sh << 'EOF'
#!/bin/bash
# XEUR.AI Health Check Script

LOG_FILE="/var/log/xeur-ai/health-check.log"
ALERT_EMAIL="admin@xeur.ai"

check_service() {
    local service=$1
    if systemctl is-active --quiet $service; then
        echo "✅ $service is running"
        return 0
    else
        echo "❌ $service is down"
        return 1
    fi
}

check_port() {
    local port=$1
    if nc -z localhost $port; then
        echo "✅ Port $port is open"
        return 0
    else
        echo "❌ Port $port is closed"
        return 1
    fi
}

check_url() {
    local url=$1
    if curl -f -s $url > /dev/null; then
        echo "✅ $url is responding"
        return 0
    else
        echo "❌ $url is not responding"
        return 1
    fi
}

main() {
    echo "🏥 Health Check - $(date)" | tee -a $LOG_FILE
    
    # Check services
    check_service nginx || ISSUES=1
    check_service fail2ban || ISSUES=1
    
    # Check ports
    check_port 80 || ISSUES=1
    check_port 443 || ISSUES=1
    check_port 3000 || ISSUES=1
    
    # Check application
    check_url "http://localhost:3000/health" || ISSUES=1
    
    # Check disk space
    DISK_USAGE=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')
    if [ $DISK_USAGE -gt 80 ]; then
        echo "⚠️ Disk usage is at ${DISK_USAGE}%"
        ISSUES=1
    else
        echo "✅ Disk usage is at ${DISK_USAGE}%"
    fi
    
    # Check memory
    MEM_USAGE=$(free | awk 'NR==2{printf "%.0f", $3*100/$2}')
    if [ $MEM_USAGE -gt 90 ]; then
        echo "⚠️ Memory usage is at ${MEM_USAGE}%"
        ISSUES=1
    else
        echo "✅ Memory usage is at ${MEM_USAGE}%"
    fi
    
    if [ ${ISSUES:-0} -eq 1 ]; then
        echo "❌ Health check failed" | tee -a $LOG_FILE
        exit 1
    else
        echo "✅ All checks passed" | tee -a $LOG_FILE
    fi
}

main "$@"
EOF
    
    chmod +x /opt/xeur-ai/monitoring/health-check.sh
    
    # Create cron job for health checks
    cat > /etc/cron.d/xeur-ai-health << EOF
# XEUR.AI Health Check - runs every 5 minutes
*/5 * * * * root /opt/xeur-ai/monitoring/health-check.sh
EOF
    
    log "✅ Monitoring setup complete"
}

setup_logrotate() {
    log "📝 Setting up log rotation..."
    
    cat > /etc/logrotate.d/xeur-ai << 'EOF'
/var/log/xeur-ai/*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    notifempty
    create 644 deploy deploy
    postrotate
        pm2 reload xeur-ai || true
    endscript
}

/var/log/nginx/*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    notifempty
    sharedscripts
    postrotate
        systemctl reload nginx
    endscript
}
EOF
    
    log "✅ Log rotation configured"
}

optimize_system() {
    log "⚡ Optimizing system performance..."
    
    # Increase file descriptor limits
    cat >> /etc/security/limits.conf << EOF
deploy soft nofile 65536
deploy hard nofile 65536
root soft nofile 65536
root hard nofile 65536
EOF
    
    # Optimize kernel parameters
    cat >> /etc/sysctl.conf << EOF
# XEUR.AI Performance Optimizations
net.core.somaxconn = 1024
net.ipv4.tcp_max_syn_backlog = 1024
net.ipv4.ip_local_port_range = 1024 65535
net.core.rmem_default = 262144
net.core.rmem_max = 16777216
net.core.wmem_default = 262144
net.core.wmem_max = 16777216
vm.swappiness = 10
EOF
    
    sysctl -p
    
    log "✅ System optimization complete"
}

create_maintenance_scripts() {
    log "🔧 Creating maintenance scripts..."
    
    mkdir -p /opt/xeur-ai/scripts
    
    # Backup script
    cat > /opt/xeur-ai/scripts/backup.sh << 'EOF'
#!/bin/bash
# XEUR.AI Backup Script

BACKUP_DIR="/var/backups/xeur-ai"
APP_DIR="/var/www/xeur-ai"
TIMESTAMP=$(date +%Y%m%d-%H%M%S)

mkdir -p "$BACKUP_DIR"

echo "🗂️ Creating backup..."
tar -czf "$BACKUP_DIR/xeur-ai-backup-$TIMESTAMP.tar.gz" \
    -C "$(dirname "$APP_DIR")" "$(basename "$APP_DIR")" \
    --exclude="node_modules" \
    --exclude=".next" \
    --exclude=".git"

echo "✅ Backup created: $BACKUP_DIR/xeur-ai-backup-$TIMESTAMP.tar.gz"

# Keep only last 10 backups
find "$BACKUP_DIR" -name "xeur-ai-backup-*.tar.gz" -type f | sort -r | tail -n +11 | xargs rm -f
EOF
    
    # Update script
    cat > /opt/xeur-ai/scripts/update.sh << 'EOF'
#!/bin/bash
# XEUR.AI Update Script

cd /var/www/xeur-ai
git pull origin main
npm ci --only=production
npm run build
pm2 restart xeur-ai
EOF
    
    # Make scripts executable
    chmod +x /opt/xeur-ai/scripts/*.sh
    
    log "✅ Maintenance scripts created"
}

# =================================================================
# MAIN SETUP FUNCTION
# =================================================================
main() {
    log "🚀 Starting XEUR.AI server setup..."
    
    # Check if running as root
    if [[ $EUID -ne 0 ]]; then
        error "This script must be run as root"
    fi
    
    setup_system
    setup_user
    install_nodejs
    setup_firewall
    setup_fail2ban
    configure_nginx
    setup_monitoring
    setup_logrotate
    optimize_system
    create_maintenance_scripts
    
    log "🎉 Server setup completed successfully!"
    log "👤 Deploy user created: $DEPLOY_USER"
    log "🔧 Run the following to deploy XEUR.AI:"
    log "   sudo ./scripts/deploy.sh"
    
    echo ""
    echo "📋 Next Steps:"
    echo "1. Configure DNS to point to this server"
    echo "2. Run: sudo ./scripts/deploy.sh"
    echo "3. Configure SSL: sudo certbot --nginx -d yourdomain.com"
    echo "4. Test the application: curl http://localhost/health"
}

# =================================================================
# SCRIPT EXECUTION
# =================================================================
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
fi