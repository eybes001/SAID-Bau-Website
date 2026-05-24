# SAID Bau - Static Hosting Deployment Guide

## What to Deploy

Your website folder contains everything needed. Here is what to upload to Hostinger:

### Core Files (Upload these)
```
saidbau.com/public_html/
├── index.html              ← Homepage
├── about.html              ← About page
├── services.html           ← Services page
├── projects.html           ← Projects/Gallery page
├── contact.html            ← Contact page
├── robots.txt              ← SEO (search engines)
├── sitemap.xml             ← SEO (site structure)
├── config.js               ← Configuration
├── .htaccess               ← Server rules (performance, caching)
│
└── assets/                 ← All asset files
    ├── css/
    │   └── style.css       ← Main stylesheet
    ├── js/
    │   └── main.js         ← JavaScript functionality
    ├── languages/
    │   └── translations.json  ← Multi-language translations
    └── images/             ← Your images folder
```

### Files to NOT Upload
- `.git/` - Version control (not needed on server)
- `.github/` - GitHub Actions (not needed on server)
- `.gitignore` - Git configuration (not needed on server)
- `docker-compose.yml` - Docker (not needed on server)
- `setup-poc.sh` - Setup script (not needed on server)
- `WORDPRESS_*.md` - WordPress docs (not relevant anymore)
- `POC_SETUP.md` - Documentation files
- `README.md` - Documentation

## Deployment Steps

### Option 1: Automatic Deployment (Already Set Up)
Your GitHub Actions workflow automatically deploys whenever you push to GitHub:

```bash
cd /Users/eyadbeshier/Documents/SAID\ Bau
git add .
git commit -m "Update site"
git push origin main
```

The deployment will automatically upload files to Hostinger `/public_html/` directory.

### Option 2: Manual Upload via Hostinger File Manager

1. Log in to Hostinger: https://hpanel.hostinger.com/
2. Click **Websites** → Your domain
3. Go to **File Manager**
4. Navigate to `public_html` directory
5. Delete all WordPress files:
   - `wp-admin/`
   - `wp-includes/`
   - `wp-content/`
   - `wp-*.php` files
   - `index.php` (WordPress index)
6. Upload all files from your local folder:
   - All `.html` files
   - `/assets/` folder (with all contents)
   - `.htaccess` file
   - `robots.txt`
   - `sitemap.xml`

### Option 3: FTP Upload
Use an FTP client (like FileZilla) with these credentials:
- Host: `147.93.88.180`
- Username: `u664011377`
- Password: [Your FTP password]
- Directory: `/public_html/`

Upload the same files as Option 2.

## Verification

After uploading, verify:

1. **Homepage loads**: https://saidbau.com/
2. **About page loads**: https://saidbau.com/about.html
3. **Services page loads**: https://saidbau.com/services.html
4. **Projects page loads**: https://saidbau.com/projects.html
5. **Contact page loads**: https://saidbau.com/contact.html

## What the .htaccess File Does

- Enables browser caching (faster loading)
- Compresses files (smaller file sizes)
- Provides rewrite rules for clean URLs (optional)
- Improves SEO and performance

## Future Updates

To update your site, simply:

1. Make changes locally
2. Push to GitHub:
   ```bash
   git push origin main
   ```
3. Automatic deployment happens within 5 minutes

**No manual uploads needed after this setup.**

## Troubleshooting

**Site shows blank page:**
- Check that `index.html` exists in `/public_html/`
- Verify all files were uploaded completely

**CSS/JS not loading:**
- Check that `/assets/` folder was uploaded completely
- Verify file paths are correct (case-sensitive on Linux servers)

**Forms not working:**
- Contact forms require backend processing
- Currently using frontend validation only

## Questions?

Refer to [GITHUB_DEPLOYMENT_SETUP.md](GITHUB_DEPLOYMENT_SETUP.md) for GitHub Actions configuration details.
