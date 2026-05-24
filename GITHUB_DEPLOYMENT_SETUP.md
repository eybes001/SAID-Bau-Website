# SAID Bau - GitHub Deployment Setup Guide

## Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `SAID-Bau-Website`
3. Description: "Professional renovation company website with multi-language support"
4. Select **Public** (or Private if preferred)
5. Do NOT initialize with README (we already have one)
6. Click **Create repository**

## Step 2: Generate GitHub Personal Access Token

You mentioned you don't have a token yet. Here is how to create one:

1. Go to GitHub Settings: https://github.com/settings/tokens
2. Click **Generate new token** → **Generate new token (classic)**
3. Name it: `WordPress Site Deployment`
4. Set Expiration: 90 days (or custom)
5. Select scopes:
   - `repo` (full control of private repositories)
   - `workflow` (update GitHub Action workflows)
6. Click **Generate token**
7. **Copy the token immediately** (you will not see it again)
8. Save it securely (you will need it in Step 4)

## Step 3: Get Your Hosting Credentials

You need FTP details from your Hostinger account:

1. Log in to Hostinger: https://hpanel.hostinger.com/
2. Go to **Files** → **FTP Accounts** (or **SFTP**)
3. Note down:
   - **FTP Server/Host** (example: ftp.saidbau.com or 192.168.1.1)
   - **Username** (example: u123456789)
   - **Password** (your FTP password)
   - **Directory**: /public_html/ (standard WordPress directory)

## Step 4: Add GitHub Secrets

1. Go to your new repository on GitHub
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add these three secrets:

| Secret Name | Value |
|------------|-------|
| `FTP_SERVER` | Your FTP hostname (from Step 3) |
| `FTP_USERNAME` | Your FTP username (from Step 3) |
| `FTP_PASSWORD` | Your FTP password (from Step 3) |

## Step 5: Push Code to GitHub

Run these commands in your terminal:

```bash
cd /Users/eyadbeshier/Documents/SAID\ Bau

# Add all files to git
git add .

# Commit the changes
git commit -m "Initial SAID Bau website setup"

# Add remote repository (replace YOUR_USERNAME with eybes001)
git remote add origin https://github.com/eybes001/SAID-Bau-Website.git

# Set default branch to main
git branch -M main

# Push to GitHub (use your Personal Access Token as password)
git push -u origin main
```

When prompted for a password, use your GitHub Personal Access Token (from Step 2).

## Step 6: Automatic Deployment

Now whenever you push changes to the `main` branch, GitHub Actions will:
1. Automatically build your project
2. Connect to your FTP server
3. Upload all files to your WordPress site
4. You can monitor progress in GitHub under **Actions** tab

## Workflow Status

After each push, check: https://github.com/eybes001/SAID-Bau-Website/actions

---

## Troubleshooting

**If deployment fails:**
- Verify FTP credentials are correct
- Ensure FTP/SFTP is enabled on your hosting
- Check that server path is `/public_html/` (for WordPress)
- Review GitHub Actions logs for error messages

**To manually trigger deployment:**
- Go to GitHub repository
- Click **Actions** → **Deploy to WordPress Site** → **Run workflow**
