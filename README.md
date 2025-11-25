# Jeremiah Obembe - React Portfolio

A modern, single-page React portfolio website for Jeremiah Obembe, Frontend Developer & Graphic Designer.

## Features

- ✅ Single-page application with smooth scrolling navigation
- ✅ Uniform navbar and footer across all sections
- ✅ All pages integrated: Home, About, Portfolio, Services, Book Preview
- ✅ Responsive design for all devices
- ✅ Fade-in animations on scroll
- ✅ Same color scheme and theme as original website
- ✅ No "Back to Home" links - seamless navigation

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Navigate to the project directory:

```bash
cd react-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Copy your images and documents:

   - Copy all images from the parent `images/` folder to `public/images/`
   - Copy all documents from the parent `docs/` folder to `public/docs/`
   - Copy the `agency/` folder to `public/agency/`
   - Copy `hotel.png`, `bizcard-front.jpg`, `bizcard-back.jpg`, `Graphic-01.jpg`, `Graphic-02.jpg` to `public/`

4. Start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `build/` folder, ready to deploy.

## Project Structure

```
react-portfolio/
├── public/
│   ├── images/           # All website images
│   ├── docs/             # CV and documents
│   └── index.html        # HTML template
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Services.jsx
│   │   └── BookPreview.jsx
│   ├── styles/           # CSS files
│   ├── App.jsx           # Main App component
│   └── index.js          # Entry point
└── package.json
```

## Technologies Used

- React 18
- CSS3 (with smooth scroll and animations)
- Boxicons & Font Awesome icons
- Modern ES6+ JavaScript

## Navigation

The navbar provides smooth scroll navigation to all sections:

- **Home** - Hero section with introduction
- **About** - About me and skills
- **Portfolio** - Web development & graphic design projects
- **Services** - Services offered
- **Book Preview** - HTML/CSS book preview

## Deployment

You can deploy this application to:

- Vercel: `npm install -g vercel && vercel`
- Netlify: Drag and drop the `build/` folder
- GitHub Pages: Use `gh-pages` package

## Contact

- Email: jeremiahobembe7@gmail.com
- LinkedIn: [Jeremiah Obembe](https://www.linkedin.com/in/jeremiah-obembe-a25381314)
- GitHub: [jerr001](https://github.com/jerr001)

---

© 2025 Jeremiah Obembe. All rights reserved.
