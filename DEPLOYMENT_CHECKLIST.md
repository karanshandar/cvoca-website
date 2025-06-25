# CVOCA Website Deployment Checklist for Render.com

## Pre-Deployment Checks

### 1. Router Configuration ✅
- [x] All routes are properly defined in `src/router/index.js`
- [x] Catch-all route redirects to home page
- [x] Navigation guards are in place
- [x] Error handling is configured

### 2. Build Configuration ✅
- [x] Vite config optimized for production
- [x] Base URL properly configured
- [x] Asset optimization enabled
- [x] Source maps disabled for production

### 3. Render.com Configuration ✅
- [x] `render.yaml` file created with proper settings
- [x] `_redirects` file in public directory
- [x] Static site configuration
- [x] Proper headers and caching

## Deployment Steps

### 1. Build Testing
```bash
npm run build
npm run preview
```

### 2. Test Routes Locally
- [ ] Home page (`/`)
- [ ] About page (`/about`)
- [ ] Membership page (`/membership`)
- [ ] Events page (`/events`)
- [ ] Blog page (`/blog`)
- [ ] Digital Outreach page (`/digital-outreach`)
- [ ] Contact page (`/contact`)
- [ ] Invalid routes (should redirect to home)

### 3. Render.com Deployment
- [ ] Connect repository to Render.com
- [ ] Configure as static site
- [ ] Set build command: `npm run build`
- [ ] Set publish directory: `dist`
- [ ] Deploy and test

## Post-Deployment Tests

### 1. Direct URL Access
Test accessing each route directly:
- `https://your-domain.onrender.com/about`
- `https://your-domain.onrender.com/membership`
- `https://your-domain.onrender.com/events`
- `https://your-domain.onrender.com/blog`
- `https://your-domain.onrender.com/digital-outreach`
- `https://your-domain.onrender.com/contact`

### 2. Navigation Testing
- [ ] Click all navigation links
- [ ] Test browser back/forward buttons
- [ ] Test bookmark functionality
- [ ] Test deep linking

### 3. Error Handling
- [ ] Test 404 pages (invalid URLs)
- [ ] Verify redirects work
- [ ] Check console for errors

### 4. Performance
- [ ] Check page load times
- [ ] Verify assets are cached
- [ ] Test on mobile devices
- [ ] Check Core Web Vitals

## Common Issues & Solutions

### Issue: Direct URL access returns 404
**Solution**: Ensure `_redirects` file is in the `public` directory and contains:
```
/*    /index.html   200
```

### Issue: Assets not loading
**Solution**: Check that `vite.config.js` has correct base URL:
```javascript
base: process.env.NODE_ENV === 'production' ? '/' : '/'
```

### Issue: Router not working
**Solution**: Verify `createWebHistory()` is used and `render.yaml` has proper rewrite rules.

## Monitoring

### 1. Analytics
- [ ] Set up Google Analytics
- [ ] Monitor 404 errors
- [ ] Track user navigation patterns

### 2. Performance Monitoring
- [ ] Monitor Core Web Vitals
- [ ] Check for broken links
- [ ] Monitor asset loading times

## Rollback Plan
- [ ] Keep previous deployment as backup
- [ ] Document current working configuration
- [ ] Test rollback procedure

## Security Checklist
- [x] Security headers configured in `_redirects`
- [x] HTTPS enforced
- [x] XSS protection enabled
- [x] Content type sniffing disabled
- [x] Frame options set to DENY 