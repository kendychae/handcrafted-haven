# Deployment Guide for Handcrafted Haven

## Overview

This guide will walk you through deploying the Handcrafted Haven application to Vercel, a cloud platform optimized for Next.js applications.

## Prerequisites

- Git repository with your code
- Vercel account (free tier available)
- GitHub account (recommended for continuous deployment)

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Authorize Vercel to access your repositories

### Step 2: Import Project

1. Click "New Project" in your Vercel dashboard
2. Import your `handcrafted-haven` repository
3. Vercel will automatically detect it's a Next.js project

### Step 3: Configure Project

1. **Project Name:** `handcrafted-haven`
2. **Framework:** Next.js (auto-detected)
3. **Root Directory:** `.` (default)
4. **Build Settings:**
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

### Step 4: Environment Variables

If your project uses environment variables, add them in the "Environment Variables" section:

```
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-app-name.vercel.app
```

### Step 5: Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually 1-3 minutes)
3. Your app will be available at `https://your-project-name.vercel.app`

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy from Project Directory

```bash
cd handcrafted-haven
vercel
```

Follow the prompts:

- Set up and deploy? `Y`
- Which scope? Select your account
- Link to existing project? `N` (for first deployment)
- Project name: `handcrafted-haven`
- Directory: `./` (default)

### Step 4: Production Deployment

```bash
vercel --prod
```

## Continuous Deployment

### Automatic Deployments

Once connected to your GitHub repository, Vercel will automatically:

- Deploy your main branch to production
- Create preview deployments for pull requests
- Run builds when you push code changes

### Branch Strategy

- `main` branch → Production deployment
- Feature branches → Preview deployments
- Pull requests → Preview deployments with unique URLs

## Custom Domain Setup

### Step 1: Add Domain in Vercel Dashboard

1. Go to your project settings
2. Click "Domains"
3. Add your custom domain (e.g., `handcraftedhaen.com`)

### Step 2: Configure DNS

Add these records to your domain provider:

```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: SSL Certificate

Vercel automatically provides SSL certificates for all domains.

## Performance Optimization

### Next.js Optimizations

The following are automatically enabled on Vercel:

- Static Site Generation (SSG)
- Server-Side Rendering (SSR)
- Image optimization
- Automatic code splitting
- Edge caching

### Custom Optimizations

1. **Image Optimization**: Use Next.js `Image` component
2. **Font Optimization**: Use Next.js font optimization
3. **Bundle Analysis**: Run `npm run build` to see bundle sizes

## Monitoring and Analytics

### Vercel Analytics

Enable analytics in your project settings to track:

- Page views
- Performance metrics
- User engagement
- Core Web Vitals

### Real User Monitoring

```javascript
// Add to your layout.tsx
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## Environment Variables for Production

### Required Variables

```
NODE_ENV=production
NEXT_PUBLIC_APP_NAME=Handcrafted Haven
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### Optional Variables

```
NEXT_PUBLIC_GOOGLE_ANALYTICS=GA_MEASUREMENT_ID
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

## Troubleshooting

### Common Build Errors

1. **TypeScript Errors**: Fix all TypeScript errors before deployment
2. **ESLint Errors**: Resolve linting issues or disable ESLint in build settings
3. **Missing Dependencies**: Ensure all dependencies are in `package.json`

### Build Command Issues

If automatic detection fails, manually set:

- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### Performance Issues

1. Check bundle size with `npm run build`
2. Optimize images and assets
3. Use dynamic imports for large components
4. Enable gzip compression (automatic on Vercel)

## Security Considerations

### Headers

The `vercel.json` file includes security headers:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`

### HTTPS

All Vercel deployments use HTTPS by default with automatic certificate renewal.

## Post-Deployment Checklist

- [ ] Test all major functionality
- [ ] Verify responsive design on different devices
- [ ] Check page load speeds
- [ ] Test SEO meta tags
- [ ] Verify analytics integration
- [ ] Test contact forms and user interactions
- [ ] Check accessibility features
- [ ] Verify all links work correctly

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
- [Custom Domains Guide](https://vercel.com/docs/custom-domains)

---

_This deployment guide is part of the WDD430 Handcrafted Haven project by Kendy Chae._
