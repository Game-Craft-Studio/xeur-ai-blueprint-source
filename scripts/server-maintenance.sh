#!/bin/bash

# XEUR.AI Server Maintenance & Monitoring Script
# Version: 1.0
# Last Updated: May 27, 2025
# Description: Comprehensive server maintenance and monitoring for XEUR.AI

set -e

# Configuration
APP_DIR="/var/www/xeur-ai"
PM2_APP_NAME="xeur-ai-platform"
BACKUP_DIR="/var/backups/xeur-ai"
LOG_FILE="/var/log/xeur-ai-maintenance.log"
HEALTH_URL="https://xeur.ai/api/health"
ALERT_EMAIL="devops@xeur.ai"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Logging functions
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_FILE"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1" | tee -a "$LOG_FILE"
}

warning() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1" | tee -a "$LOG_FILE"
}

info() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')] INFO:${NC} $1" | tee -a "$LOG_FILE"
}

# Display usage
usage() {
    echo "XEUR.AI Server Maintenance & Monitoring Script"
    echo ""
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  status      - Show complete system status"
    echo "  health      - Perform health checks"
    echo "  restart     - Restart the application"
    echo "  update      - Update and redeploy application"
    echo "  backup      - Create system backup"
    echo "  restore     - Restore from backup"
    echo "  logs        - Show application logs"
    echo "  monitor     - Start continuous monitoring"
    echo "  ssl         - Renew SSL certificates"
    echo "  cleanup     - Clean up old files and logs"
    echo "  security    - Run security scans"
    echo "  performance - Performance analysis"
    echo ""
    echo "Examples:"
    echo "  $0 status       # Show current status"
    echo "  $0 health       # Run health checks"
    echo "  $0 monitor      # Start monitoring dashboard"
}

# Show system status
show_status() {
    log "🔍 XEUR.AI System Status Report"
    echo "================================="
    
    # Application Status
    echo -e "\n${BLUE}📱 Application Status:${NC}"
    if pm2 describe "$PM2_APP_NAME" > /dev/null 2>&1; then
        pm2 describe "$PM2_APP_NAME" | grep -E "(name|status|cpu|memory|uptime)"
        echo -e "${GREEN}✅ Application is running${NC}"
    else
        echo -e "${RED}❌ Application is not running${NC}"
    fi
    
    # System Resources
    echo -e "\n${BLUE}💾 System Resources:${NC}"
    echo "CPU Usage: $(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d'%' -f1)%"
    echo "Memory Usage: $(free | grep Mem | awk '{printf("%.1f%%", $3/$2 * 100.0)}')"
    echo "Disk Usage: $(df -h / | awk 'NR==2{printf "%s", $5}')"
    echo "Load Average: $(uptime | awk -F'load average:' '{print $2}')"
    
    # Network Status
    echo -e "\n${BLUE}🌐 Network Status:${NC}"
    if curl -s "$HEALTH_URL" > /dev/null; then
        echo -e "${GREEN}✅ Website is accessible${NC}"
    else
        echo -e "${RED}❌ Website is not accessible${NC}"
    fi
    
    # Service Status
    echo -e "\n${BLUE}⚙️ Service Status:${NC}"
    services=("nginx" "pm2" "ufw")
    for service in "${services[@]}"; do
        if systemctl is-active "$service" > /dev/null 2>&1; then
            echo -e "${GREEN}✅ $service is running${NC}"
        else
            echo -e "${RED}❌ $service is not running${NC}"
        fi
    done
    
    # SSL Certificate Status
    echo -e "\n${BLUE}🔒 SSL Certificate:${NC}"
    ssl_expiry=$(echo | openssl s_client -servername xeur.ai -connect xeur.ai:443 2>/dev/null | openssl x509 -noout -dates | grep notAfter | cut -d= -f2)
    if [ -n "$ssl_expiry" ]; then
        echo "SSL Expires: $ssl_expiry"
        echo -e "${GREEN}✅ SSL certificate is valid${NC}"
    else
        echo -e "${YELLOW}⚠️ Could not check SSL certificate${NC}"
    fi
}

