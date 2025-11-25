# ✅ Setup Checklist

## Pre-Setup

- [ ] Node.js is installed (check: `node --version`)
- [ ] npm is installed (check: `npm --version`)
- [ ] You're in the correct folder (`react-portfolio`)

## Asset Setup

- [ ] Ran `setup-assets.bat` (or copied files manually)
- [ ] Images are in `public/images/`
- [ ] CV is in `public/docs/`
- [ ] Agency folder is in `public/agency/`
- [ ] Graphic design files are in `public/`

## Installation

- [ ] Ran `npm install` successfully
- [ ] No error messages appeared
- [ ] `node_modules` folder was created

## First Run

- [ ] Ran `npm start`
- [ ] Browser opened automatically
- [ ] Page loads at `http://localhost:3000`
- [ ] No error messages in terminal

## Visual Check

- [ ] Navbar appears at the top
- [ ] Logo shows "Jeremiah."
- [ ] All navbar links work (Home, About, Portfolio, Services, Book Preview)
- [ ] Smooth scrolling works
- [ ] Profile image shows in Hero section
- [ ] Social media icons appear
- [ ] About section has profile image
- [ ] Skills list displays correctly
- [ ] Portfolio projects show with images
- [ ] Services cards display correctly
- [ ] Book preview section loads
- [ ] Footer appears at bottom

## Functionality Check

- [ ] Navbar highlights active section
- [ ] Mobile menu works (resize browser to test)
- [ ] Hamburger icon appears on mobile
- [ ] Mobile menu opens/closes
- [ ] All links are clickable
- [ ] Download CV button works
- [ ] Contact Me button works
- [ ] Social media links open
- [ ] Portfolio project links work
- [ ] Smooth scroll navigation works
- [ ] Fade-in animations trigger on scroll

## Responsive Check

- [ ] Looks good on desktop (1920px)
- [ ] Looks good on laptop (1366px)
- [ ] Looks good on tablet (768px)
- [ ] Looks good on mobile (375px)
- [ ] All sections are readable
- [ ] Images scale properly
- [ ] Buttons are clickable on mobile

## Content Verification

- [ ] Name is spelled correctly everywhere
- [ ] Email is correct
- [ ] Social media links are correct
- [ ] GitHub link works
- [ ] LinkedIn link works
- [ ] All project descriptions are accurate
- [ ] CV file is the latest version
- [ ] Book preview link works

## Performance Check

- [ ] Page loads in under 2 seconds
- [ ] Scrolling is smooth (60fps)
- [ ] No console errors (F12 > Console)
- [ ] Images load properly
- [ ] No 404 errors (F12 > Network)

## Before Deployment

- [ ] All checklist items above are complete
- [ ] Ran `npm run build` successfully
- [ ] Tested the build folder locally
- [ ] Updated personal information
- [ ] Checked all external links
- [ ] Reviewed content for typos
- [ ] Images are optimized
- [ ] CV is current

## Post-Deployment

- [ ] Site is live at deployment URL
- [ ] All sections work on live site
- [ ] Images load on live site
- [ ] Links work on live site
- [ ] Mobile version works
- [ ] Shared link with friends for testing

---

## If Something's Wrong

### Images don't show

1. Check `public/images/` folder exists
2. Run `setup-assets.bat` again
3. Verify image filenames match (case-sensitive)

### npm install fails

1. Delete `node_modules` folder
2. Delete `package-lock.json` file
3. Run `npm install` again

### Page won't load

1. Check terminal for error messages
2. Make sure port 3000 isn't in use
3. Try `npm start` again
4. Clear browser cache (Ctrl + F5)

### Styles look wrong

1. Clear browser cache
2. Check browser console (F12)
3. Verify all CSS files exist
4. Restart development server

### Navigation doesn't work

1. Check browser console for errors
2. Verify section IDs match (#home, #about, etc.)
3. Test with browser zoom at 100%

---

## Success Indicators

✅ **Setup is complete when:**

- Terminal shows "webpack compiled successfully"
- Browser opens to http://localhost:3000
- You see your portfolio with all sections
- Navigation works smoothly
- No errors in browser console

✅ **Ready to deploy when:**

- All checklist items are checked
- `npm run build` completes without errors
- Build folder contains optimized files
- You've tested on multiple devices

---

**Congratulations! 🎉**

Once all items are checked, your React portfolio is ready to use!

For help, refer to:

- `SETUP_GUIDE.md` - Detailed setup instructions
- `QUICK_REFERENCE.md` - Common commands and tasks
- `MIGRATION_SUMMARY.md` - What changed and why
- `README.md` - Project overview

---

Last Updated: November 20, 2025
