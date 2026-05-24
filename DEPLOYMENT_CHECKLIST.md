# SAID Bau - Static Hosting Deployment Checklist

## Pre-Deployment: What To Do First

### On Hostinger
- [ ] Log in to hpanel.hostinger.com
- [ ] Navigate to **Websites** → Select saidbau.com
- [ ] Go to **File Manager**
- [ ] Navigate to `/public_html/` directory
- [ ] Delete WordPress directories:
  - [ ] `wp-admin/` (delete entire folder)
  - [ ] `wp-includes/` (delete entire folder)
  - [ ] `wp-content/` (delete entire folder)
- [ ] Delete WordPress files:
  - [ ] `index.php`
  - [ ] `wp-*.php` (all WordPress PHP files)
  - [ ] `xmlrpc.php`
  - [ ] `.htaccess` (old version, we have a new one)
  - [ ] `license.txt`
  - [ ] `readme.html`

**Result**: `/public_html/` should be empty or contain only non-WordPress files

---

## Files To Upload

### Upload these files to `/public_html/`

**Root Level Files:**
- [ ] `index.html`
- [ ] `about.html`
- [ ] `services.html`
- [ ] `projects.html`
- [ ] `contact.html`
- [ ] `robots.txt`
- [ ] `sitemap.xml`
- [ ] `config.js`
- [ ] `.htaccess` (NEW - for performance)

**Folders (entire contents):**
- [ ] `/assets/` folder (all files inside)
  - [ ] `/assets/css/style.css`
  - [ ] `/assets/js/main.js`
  - [ ] `/assets/languages/translations.json`
  - [ ] `/assets/images/` (all images)

---

## Deployment Methods

### Method 1: Automatic (GitHub Actions - Recommended)
- [ ] GitHub workflow is already configured
- [ ] Just push changes: `git push origin main`
- [ ] Automatic deployment every 5 minutes
- [ ] No manual uploads needed

### Method 2: Hostinger File Manager
- [ ] Go to Hostinger File Manager
- [ ] Drag and drop files into `/public_html/`
- [ ] Or use "Upload" button to upload folders

### Method 3: FTP Client
- [ ] Download FileZilla or similar FTP client
- [ ] Connect with credentials:
  - Host: `147.93.88.180`
  - User: `u664011377`
  - Password: [Your FTP password]
- [ ] Upload files to `/public_html/`

---

## Post-Deployment Verification

### Test Each Page
- [ ] https://saidbau.com/ loads without errors
- [ ] https://saidbau.com/index.html (same as above)
- [ ] https://saidbau.com/about.html loads correctly
- [ ] https://saidbau.com/services.html loads correctly
- [ ] https://saidbau.com/projects.html loads correctly
- [ ] https://saidbau.com/contact.html loads correctly

### Test Features
- [ ] Language switcher works
- [ ] Before/After gallery loads
- [ ] Forms validate (frontend)
- [ ] Navigation links work correctly
- [ ] Mobile view is responsive (test on phone)
- [ ] Images load without 404 errors

### Test Performance
- [ ] Pages load within 3 seconds
- [ ] No console errors (press F12 → Console tab)
- [ ] No missing resources (press F12 → Network tab)

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Blank page on saidbau.com | Check `index.html` exists in `/public_html/` |
| CSS/JS not loading | Verify `/assets/` folder uploaded completely |
| 404 errors for images | Check `/assets/images/` folder path |
| Site very slow | Enable caching in `.htaccess` (already included) |
| Forms not sending | Contact forms work frontend-only (no backend configured) |

---

## Important Notes

✅ **What's included:**
- Multi-language support (DE, EN, AR, TR)
- Before/After gallery
- Responsive design
- SEO optimization (robots.txt, sitemap.xml)
- Browser caching & compression

❌ **What's NOT included:**
- Backend form processing (use Contact Form 7 or similar if needed)
- Database (static site only)
- User accounts

---

## Next Steps After Deployment

1. **Monitor the site** for 24 hours
2. **Test all functionality** from multiple devices
3. **Check Google Search Console** to verify indexing
4. **Submit sitemap** to Google: https://search.google.com/search-console
5. **Set up SSL certificate** (Hostinger usually provides free SSL)

---

## To Update Your Site in Future

```bash
cd /Users/eyadbeshier/Documents/SAID\ Bau

# Make your changes to HTML/CSS/JS files

# Commit and push to GitHub
git add .
git commit -m "Description of changes"
git push origin main

# Done! Automatic deployment happens within 5 minutes
```

**No manual uploads needed - everything is automatic.**

---

**Deployment Status: Ready to Deploy**
All files are prepared and organized for static hosting on Hostinger.
