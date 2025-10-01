# Hostinger Deployment Guide

## Files to Upload
Upload ALL contents from the `dist` folder to your Hostinger `public_html` directory:

### Required Files:
- `index.html` (main HTML file)
- `favicon.ico` (website icon)
- `placeholder.svg` (placeholder image)
- `robots.txt` (SEO file)

### Required Folder:
- `assets/` folder (contains all CSS, JS, and images)
  - `assets/company-logo-BgWUKT7C.jpg`
  - `assets/index-DfT9HDQU.css`
  - `assets/index-DfT9sen3.js`

## Step-by-Step Upload Process:

### Method 1: File Manager (Easiest)
1. Login to your Hostinger hPanel
2. Click "File Manager"
3. Navigate to `public_html` folder
4. Click "Upload" button
5. Select all files from your `dist` folder
6. Wait for upload to complete

### Method 2: ZIP Upload
1. Create a ZIP file of your `dist` folder contents
2. Upload the ZIP to `public_html`
3. Extract the ZIP file in File Manager
4. Delete the ZIP file after extraction

## Important Notes:
- Make sure ALL files are in the `public_html` directory
- Don't upload the `dist` folder itself, just its contents
- Your website will be accessible at your domain name once uploaded
- If you have a subdomain, it might take a few minutes to propagate

## Troubleshooting:
- If your site doesn't load, check that `index.html` is in the root of `public_html`
- Make sure all file paths are correct
- Clear your browser cache if you see old content
