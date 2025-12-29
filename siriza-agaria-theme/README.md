# Siriza Agaria Ghost Theme

A luxury literary blog theme designed to match the Siriza Agaria brand aesthetic. Features a dark, elegant design with gold accents, custom typography, and responsive layouts.

## Features

- **Dark Luxury Design**: Deep ink backgrounds with gold accents matching the Siriza Agaria brand
- **Custom Typography**: EB Garamond for display text, Spectral for body content
- **Responsive Layout**: Mobile-first design that works on all devices
- **Post Cards**: Beautiful card-based post grid with hover effects
- **Author Profiles**: Dedicated author pages with bio and social links
- **Tag System**: Organized content with category and tag filtering
- **Social Integration**: Built-in social media links
- **Comments Support**: Ready for Disqus or Ghost native comments
- **Member Support**: Subscribe form for Ghost members

## Color Palette

- **Gold**: `#d4a847` - Primary accent color
- **Gold Light**: `#e8c876` - Lighter accent for hover states
- **Ink**: `#0d0d0f` - Primary background
- **Ink Light**: `#1a1a1f` - Secondary background
- **Cream**: `#faf7f2` - Primary text color

## Typography

- **Display Font**: EB Garamond (serif)
- **Body Font**: Spectral (serif)

## Installation

1. Download the theme files
2. Zip the `siriza-agaria-theme` folder
3. Go to Ghost Admin → Settings → Design → Change Theme
4. Upload the zip file
5. Activate the theme

## Configuration

### Ghost Settings

1. **Site Title**: Set in Ghost Admin → Settings → General
2. **Site Description**: Set in Ghost Admin → Settings → General
3. **Navigation Menu**: Configure in Ghost Admin → Settings → Navigation
4. **Social Links**: Set in Ghost Admin → Settings → Social Accounts
   - Facebook
   - Twitter
   - Instagram

### Theme Customization

Edit `assets/css/style.css` to customize:
- Colors (CSS variables at the top)
- Typography sizes
- Spacing and padding
- Hover effects and transitions

## File Structure

```
siriza-agaria-theme/
├── package.json              # Theme metadata
├── README.md                 # This file
├── default.hbs               # Base layout template
├── index.hbs                 # Blog listing page
├── post.hbs                  # Single post template
├── page.hbs                  # Static page template
├── tag.hbs                   # Tag/category page
├── author.hbs                # Author page
├── error.hbs                 # Error page
├── partials/
│   ├── header.hbs            # Header with navigation
│   ├── footer.hbs            # Footer with links
│   ├── post-card.hbs         # Reusable post card
│   └── navigation.hbs        # Navigation menu
└── assets/
    ├── css/
    │   └── style.css         # Main stylesheet
    └── js/
        └── main.js           # JavaScript functionality
```

## Features Explained

### Post Cards
- Responsive grid layout (3 columns on desktop, 1 on mobile)
- Feature image with fallback gradient
- Post category, title, excerpt
- Author avatar and publication date
- Hover effects with elevation and shadow

### Post Pages
- Full-width hero image with dark overlay
- Post metadata (category, date, reading time)
- Responsive content area
- Author bio section
- Related posts section
- Tag list
- Comment section support

### Navigation
- Sticky header with blur effect
- Active link highlighting
- Responsive mobile menu ready
- Social media links

### Footer
- Latest posts section
- Categories/tags list
- Newsletter subscription
- Social media links
- Copyright information

## Customization Tips

### Change Colors
Edit the CSS variables in `assets/css/style.css`:
```css
:root {
  --gold: #d4a847;
  --ink: #0d0d0f;
  --cream: #faf7f2;
}
```

### Adjust Typography
Modify font sizes in the same file:
```css
h1 { font-size: 3.5rem; }
h2 { font-size: 2.5rem; }
```

### Add Custom Fonts
Replace the Google Fonts import in `default.hbs` with your preferred fonts.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized CSS with minimal file size
- Lazy loading support for images
- Efficient JavaScript with no dependencies
- Fast page load times

## Support

For issues or questions about this theme, contact the Siriza Agaria team.

## License

MIT License - Feel free to customize and use this theme.

---

**Version**: 1.0.0  
**Last Updated**: December 2025  
**Compatible with**: Ghost 5.0+
