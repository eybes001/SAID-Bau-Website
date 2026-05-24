# SAID Bau - WordPress Proof of Concept Setup

This guide will help you set up a complete, working WordPress proof of concept locally to test the migration before deploying to your live server.

---

## Prerequisites

### Required:
- **Docker Desktop** - Download from https://www.docker.com/products/docker-desktop
- **Git** (optional, but helpful)
- At least 4GB of free RAM
- At least 2GB of free disk space

### System Requirements:
- **macOS:** Docker Desktop for Mac (already installed on your system)
- **Windows:** Docker Desktop for Windows (WSL 2 backend recommended)
- **Linux:** Docker and Docker Compose

---

## Quick Start (5 Minutes)

### Step 1: Navigate to Project Directory
```bash
cd /Users/eyadbeshier/Documents/"SAID Bau"
```

### Step 2: Make Setup Script Executable
```bash
chmod +x setup-poc.sh
```

### Step 3: Run the Setup Script
```bash
./setup-poc.sh
```

The script will:
1. Start Docker containers
2. Wait for WordPress to initialize
3. Install all required plugins
4. Create pages (Home, About, Services, Projects, Contact)
5. Configure Polylang for 4 languages
6. Set up Contact Form 7
7. Create navigation menu

**Total time:** ~3-5 minutes

---

## Manual Setup (If Script Fails)

If the automatic script doesn't work, follow these manual steps:

### Step 1: Start Docker Containers
```bash
cd /Users/eyadbeshier/Documents/"SAID Bau"
docker-compose up -d
```

Wait 30-60 seconds for WordPress to fully start.

### Step 2: Verify Containers Are Running
```bash
docker-compose ps
```

You should see 3 containers:
- `said-bau-wordpress` (running)
- `said-bau-db` (running)
- `said-bau-phpmyadmin` (running)

### Step 3: Install Plugins via WordPress Admin

1. Visit: **http://localhost:8000/wp-admin**
2. Login with: **admin / admin**
3. Go to **Plugins > Add New**
4. Search and install:
   - Elementor
   - Contact Form 7
   - Polylang
   - Yoast SEO
   - WP Super Cache
   - Wordfence

### Step 4: Create Pages

1. Go to **Pages > Add New**
2. Create these pages:
   - Home
   - About
   - Services
   - Projects
   - Contact

3. Set **Home** as the front page:
   - Go to **Settings > Reading**
   - Set "Front page displays" to "Static page"
   - Select "Home" as the front page

### Step 5: Create Navigation Menu

1. Go to **Appearance > Menus**
2. Create menu: "Main Navigation"
3. Add pages: Home, About, Services, Projects, Contact
4. Set as "Primary Menu"

### Step 6: Configure Polylang

1. Go to **Languages > Settings**
2. Add these languages:
   - Deutsch (German) - Default
   - English (English)
   - العربية (Arabic)
   - Türkçe (Turkish)

3. Go to **Languages > Strings Translations**
4. Create language switcher

### Step 7: Create Contact Form

1. Go to **Contact > Contact Forms > Add New**
2. Use this template:
```
[text* your-name placeholder "Name"]
[email* your-email placeholder "Email"]
[tel your-phone placeholder "Phone"]
[text your-subject placeholder "Subject"]
[textarea your-message placeholder "Message"]
[submit "Send Message"]
```

3. Save and note the shortcode (e.g., `[contact-form-7 id="123"]`)
4. Add to Contact page

---

## Access Your POC

After setup, access:

| Purpose | URL | Login |
|---------|-----|-------|
| **WordPress Admin** | http://localhost:8000/wp-admin | admin / admin |
| **Frontend Website** | http://localhost:8000 | (public) |
| **phpMyAdmin** | http://localhost:8001 | wordpress / wordpress |

---

## Add Content to Pages

### Using Elementor (Recommended)

1. Go to **Pages > Home**
2. Click **Edit with Elementor**
3. Drag and drop elements:
   - Text blocks
   - Images
   - Sections
   - Buttons
   - etc.

Reference content from: **WORDPRESS_CONTENT.md**

### Using Block Editor (Alternative)

1. Go to **Pages > Home**
2. Click **Edit**
3. Use WordPress blocks (+ button)
4. Copy content from WORDPRESS_CONTENT.md

---

## Customizing Design

### Colors & Branding