# Health check
health_check() {
    log "🩺 Running comprehensive health checks..."
    
    local health_score=0
    local total_checks=6
    
    # Check 1: Application Response
    info "Checking application response..."
    if curl -f -s "$HEALTH_URL" > /dev/null; then
        echo -e "${GREEN}✅ Application responds correctly${NC}"
        health_score=$((health_score + 1))
    else
        echo -e "${RED}❌ Application not responding${NC}"
    fi
    
    # Check 2: PM2 Process
    info "Checking PM2 process..."
    if pm2 describe "$PM2_APP_NAME" > /dev/null 2>&1; then
        echo -e "${GREEN}✅ PM2 process is running${NC}"
        health_score=$((health_score + 1))
    else
        echo -e "${RED}❌ PM2 process not found${NC}"
    fi
    
    # Check 3: Nginx Status
    info "Checking Nginx status..."
    if systemctl is-active nginx > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Nginx is running${NC}"
        health_score=$((health_score + 1))
    else
        echo -e "${RED}❌ Nginx is not running${NC}"
    fi
    
    # Check 4: Disk Space
    info "Checking disk space..."
    disk_usage=$(df / | tail -1 | awk '{print $5}' | sed 's/%//')
    if [ "$disk_usage" -lt 80 ]; then
        echo -e "${GREEN}✅ Disk space is adequate (${disk_usage}% used)${NC}"
        health_score=$((health_score + 1))
    else
        echo -e "${YELLOW}⚠️ Disk space is running low (${disk_usage}% used)${NC}"
    fi
    
    # Check 5: Memory Usage
    info "Checking memory usage..."
    mem_usage=$(free | grep Mem | awk '{printf("%.0f", $3/$2 * 100.0)}')
    if [ "$mem_usage" -lt 85 ]; then
        echo -e "${GREEN}✅ Memory usage is normal (${mem_usage}% used)${NC}"
        health_score=$((health_score + 1))
    else
        echo -e "${YELLOW}⚠️ High memory usage (${mem_usage}% used)${NC}"
    fi
    
    # Check 6: SSL Certificate
    info "Checking SSL certificate..."
    if echo | openssl s_client -servername xeur.ai -connect xeur.ai:443 2>/dev/null | openssl x509 -noout -checkend 2592000 > /dev/null; then
        echo -e "${GREEN}✅ SSL certificate is valid${NC}"
        health_score=$((health_score + 1))
    else
        echo -e "${YELLOW}⚠️ SSL certificate expires soon${NC}"
    fi
    
    # Overall Health Score
    echo -e "\n${BLUE}📊 Overall Health Score: ${health_score}/${total_checks}${NC}"
    if [ "$health_score" -eq "$total_checks" ]; then
        log "🎉 All health checks passed!"
    elif [ "$health_score" -ge $((total_checks - 1)) ]; then
        warning "⚠️ Minor issues detected"
    else
        error "❌ Critical issues detected - immediate attention required"
    fi
}

# Restart application
restart_app() {
    log "🔄 Restarting XEUR.AI application..."
    
    cd "$APP_DIR"
    
    # Restart PM2 process
    pm2 restart "$PM2_APP_NAME"
    
    # Wait for startup
    sleep 5
    
    # Verify restart
    if pm2 describe "$PM2_APP_NAME" | grep -q "online"; then
        log "✅ Application restarted successfully"
    else
        error "❌ Application restart failed"
        return 1
    fi
}

# Update application
update_app() {
    log "🔄 Updating XEUR.AI application..."
    
    cd "$APP_DIR"
    
    # Create backup before update
    create_backup "pre-update"
    
    # Pull latest changes
    git pull origin main
    
    # Install dependencies
    npm ci --production
    
    # Build application
    npm run build
    
    # Restart application
    restart_app
    
    log "✅ Application updated successfully"
}

# Create backup
create_backup() {
    local backup_type=${1:-"manual"}
    local timestamp=$(date +"%Y%m%d-%H%M%S")
    local backup_name="xeur-ai-backup-${backup_type}-${timestamp}"
    
    log "💾 Creating backup: $backup_name"
    
    # Create backup directory
    mkdir -p "$BACKUP_DIR/$backup_name"
    
    # Backup application files
    cp -r "$APP_DIR" "$BACKUP_DIR/$backup_name/app"
    
    # Backup PM2 ecosystem
    pm2 save
    cp ~/.pm2/dump.pm2 "$BACKUP_DIR/$backup_name/"
    
    # Backup Nginx configuration
    sudo cp -r /etc/nginx/sites-available/xeur-ai "$BACKUP_DIR/$backup_name/"
    
    # Create backup metadata
    cat > "$BACKUP_DIR/$backup_name/metadata.txt" << EOL
Backup Created: $(date)
Backup Type: $backup_type
Application Version: $(cd "$APP_DIR" && git rev-parse HEAD)
Node Version: $(node --version)
PM2 Version: $(pm2 --version)
System: $(uname -a)
EOL
    
    # Compress backup
    cd "$BACKUP_DIR"
    tar -czf "${backup_name}.tar.gz" "$backup_name"
    rm -rf "$backup_name"
    
    log "💾 Backup created: ${backup_name}.tar.gz"
}

