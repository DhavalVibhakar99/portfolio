# Deployment Guide - Dhaval's Portfolio

## 🚀 Quick Deploy to GitHub Pages

### Prerequisites
- Node.js installed (v20.19+ or v22.12+ recommended)
- Git installed
- GitHub account

### Step 1: Configure Vite for GitHub Pages

Update `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/dhaval-portfolio/', // Replace with your repo name
})
```

### Step 2: Add Deploy Script

Update `package.json` scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### Step 3: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 4: Initialize Git & Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio ready for deployment"

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/dhaval-portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 5: Deploy

```bash
npm run deploy
```

Your portfolio will be live at: `https://yourusername.github.io/dhaval-portfolio/`

---

## 🌐 Alternative: Deploy to Vercel (Recommended)

### Why Vercel?
- Zero configuration
- Automatic deployments on push
- Custom domain support
- Free SSL

### Steps:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Link to existing project or create new
   - Set build command: `npm run build`
   - Set output directory: `dist`

4. **Done!** Your site is live at the provided URL

---

## 📦 Alternative: Deploy to Netlify

### Steps:

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

4. **Follow prompts** and select `dist` as publish directory

---

## 🔧 Environment Variables

If deploying with EmailJS, make sure to set environment variables:

### For Vercel:
```bash
vercel env add VITE_EMAILJS_SERVICE_ID
vercel env add VITE_EMAILJS_TEMPLATE_ID
vercel env add VITE_EMAILJS_PUBLIC_KEY
```

### For Netlify:
Add in Netlify Dashboard → Site Settings → Environment Variables

---

## ✅ Pre-Deployment Checklist

- [ ] All images loading correctly
- [ ] All modals working (Experience, Certification, Hire Me)
- [ ] Mobile drawer functioning
- [ ] Contact form configured with EmailJS
- [ ] Custom scrollbar styling applied
- [ ] Build succeeds: `npm run build`
- [ ] Preview works: `npm run preview`
- [ ] No console errors
- [ ] .env file NOT committed (check .gitignore)

---

## 🐛 Troubleshooting

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images not loading
- Check image paths are relative to `public/` folder
- Ensure images exist in `public/assets/`

### Blank page after deploy
- Check `base` path in `vite.config.js`
- Verify build output in `dist/` folder

---

## 📝 Post-Deployment

1. Test all features on live site
2. Verify mobile responsiveness
3. Check page load speed
4. Test contact form
5. Share your portfolio! 🎉

---

## 🔗 Useful Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

---

Built with ❤️ using React + Vite
