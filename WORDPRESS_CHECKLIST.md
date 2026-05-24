# WordPress Migration - Quick Reference Checklist

Use this checklist as you migrate your site. Check off items as you complete them.

---

## BEFORE YOU START
- [ ] Log into WordPress admin dashboard (saidbau.com/wp-admin/)
- [ ] Backup existing WordPress installation
- [ ] Create a test/staging environment first (optional but recommended)
- [ ] Have all project images ready to upload

---

## PHASE 1: INSTALL PLUGINS
- [ ] Install Elementor or page builder
- [ ] Install Contact Form 7
- [ ] Install Polylang or WPML (multi-language)
- [ ] Install Yoast SEO or Rank Math
- [ ] Install WP Super Cache or W3 Total Cache
- [ ] Activate all plugins

---

## PHASE 2: BASIC WORDPRESS SETUP
- [ ] Go to Settings > General
  - [ ] Site Title: SAID Bau
  - [ ] Tagline: Professionelle Renovierungsdienstleistungen
  - [ ] WordPress Address: https://saidbau.com
  - [ ] Site Address: https://saidbau.com
  - [ ] Both use HTTPS (SSL enabled)

- [ ] Go to Settings > Reading
  - [ ] Front page displays: Static page
  - [ ] Select "Home" as front page

- [ ] Go to Settings > Permalink
  - [ ] Set to: Post name (/sample-post/)

---

## PHASE 3: SETUP LANGUAGES (Using Polylang)
- [ ] Go to Languages > Add New Language
  - [ ] Add: Deutsch (German) - Default
  - [ ] Add: English (English)
  - [ ] Add: العربية (Arabic) - RTL enabled
  - [ ] Add: Türkçe (Turkish)
- [ ] Configure language switcher in header

---

## PHASE 4: CREATE PAGES
- [ ] Create "Home" page
  - [ ] Set as Front Page in Reading settings
  - [ ] Add content using Elementor (see WORDPRESS_CONTENT.md)

- [ ] Create "About" page
  - [ ] Translate to all 4 languages
  - [ ] Add content from WORDPRESS_CONTENT.md

- [ ] Create "Services" page
  - [ ] Translate to all 4 languages
  - [ ] Add all 8 service descriptions

- [ ] Create "Projects" page
  - [ ] Translate to all 4 languages
  - [ ] Upload and arrange project images

- [ ] Create "Contact" page
  - [ ] Translate to all 4 languages
  - [ ] Add Contact Form 7 shortcode

---

## PHASE 5: CREATE CONTACT FORM
- [ ] Go to Contact > Contact Forms > Add New
- [ ] Create form with fields:
  - [ ] Name (required)
  - [ ] Email (required)
  - [ ] Phone
  - [ ] Subject
  - [ ] Message (required)
  - [ ] Services dropdown (optional)

- [ ] Configure email notifications:
  - [ ] To: info@said-bau.de
  - [ ] From: wordpress@saidbau.com
  - [ ] Subject: New Contact Form Submission

- [ ] Copy shortcode and paste on Contact page

---

## PHASE 6: UPLOAD IMAGES
- [ ] Go to Media > Add New (or use in-page uploads)
- [ ] Upload before/after project images
- [ ] Upload company/team images (if any)
- [ ] Organize in folders:
  - [ ] /projects/before-after/
  - [ ] /services/
  - [ ] /team/

---

## PHASE 7: CONFIGURE MENUS
- [ ] Go to Appearance > Menus > Create Menu
  - [ ] Menu Name: Main Navigation
  - [ ] Add items in order:
    - [ ] Home
    - [ ] About
    - [ ] Services
    - [ ] Projects
    - [ ] Contact

- [ ] Set as Primary Menu location

---

## PHASE 8: SETUP SEO (Yoast SEO)
- [ ] Configure Yoast SEO plugin
- [ ] Go to SEO > General Settings
  - [ ] Set company name: SAID Bau
  - [ ] Upload company logo
  - [ ] Set business type: Service

- [ ] For each page, set:
  - [ ] Focus keyword
  - [ ] Meta description
  - [ ] Readability

---

## PHASE 9: DESIGN & STYLING
- [ ] Choose theme approach:
  - [ ] Option A: Child theme with custom CSS
  - [ ] Option B: Theme customizer
  - [ ] Option C: Page builder styling

- [ ] Apply custom CSS:
  - [ ] Set colors: Primary #0066cc, Accent #ff6b35
  - [ ] Ensure mobile responsiveness
  - [ ] Test on all devices

---

## PHASE 10: ADD CUSTOM CODE (if needed)
- [ ] Install "Insert Headers and Footers" plugin
- [ ] Add JavaScript from main.js if not using Elementor forms
- [ ] Add Google Analytics code (if available)
- [ ] Test all functionality

---

## PHASE 11: TESTING
- [ ] Test all links work:
  - [ ] Internal links
  - [ ] External links
  - [ ] Navigation menu