1. Go to **Appearance > Customize**
2. Update:
   - **Site Identity:** Logo, title, tagline
   - **Colors:** Primary (#0066cc), Accent (#ff6b35)
   - **Fonts:** Choose professional fonts
   - **Header:** Sticky navigation enabled
   - **Footer:** Custom footer text

### Using Elementor Theme Builder (Advanced)

1. Open **Elementor > Template**
2. Create custom header template
3. Create custom footer template
4. Assign to all pages

---

## Testing Functionality

### Test Contact Form
1. Visit http://localhost:8000/contact
2. Fill out form
3. Submit
4. Check WordPress email notifications

### Test Multi-Language
1. Click language dropdown (top right)
2. Switch between: German, English, Arabic, Turkish
3. Verify page translates
4. Verify Arabic uses RTL layout

### Test Responsiveness
1. Press **F12** on your keyboard
2. Click device toolbar icon
3. Test on:
   - Mobile (iPhone)
   - Tablet (iPad)
   - Desktop

### Test Performance
1. Visit **Google PageSpeed Insights**
2. Enter: http://localhost:8000
3. Check loading speed
4. Note any optimization opportunities

---

## Copy Content from Static Site

The content is already organized in WORDPRESS_CONTENT.md. For each page:

1. Open WORDPRESS_CONTENT.md
2. Find the section for that page
3. Copy the content
4. Paste into WordPress page editor

---

## Common Issues & Solutions

### Issue: "Connection refused" when accessing http://localhost:8000

**Solution:**
```bash
# Check if containers are running
docker-compose ps

# If not running, start them
docker-compose up -d

# Wait 30 seconds and try again
```

### Issue: "Database connection error"

**Solution:**
```bash
# Restart the database container
docker-compose restart db

# Wait 20 seconds and refresh browser
```

### Issue: Plugins not installing

**Solution:**
1. Check WordPress is fully started (wait 60 seconds)
2. Try installing one plugin at a time
3. Manually upload plugin if automatic install fails:
   - Download .zip from WordPress.org
   - Go to **Plugins > Upload Plugin**
   - Select .zip file

### Issue: Pages not showing in menu

**Solution:**
1. Go to **Appearance > Menus**
2. Click menu name
3. Ensure "Display location" includes "Primary Menu"
4. Save menu

### Issue: Contact form not sending emails

**Solution:**
1. Go to **Contact > Contact Forms**
2. Edit form
3. Go to **Mail** tab
4. Verify recipient email is set
5. Click **Save**

---

## Uploading Project Images

### Add Images to Portfolio

1. Go to **Media > Library**
2. Click **Upload Files**
3. Select before/after project images
4. Once uploaded, note the image URLs

### Add Images to Pages

1. Edit page with Elementor
2. Add "Image" element
3. Click "Upload" or select from library
4. Add images for:
   - Hero section
   - Services
   - Projects gallery
   - Team (if applicable)

---

## Performance Tips

### Enable Caching

1. Go to **WP Super Cache > Settings**
2. Check "Enable caching"
3. Check "Enable gzip compression"
4. Save changes

### Optimize Images

1. Install **Smush** plugin:
   - **Plugins > Add New**
   - Search "Smush"
   - Install and activate

2. Go to **Smush > Bulk Smush**
3. Select all images
4. Click "Bulk Smush"

### Monitor Performance

1. Visit **Google PageSpeed Insights**
2. Enter: http://localhost:8000
3. Check mobile and desktop scores
4. Follow recommendations

---

## Backup Your POC

### Backup WordPress Database

```bash
# Create backup
docker exec said-bau-db mysqldump -u wordpress -pwordpress wordpress > backup.sql

# Restore from backup
docker exec -i said-bau-db mysql -u wordpress -pwordpress wordpress < backup.sql
```

### Backup WordPress Files

```bash
# Copy WordPress directory
docker cp said-bau-wordpress:/var/www/html ./wordpress-backup

# Restore
docker cp ./wordpress-backup/. said-bau-wordpress:/var/www/html
```

---

## Stop & Restart

### Stop All Containers

```bash
docker-compose down
```

This stops all containers but preserves data.

### Restart Containers

```bash
docker-compose up -d
```

### Clean Everything (Start Fresh)

```bash
# Warning: This deletes all data!
docker-compose down -v
docker-compose up -d
./setup-poc.sh
```

---

## Deploy from POC to Live Server

Once you are happy with the POC:

1. **Export content:**
   - Go to **Tools > Export**
   - Select "All content"
   - Download XML file

2. **Export plugins list:**
   - Go to **Plugins** page
   - Note all installed plugins
   - Install same plugins on live server

3. **Transfer custom CSS/JS:**
   - Export CSS/JavaScript customizations
   - Import to live WordPress

4. **Export images:**
   - Go to **Media > Library**
   - Download all images (or use backup plugin)
   - Upload to live server

5. **Recreate pages:**
   - Import XML on live server
   - Or manually recreate pages
   - Update with real project images

---

## Next Steps

1. ✅ Run setup script: `./setup-poc.sh`
2. ⏳ Wait for completion (~5 minutes)
3. 🌐 Access http://localhost:8000
4. 📝 Add content using WORDPRESS_CONTENT.md
5. 🎨 Customize design with Elementor
6. 🧪 Test all functionality
7. ✉️ Test contact form
8. 🌍 Test multi-language
9. 📱 Test responsiveness
10. 📊 Check performance

---

## Support & Troubleshooting

For more detailed help, refer to:
- **WORDPRESS_MIGRATION.md** - Complete migration guide
- **WORDPRESS_CHECKLIST.md** - Step-by-step checklist
- **WORDPRESS_CONTENT.md** - All page content

---

## Useful Commands

```bash
# View logs
docker-compose logs wordpress

# View database logs
docker-compose logs db

# Access WordPress container shell
docker exec -it said-bau-wordpress bash

# Access database container shell
docker exec -it said-bau-db bash

# Check WordPress health
docker exec said-bau-wordpress wp core is-installed --allow-root

# List all users
docker exec said-bau-wordpress wp user list --allow-root

# Reset admin password
docker exec said-bau-wordpress wp user update admin --prompt=user_pass --allow-root
```

---

**Status:** Ready to begin POC setup
**Estimated Duration:** 5-10 minutes (setup) + 30-60 minutes (content & customization)
**Difficulty:** Easy (mostly point-and-click in WordPress admin)