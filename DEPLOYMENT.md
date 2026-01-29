# Deployment Guide

## Deploying to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**: Visit [vercel.com](https://vercel.com) and sign in with your GitHub account

2. **Import Repository**:
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `T-E-G-A/rai-gi-nextjs`
   - Click "Import"

3. **Configure Project**:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

4. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at `https://your-project.vercel.app`

5. **Custom Domain** (Optional):
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project directory
cd /home/ubuntu/rai-gi-nextjs

# Deploy
vercel

# For production deployment
vercel --prod
```

## Environment Variables

This is a static site with no backend, so no environment variables are required.

## Build Verification

Before deploying, verify the build locally:

```bash
npm run build
npm start
```

Visit `http://localhost:3000` to test the production build.

## Continuous Deployment

Vercel automatically sets up continuous deployment:
- Every push to `main` branch triggers a production deployment
- Pull requests create preview deployments
- All deployments are automatic and instant

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test navigation between pages
- [ ] Check responsive design on mobile devices
- [ ] Test dark mode toggle
- [ ] Verify all images load properly
- [ ] Test external links (social media, forms, etc.)
- [ ] Check Google Maps embed on Contact page

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify all dependencies are in `package.json`
- Test build locally: `npm run build`

### Images Not Loading
- Ensure images are in the `public/` directory
- Check image paths (should start with `/`)
- Verify images were committed to Git

### Styling Issues
- Clear browser cache
- Check TailwindCSS configuration
- Verify `globals.css` is imported in layout

## Support

For deployment issues, contact:
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)