- [ ] Test on devices:
  - [ ] Desktop (Chrome, Firefox, Safari)
  - [ ] Tablet (iPad, Android)
  - [ ] Mobile (iPhone, Android)

- [ ] Test languages:
  - [ ] German (Deutsch)
  - [ ] English (English)
  - [ ] Arabic (العربية) - check RTL
  - [ ] Turkish (Türkçe)

- [ ] Test forms:
  - [ ] Contact form submission
  - [ ] Email delivery to info@said-bau.de
  - [ ] Confirmation message displays
  - [ ] No errors in browser console

- [ ] Test responsiveness:
  - [ ] All pages load quickly
  - [ ] No layout breaks
  - [ ] Images display correctly
  - [ ] Navigation works on mobile

---

## PHASE 12: PERFORMANCE OPTIMIZATION
- [ ] Configure WP Super Cache:
  - [ ] Enable caching
  - [ ] Enable gzip compression
  - [ ] Test cache working

- [ ] Optimize images:
  - [ ] Install Smush or Imagify
  - [ ] Compress all images
  - [ ] Test image load times

- [ ] Test page speed:
  - [ ] Go to PageSpeed Insights (Google)
  - [ ] Aim for green score on mobile and desktop

---

## PHASE 13: SECURITY
- [ ] Install Wordfence Security
  - [ ] Enable two-factor authentication
  - [ ] Setup login alerts
  - [ ] Enable firewall

- [ ] Backup configuration:
  - [ ] Install BackWPup or UpdraftPlus
  - [ ] Schedule daily backups
  - [ ] Test backup restoration

- [ ] Update everything:
  - [ ] WordPress core
  - [ ] All plugins
  - [ ] Theme

---

## PHASE 14: LAUNCH PREPARATION
- [ ] Verify SSL certificate (green lock)
- [ ] Test contact form one more time
- [ ] Check all pages load (< 3 seconds)
- [ ] Verify language switcher works
- [ ] Test language-specific content

---

## PHASE 15: GO LIVE
- [ ] Remove any "Coming Soon" messages
- [ ] Publish all pages (set to Public)
- [ ] Test site is accessible at saidbau.com
- [ ] Test all languages visible

---

## POST-LAUNCH
- [ ] Monitor website for errors
- [ ] Check Contact Form emails
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Monitor error logs regularly
- [ ] Check PageSpeed Insights weekly
- [ ] Update plugins/WordPress regularly

---

## USEFUL WORDPRESS LINKS

**WordPress Admin:** https://saidbau.com/wp-admin/
**WordPress Settings:** https://saidbau.com/wp-admin/options-general.php
**Create New Page:** https://saidbau.com/wp-admin/post-new.php?post_type=page
**Plugins:** https://saidbau.com/wp-admin/plugins.php
**Contact Form 7:** https://saidbau.com/wp-admin/admin.php?page=wpcf7

---

## HELPFUL RESOURCES

**Documentation:**
- WORDPRESS_MIGRATION.md - Complete 14-phase guide
- WORDPRESS_CONTENT.md - All copyable content

**Tools:**
- Elementor: Visual page builder
- Contact Form 7: Form handling
- Polylang: Multi-language support
- Yoast SEO: SEO optimization
- WP Super Cache: Performance

---

## TROUBLESHOOTING QUICK FIXES

**Images not showing?**
- Check image paths are correct in Media Library
- Verify image upload was successful
- Clear browser cache

**Form not sending?**
- Check email in Contact Form 7 settings
- Verify info@said-bau.de is correct
- Test with WP Mail SMTP plugin
- Check spam folder

**Menus not showing?**
- Go to Appearance > Menus
- Assign menu to Primary Menu location
- Save changes

**Language not switching?**
- Verify Polylang is activated
- Create translations for pages
- Check language switcher code

**Pages look different on mobile?**
- Test with responsive design mode (F12)
- Check theme is responsive
- Adjust Elementor column settings

---

## ESTIMATED TIME & EFFORT

| Phase | Time | Difficulty |
|-------|------|-----------|
| 1. Install Plugins | 15 min | Easy |
| 2. Basic Setup | 10 min | Easy |
| 3. Languages | 20 min | Easy |
| 4. Create Pages | 60 min | Medium |
| 5. Contact Form | 15 min | Easy |
| 6. Upload Images | 30 min | Easy |
| 7. Menus | 10 min | Easy |
| 8. SEO Setup | 20 min | Easy |
| 9. Design/Styling | 45 min | Medium |
| 10. Custom Code | 15 min | Medium |
| 11. Testing | 45 min | Medium |
| 12. Optimization | 30 min | Medium |
| 13. Security | 30 min | Easy |
| 14. Launch Prep | 15 min | Easy |
| 15. Go Live | 5 min | Easy |
| **TOTAL** | **4-5 hours** | **Medium** |

---

**Status:** Ready to begin
**Last Updated:** 2024
**Next Step:** Start with Phase 1 - Install Plugins