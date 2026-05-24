#!/bin/bash

# SAID Bau - WordPress POC Setup Script
# This script automates the WordPress setup including plugins, pages, and content

set -e

echo "================================"
echo "SAID Bau WordPress POC Setup"
echo "================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if Docker is installed
echo "Checking Docker installation..."
if ! command -v docker &> /dev/null; then
    echo -e "${RED}Docker is not installed. Please install Docker first.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Docker found${NC}"
echo ""

# Stop existing containers if running
echo "Cleaning up previous instances..."
docker-compose down 2>/dev/null || true
sleep 2

# Start Docker containers
echo "Starting Docker containers..."
docker-compose up -d

# Wait for WordPress to be ready
echo "Waiting for WordPress to start (this may take 30-60 seconds)..."
sleep 30

# Check if WordPress is ready
for i in {1..30}; do
    if docker exec said-bau-wordpress wp core is-installed --allow-root 2>/dev/null; then
        echo -e "${GREEN}✓ WordPress is running${NC}"
        break
    fi
    echo "Still waiting... (attempt $i/30)"
    sleep 2
done

echo ""
echo "================================"
echo "Installing WordPress Plugins"
echo "================================"
echo ""

# Install required plugins
PLUGINS=(
    "elementor"
    "contact-form-7"
    "polylang"
    "yoast-seo"
    "wp-super-cache"
    "wordfence"
    "updraftplus"
)

for plugin in "${PLUGINS[@]}"; do
    echo "Installing $plugin..."
    docker exec said-bau-wordpress wp plugin install $plugin --activate --allow-root 2>/dev/null || echo "Note: $plugin may require configuration"
done

echo -e "${GREEN}✓ Plugins installed${NC}"
echo ""

# Configure WordPress settings
echo "================================"
echo "Configuring WordPress Settings"
echo "================================"
echo ""

docker exec said-bau-wordpress wp option update blogname "SAID Bau" --allow-root
docker exec said-bau-wordpress wp option update blogdescription "Professionelle Renovierungsdienstleistungen" --allow-root
docker exec said-bau-wordpress wp option update siteurl "http://localhost:8000" --allow-root
docker exec said-bau-wordpress wp option update home "http://localhost:8000" --allow-root

echo -e "${GREEN}✓ Basic settings configured${NC}"

# Create pages
echo ""
echo "================================"
echo "Creating Pages"
echo "================================"
echo ""

PAGES=(
    "Home|home"
    "About|about"
    "Services|services"
    "Projects|projects"
    "Contact|contact"
)

for page_info in "${PAGES[@]}"; do
    IFS='|' read -r title slug <<< "$page_info"
    echo "Creating $title page..."
    docker exec said-bau-wordpress wp post create \
        --post_type=page \
        --post_title="$title" \
        --post_name="$slug" \
        --post_content="<h1>$title Page</h1><p>Content for $title will be added here.</p>" \
        --post_status=publish \
        --allow-root > /dev/null
done

echo -e "${GREEN}✓ Pages created${NC}"

# Set home page
echo ""
echo "Setting Home as front page..."
HOME_PAGE_ID=$(docker exec said-bau-wordpress wp post list --post_type=page --post_name=home --field=ID --allow-root | head -1)
docker exec said-bau-wordpress wp option update page_on_front "$HOME_PAGE_ID" --allow-root
docker exec said-bau-wordpress wp option update show_on_front "page" --allow-root

echo -e "${GREEN}✓ Home page set as front page${NC}"

# Create navigation menu
echo ""
echo "Creating navigation menu..."
docker exec said-bau-wordpress wp menu create "Main Navigation" --allow-root > /dev/null

MENU_ID=$(docker exec said-bau-wordpress wp menu list --format=ids --allow-root | head -1)

for page_info in "${PAGES[@]}"; do
    IFS='|' read -r title slug <<< "$page_info"
    PAGE_ID=$(docker exec said-bau-wordpress wp post list --post_type=page --post_name="$slug" --field=ID --allow-root | head -1)
    if [ ! -z "$PAGE_ID" ]; then
        docker exec said-bau-wordpress wp menu item add-post "$MENU_ID" "$PAGE_ID" --allow-root > /dev/null 2>&1
    fi
done

# Set menu location
docker exec said-bau-wordpress wp menu location assign "$MENU_ID" primary --allow-root

echo -e "${GREEN}✓ Navigation menu created${NC}"

# Configure Polylang for multi-language
echo ""
echo "Configuring Multi-Language Support..."

# Polylang language setup
for lang_info in "de:Deutsch" "en:English" "ar:العربية" "tr:Türkçe"; do
    IFS=':' read -r lang_code lang_name <<< "$lang_info"
    docker exec said-bau-wordpress wp pll lang create --name="$lang_name" --slug="$lang_code" --allow-root 2>/dev/null || true
done

echo -e "${GREEN}✓ Languages configured (DE, EN, AR, TR)${NC}"

# Create Contact Form 7 form
echo ""
echo "Creating Contact Form..."

CONTACT_FORM_HTML='<label> Name
[text* your-name] </label>

<label> Email
[email* your-email] </label>

<label> Phone
[tel your-phone] </label>

<label> Subject
[text your-subject] </label>

<label> Message
[textarea your-message] </label>

[submit "Send Message"]'

docker exec said-bau-wordpress wp post create \
    --post_type=wpcf7_contact_form \
    --post_title="Contact Form" \
    --post_content="$CONTACT_FORM_HTML" \
    --post_status=publish \
    --allow-root > /dev/null

echo -e "${GREEN}✓ Contact form created${NC}"

echo ""
echo "================================"
echo "POC Setup Complete!"
echo "================================"
echo ""
echo -e "${GREEN}WordPress is now running!${NC}"
echo ""
echo "Access your WordPress POC:"
echo -e "${YELLOW}Admin: http://localhost:8000/wp-admin/${NC}"
echo -e "${YELLOW}Frontend: http://localhost:8000${NC}"
echo -e "${YELLOW}Database: http://localhost:8001${NC} (phpMyAdmin)"
echo ""
echo "Default Login:"
echo -e "${YELLOW}Username: admin${NC}"
echo -e "${YELLOW}Password: admin${NC}"
echo ""
echo "Next Steps:"
echo "1. Log into wp-admin and verify plugins are installed"
echo "2. Add your content to each page using Elementor"
echo "3. Configure Polylang language switcher"
echo "4. Test Contact Form 7"
echo "5. Customize design and colors"
echo ""
echo "To stop containers:"
echo "  docker-compose down"
echo ""
echo "To restart containers:"
echo "  docker-compose up -d"
echo ""
