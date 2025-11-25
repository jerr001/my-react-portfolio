# Quick Reference Card

## 🚀 Getting Started (First Time)

1. **Copy assets:**

   ```
   Double-click: setup-assets.bat
   ```

2. **Start the app:**

   ```
   Double-click: start.bat
   ```

   OR manually:

   ```bash
   npm install
   npm start
   ```

Your portfolio opens at: **http://localhost:3000**

---

## 📁 Important Files & Folders

| Path              | What It Is                                   |
| ----------------- | -------------------------------------------- |
| `src/components/` | React components (Navbar, Hero, About, etc.) |
| `src/styles/`     | CSS styling files                            |
| `public/images/`  | Your images (copy from parent folder)        |
| `public/docs/`    | Your CV and documents                        |
| `package.json`    | Project configuration                        |

---

## 🛠️ Common Commands

| Command         | What It Does           |
| --------------- | ---------------------- |
| `npm start`     | Run development server |
| `npm run build` | Build for production   |
| `npm install`   | Install dependencies   |
| `npm test`      | Run tests              |

---

## 📝 Making Changes

### Change Text

1. Open component file (e.g., `src/components/About.jsx`)
2. Edit the text
3. Save - page auto-reloads!

### Change Colors

1. Open `src/styles/global.css`
2. Find the color code
3. Replace with new color
4. Save

### Add New Project

1. Open `src/components/Portfolio.jsx`
2. Add to the `webProjects` array
3. Save

---

## 🎨 Color Palette

| Color            | Hex Code  | Used For                |
| ---------------- | --------- | ----------------------- |
| Dark Background  | `#1f242d` | Main background         |
| Light Background | `#2c313a` | Section backgrounds     |
| Accent Blue      | `#3a8dd9` | Links, buttons, borders |
| Dark Blue        | `#0077cc` | Hover states            |
| Light Gray       | `#f0f0f0` | Light backgrounds       |
| Text Light       | `#ccc`    | Secondary text          |
| Text Dark        | `#333`    | Dark text on light bg   |

---

## 🔧 Troubleshooting

| Problem               | Solution                                     |
| --------------------- | -------------------------------------------- |
| Port 3000 in use      | Close other apps or run `npx kill-port 3000` |
| Images not showing    | Copy images to `public/images/`              |
| npm command not found | Install Node.js from nodejs.org              |
| Changes not showing   | Clear browser cache (Ctrl + F5)              |

---

## 📱 Sections & IDs

| Section      | Component         | ID              |
| ------------ | ----------------- | --------------- |
| Home         | `Hero.jsx`        | `#home`         |
| About        | `About.jsx`       | `#about`        |
| Portfolio    | `Portfolio.jsx`   | `#portfolio`    |
| Services     | `Services.jsx`    | `#services`     |
| Book Preview | `BookPreview.jsx` | `#book-preview` |

---

## 🌐 Deploy Commands

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload 'build' folder to netlify.com/drop
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
npm run deploy
```

---

## 📞 Quick Links

- **Email:** jeremiahobembe7@gmail.com
- **GitHub:** github.com/jerr001
- **LinkedIn:** linkedin.com/in/jeremiah-obembe-a25381314

---

## ⚡ Keyboard Shortcuts (in browser)

| Shortcut           | Action                    |
| ------------------ | ------------------------- |
| `Ctrl + R`         | Reload page               |
| `Ctrl + Shift + R` | Hard reload (clear cache) |
| `F12`              | Open developer tools      |
| `Ctrl + Shift + C` | Inspect element           |

---

## 📦 Project Size

- **Development:** ~200MB (with node_modules)
- **Production Build:** ~500KB (optimized)
- **Gzipped:** ~60KB (deployed)

---

## ✅ Checklist

### Before First Run

- [ ] Node.js installed
- [ ] Copied images to `public/images/`
- [ ] Copied docs to `public/docs/`
- [ ] Copied other assets

### Before Deployment

- [ ] Run `npm run build`
- [ ] Test the build locally
- [ ] Update social links
- [ ] Update CV file
- [ ] Check all images load

---

**Need detailed help?** Read `SETUP_GUIDE.md`

**Want to understand changes?** Read `MIGRATION_SUMMARY.md`
