# Personal Portfolio Website

A modern, responsive, and visually appealing personal portfolio website designed to showcase your skills, projects, and accomplishments as a web developer.

## Features

✨ **Modern Design**
- Clean and attractive layout with gradient backgrounds
- Smooth animations and transitions
- Fully responsive design (mobile, tablet, desktop)

🎨 **Sections Included**
- **Home/Hero**: Eye-catching headline with call-to-action buttons
- **About**: Personal introduction with statistics
- **Skills**: Organized skill categories (Frontend, Backend, Tools, Soft Skills)
- **Projects**: Featured project showcase with descriptions and links
- **Contact**: Contact form and social media links
- **Navigation**: Sticky navbar with smooth scrolling

⚡ **Interactive Features**
- Mobile-friendly hamburger menu
- Smooth scroll animations
- Form validation and submission handler
- Scroll reveal animations
- Counter animation for statistics
- Parallax scrolling effect
- Active navigation highlighting

## Files Structure

```
PRODIGY_WD_04/
├── index.html      # Main HTML file with all sections
├── styles.css      # Complete styling with responsive design
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## Getting Started

### 1. Open the Website
- Simply open `index.html` in your web browser to view the portfolio

### 2. Customize Your Information

#### Update Your Name & Title
In `index.html`, find and update:
```html
<div class="logo">
    <i class="fas fa-code"></i> Your Name Here
</div>
```

#### Update Hero Section
```html
<h1 class="hero-title">
    Creative <span class="gradient-text">Web Developer</span>
</h1>
<p class="hero-subtitle">Your professional headline here</p>
```

#### Update About Section
Replace the placeholder text with your own bio:
```html
<p>I'm a passionate web developer...</p>
```

#### Update Statistics
Change the numbers in the about statistics:
```html
<div class="stat">
    <h3>2+</h3>          <!-- Change this number -->
    <p>Years Experience</p>
</div>
```

#### Update Skills
Modify skill categories and tags:
```html
<div class="skill-category">
    <h3>Frontend</h3>
    <div class="skill-tags">
        <span class="skill-tag">HTML5</span>
        <span class="skill-tag">CSS3</span>
        <!-- Add/remove skills as needed -->
    </div>
</div>
```

#### Update Projects
Modify the project cards with your actual projects:
```html
<div class="project-card">
    <h3>Your Project Name</h3>
    <p>Your project description...</p>
    <a href="your-live-demo-url" class="project-link">
        <i class="fas fa-external-link-alt"></i> Live Demo
    </a>
```

#### Update Contact Information
Replace with your actual contact details:
```html
<p>hello@hindusri.com</p>
<p>+1 (555) 123-4567</p>
<p>Your City, Your Country</p>
```

#### Update Social Media Links
Replace the `#` with your actual social media profile URLs:
```html
<a href="https://github.com/yourprofile" class="social-link">
    <i class="fab fa-github"></i>
</a>
```

## Customization Guide

### Change Color Scheme
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;        /* Main color (indigo) */
    --secondary-color: #8b5cf6;      /* Secondary color (purple) */
    --accent-color: #ec4899;         /* Accent color (pink) */
    --dark-bg: #0f172a;              /* Dark background */
    --light-bg: #f1f5f9;             /* Light background */
}
```

Popular color combinations:
- **Tech Blue**: `#0ea5e9`, `#06b6d4`, `#0891b2`
- **Green Nature**: `#10b981`, `#059669`, `#047857`
- **Red Energy**: `#ef4444`, `#dc2626`, `#991b1b`
- **Purple Mystery**: `#a855f7`, `#9333ea`, `#7e22ce`

### Modify Fonts
Change the font family in `styles.css`:
```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

### Add Profile Picture
Replace the placeholder icon in the about section:
```html
<div class="image-placeholder">
    <img src="your-image.jpg" alt="Profile">
</div>
```

Update the CSS to display the image properly:
```css
.image-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}
```

## Contact Form Setup

The contact form is currently a demo. To make it functional, you can:

1. **Using Formspree (Free)**:
   - Go to https://formspree.io/
   - Create an account and add your form
   - Update the form action: `<form action="https://formspree.io/f/YOUR_ID" method="POST">`

2. **Using Web3Forms (Free)**:
   - Go to https://web3forms.com/
   - Get your access key
   - Add the hidden input to your form

3. **Using Backend Service**:
   - Set up your own backend to handle form submissions
   - Update the form to POST to your endpoint

## Deploy Your Portfolio

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Push your files to the repo
3. Enable GitHub Pages in repository settings
4. Your portfolio will be live at `https://yourusername.github.io/repo-name`

### Option 2: Netlify (Free)
1. Go to https://netlify.com
2. Click "New site from Git" or drag and drop your folder
3. Your site will be deployed instantly

### Option 3: Vercel (Free)
1. Go to https://vercel.com
2. Import your Git repository
3. Deploy with one click

### Option 4: Traditional Hosting
1. Upload files via FTP to your hosting provider
2. Domain will be your hosting provider's URL

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Use optimized image formats (WebP, JPEG)
2. **Lazy Loading**: Add lazy loading to project images
3. **Minify CSS/JS**: Minify before deployment
4. **CDN**: Use CDN for Font Awesome icons
5. **Caching**: Enable browser caching on your server

## SEO Optimization

Add meta descriptions in `index.html`:
```html
<meta name="description" content="Professional portfolio of Hindu Sri - Web Developer">
<meta name="keywords" content="web developer, portfolio, projects">
<meta name="author" content="Hindu Sri">
```

## Accessibility

The website includes:
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Mobile accessibility

## Future Enhancements

Consider adding:
- Blog section with articles
- Client testimonials
- Resume download button
- Dark mode toggle
- Newsletter subscription
- Analytics integration
- Comment system for projects

## License

This portfolio template is free to use and modify for personal use.

## Support

For issues or questions, feel free to review the code and customize as needed. The code is well-commented for easy understanding.

---

**Created**: 2025
**Last Updated**: February 2025

Happy coding! 🚀
