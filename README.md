# Redland

A modern, beautiful static website built with HTML, CSS, and JavaScript.

## Features

- 🎨 **Stunning Design** - Modern aesthetics with vibrant gradients and smooth animations
- 📱 **Fully Responsive** - Beautiful on all devices from mobile to desktop
- ⚡ **Lightning Fast** - Pure HTML/CSS/JS with no heavy frameworks
- 🎭 **Smooth Animations** - Engaging micro-interactions and transitions
- 🌙 **Dark Mode** - Sleek dark theme design
- ♿ **Accessible** - Semantic HTML and ARIA labels
- 🎯 **SEO Optimized** - Proper meta tags and semantic structure

## Getting Started

### Prerequisites

No build tools or dependencies required! Just a modern web browser.

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! 🎉

### Local Development

For the best development experience, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Project Structure

```
redland/
├── index.html      # Main HTML file
├── styles.css      # All styles and animations
├── script.js       # Interactive functionality
└── README.md       # This file
```

## Customization

### Colors

Edit the CSS variables in `styles.css` to customize the color scheme:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    --accent-color: #14b8a6;
    /* ... more variables */
}
```

### Content

- Edit `index.html` to change text content and structure
- Modify sections, add new ones, or remove existing sections as needed
- Update navigation links in the navbar

### Styling

- All styles are in `styles.css` organized by section
- Uses CSS Grid and Flexbox for layouts
- Fully responsive with mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- No external dependencies
- Optimized CSS with minimal repaints
- Efficient JavaScript with event delegation
- Lazy loading ready for images

## License

This project is open source and available for personal and commercial use.

## Credits

Built with ❤️ using modern web technologies.