# Show logs
show_logs() {
    echo "📋 XEUR.AI Application Logs"
    echo "============================"
    echo ""
    echo "PM2 Logs:"
    pm2 logs "$PM2_APP_NAME" --lines 50
    echo ""
    echo "System Logs:"
    tail -50 "$LOG_FILE"
}

# Continuous monitoring
start_monitoring() {
    log "🔍 Starting continuous monitoring..."
    
    while true; do
        clear
        echo "🔍 XEUR.AI Live Monitoring Dashboard"
        echo "====================================="
        echo "Press Ctrl+C to exit"
        echo ""
        
        # Quick status
        if curl -s "$HEALTH_URL" > /dev/null; then
            echo -e "${GREEN}🟢 Status: ONLINE${NC}"
        else
            echo -e "${RED}🔴 Status: OFFLINE${NC}"
        fi
        
        # Resource usage
        echo ""
        echo "📊 Resource Usage:"
        echo "CPU: $(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d'%' -f1)%"
        echo "Memory: $(free | grep Mem | awk '{printf("%.1f%%", $3/$2 * 100.0)}')"
        echo "Disk: $(df -h / | awk 'NR==2{printf "%s", $5}')"
        
        # PM2 status
        echo ""
        echo "🔧 PM2 Process:"
        pm2 describe "$PM2_APP_NAME" | grep -E "(status|cpu|memory|uptime)" | head -4
        
        sleep 5
    done
}

# Renew SSL certificates
renew_ssl() {
    log "🔒 Renewing SSL certificates..."
    
    # Test renewal
    sudo certbot renew --dry-run
    
    # Actual renewal
    sudo certbot renew
    
    # Reload Nginx
    sudo systemctl reload nginx
    
    log "✅ SSL certificates renewed"
}

# Cleanup old files
cleanup() {
    log "🧹 Cleaning up old files and logs..."
    
    # Clean old backups (keep last 10)
    cd "$BACKUP_DIR"
    ls -t *.tar.gz | tail -n +11 | xargs -r rm
    
    # Clean PM2 logs
    pm2 flush
    
    # Clean system logs
    sudo journalctl --vacuum-time=30d
    
    # Clean old Node modules cache
    npm cache clean --force
    
    log "✅ Cleanup completed"
}

# Security scan
security_scan() {
    log "🔒 Running security scans..."
    
    # Check for failed login attempts
    echo "Failed SSH login attempts:"
    sudo grep "Failed password" /var/log/auth.log | tail -10
    
    # Check UFW status
    echo -e "\n🔥 Firewall Status:"
    sudo ufw status verbose
    
    # Check for running processes
    echo -e "\n🔍 Running Processes:"
    ps aux | head -10
    
    # Check open ports
    echo -e "\n🚪 Open Ports:"
    sudo netstat -tulpn | grep LISTEN
    
    log "✅ Security scan completed"
}

# Performance analysis
performance_check() {
    log "⚡ Running performance analysis..."
    
    # Check application response time
    echo "🌐 Application Response Time:"
    curl -o /dev/null -s -w "Total: %{time_total}s\nConnect: %{time_connect}s\nTransfer: %{time_starttransfer}s\n" "$HEALTH_URL"
    
    # Check system load
    echo -e "\n📊 System Load:"
    uptime
    
    # Check memory usage breakdown
    echo -e "\n💾 Memory Usage:"
    free -h
    
    # Check disk I/O
    echo -e "\n💿 Disk I/O:"
    iostat -x 1 1 2>/dev/null || echo "iostat not available"
    
    log "✅ Performance analysis completed"
}

# Main function
main() {
    case "$1" in
        "status")
            show_status
            ;;
        "health")
            health_check
            ;;
        "restart")
            restart_app
            ;;
        "update")
            update_app
            ;;
        "backup")
            create_backup
            ;;
        "logs")
            show_logs
            ;;
        "monitor")
            start_monitoring
            ;;
        "ssl")
            renew_ssl
            ;;
        "cleanup")
            cleanup
            ;;
        "security")
            security_scan
            ;;
        "performance")
            performance_check
            ;;
        *)
            usage
            ;;
    esac
}

# Create log file if it doesn't exist
mkdir -p "$(dirname "$LOG_FILE")"
touch "$LOG_FILE"

# Run main function
main "$@"
