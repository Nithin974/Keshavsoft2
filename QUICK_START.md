# Quick Start Guide - Task 2

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd bootstrap-internship-project-task2
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Opens at: `http://localhost:3000` with hot reload

### 3. Build for Production
```bash
npm run build
```
Output in: `dist/` folder

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `src/templates/base.njk` | Base layout template |
| `src/templates/index.njk` | Home page content |
| `src/templates/header.njk` | Navigation bar |
| `src/templates/footer.njk` | Footer section |
| `src/assets/css/style.css` | Custom styles |
| `src/assets/js/main.js` | JavaScript entry |
| `vite.config.js` | Vite configuration |
| `package.json` | Dependencies |

---

## 🎯 Common Commands

```bash
# Development
npm run dev          # Start dev server with HMR

# Production
npm run build        # Build optimized files to dist/
npm run preview      # Preview production build locally

# Package Management
npm install          # Install dependencies
npm audit fix        # Fix security vulnerabilities
```

---

## 🔧 Making Changes

### Adding a New Page
1. Create `src/templates/newpage.njk`
2. Extend base: `{% extends "base.njk" %}`
3. Add content in `{% block content %}...{% endblock %}`
4. Update navigation in `header.njk`

### Updating Styles
1. Edit `src/assets/css/style.css`
2. Changes reflect instantly (HMR)
3. Build compiles to `dist/assets/*.css`

### Modifying Header/Footer
1. Edit `src/templates/header.njk` or `footer.njk`
2. Changes apply to all pages automatically
3. No need to update multiple files!

---

## 📊 Project Stats

- **Templates**: 4 Nunjucks files
- **Styles**: 1 CSS file (3.47 kB minified)
- **Scripts**: 1 JS file (1.11 kB minified)
- **Build Time**: ~160ms
- **Dev Server**: Port 3000
- **Output**: dist/ folder

---

## ✅ Verification Checklist

- [ ] Dependencies installed (`node_modules/` exists)
- [ ] Dev server running (`npm run dev`)
- [ ] Browser opened at `localhost:3000`
- [ ] Build successful (`npm run build`)
- [ ] dist/ folder created with files
- [ ] UI matches Task 1 exactly

---

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
# Kill the process using port 3000
# Then restart: npm run dev
```

**Build fails?**
```bash
# Clean and reinstall
rm -rf node_modules dist
npm install
npm run build
```

**Hot reload not working?**
- Save files in `src/` directory
- Check terminal for errors
- Restart dev server

---

## 📚 Learn More

- [README.md](README.md) - Complete documentation
- [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - Detailed summary
- [Nunjucks Docs](https://mozilla.github.io/nunjucks/)
- [Vite Docs](https://vitejs.dev/)

---

**Happy Coding! 🎉**
