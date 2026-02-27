# 🚀 Deployment Guide

Panduan lengkap untuk deploy landing page PMB ke berbagai platform.

## Vercel (Recommended)

Vercel adalah platform terbaik untuk Next.js karena dibuat oleh tim yang sama.

### Deploy via GitHub

1. Push code ke GitHub repository
2. Buka [vercel.com](https://vercel.com)
3. Sign in dengan GitHub
4. Click "New Project"
5. Import repository Anda
6. Vercel akan auto-detect Next.js
7. Click "Deploy"

### Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

Jika menggunakan API atau database, tambahkan environment variables di Vercel Dashboard:

```
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
DATABASE_URL=your_database_url
```

## Netlify

### Deploy via GitHub

1. Push code ke GitHub
2. Buka [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub dan pilih repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

### Deploy via CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

## Custom Server (VPS/Dedicated)

### Prerequisites

- Node.js 18+ installed
- PM2 for process management
- Nginx for reverse proxy

### Setup

```bash
# Clone repository
git clone <your-repo-url>
cd pmb-landing-page

# Install dependencies
npm install

# Build
npm run build

# Install PM2
npm install -g pm2

# Start with PM2
pm2 start npm --name "pmb-landing" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### SSL dengan Let's Encrypt

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com
```

## Docker

### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Build & Run

```bash
# Build image
docker build -t pmb-landing .

# Run container
docker run -p 3000:3000 pmb-landing
```

## Performance Optimization

### Before Deploy

1. **Optimize Images**
   ```bash
   # Install sharp for image optimization
   npm install sharp
   ```

2. **Enable Compression**
   - Vercel/Netlify: Auto-enabled
   - Custom server: Enable gzip in Nginx

3. **Add Analytics**
   ```typescript
   // app/layout.tsx
   import { Analytics } from '@vercel/analytics/react'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     )
   }
   ```

4. **Add Speed Insights**
   ```bash
   npm install @vercel/speed-insights
   ```

### Post-Deploy Checklist

- [ ] Test all forms
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test page load speed (aim for < 3s)
- [ ] Check SEO with Google Search Console
- [ ] Setup Google Analytics
- [ ] Setup Facebook Pixel (if using FB Ads)
- [ ] Test on different browsers
- [ ] Setup monitoring (Sentry, LogRocket)
- [ ] Configure CDN
- [ ] Setup backup strategy

## Domain Configuration

### Vercel

1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Netlify

1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records as instructed

## Monitoring & Analytics

### Google Analytics

```typescript
// app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### Facebook Pixel

```typescript
// app/layout.tsx
<Script id="facebook-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
  `}
</Script>
```

## Troubleshooting

### Build Errors

```bash
# Clear cache
rm -rf .next
npm run build
```

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000
```

### Memory Issues

```bash
# Increase Node memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

## Support

Jika mengalami masalah saat deployment, silakan:
1. Check [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
2. Buat issue di repository
3. Contact support platform hosting Anda

---

**Happy Deploying! 🚀**
