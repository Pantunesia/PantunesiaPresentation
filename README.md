# Pantunesia - React Presentation

A fully functional React conversion of the Pantunesia presentation platform for learning Indonesian pantun through AI and gamification.

## 🎯 What's New

This React version maintains 100% feature parity with the original vanilla JS implementation while following React best practices:

✅ **All Original Features Preserved:**
- Full keyboard navigation (arrows, space, home, end, F for fullscreen, P for print)
- Touch/swipe support for mobile devices
- Mouse wheel navigation with throttling
- Progress bar and slide counter
- Jump-to-slide functionality
- All animations and transitions
- Responsive design (desktop & mobile)
- Print-friendly styling

✅ **React Best Practices:**
- Functional components with hooks
- Custom hooks for reusable logic
- Memoization for performance
- Proper dependency arrays
- Clean component separation
- No props drilling

## 📁 Project Structure

```
src/
├── components/
│   ├── Presentation.jsx          # Main container component
│   ├── Slide.jsx                 # Slide wrapper component
│   ├── Navigation.jsx            # Bottom navigation controls
│   ├── ProgressBar.jsx           # Progress bar at top
│   ├── slides/                   # Individual slide components (16 total)
│   └── common/                   # Reusable components
├── hooks/
│   ├── usePresentationNavigation.js
│   ├── useKeyboardNavigation.js
│   ├── useTouchNavigation.js
│   └── useMouseWheelNavigation.js
├── styles/
│   ├── variables.css
│   ├── animations.css
│   └── index.css
└── App.jsx
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## 📖 Navigation Guide

### Keyboard Controls
- **→** or **Space** or **PageDown** – Next slide
- **←** or **PageUp** – Previous slide
- **Home** – First slide
- **End** – Last slide
- **F** – Toggle fullscreen
- **P** – Print preview

### Mouse/Trackpad
- Click navigation buttons
- Scroll wheel (throttled)
- Click slide counter to jump

### Touch
- Swipe left – Next slide
- Swipe right – Previous slide

## 🏗️ Architecture

### Custom Hooks
1. **usePresentationNavigation** - Manages slide state
2. **useKeyboardNavigation** - Keyboard event handling
3. **useTouchNavigation** - Touch/swipe detection
4. **useMouseWheelNavigation** - Mouse wheel with throttle

### Components
- 16 slide components (one per slide)
- 6 reusable common components
- Main Presentation container
- Navigation and ProgressBar UI

## 🎨 Styling

All original CSS preserved:
- CSS custom properties for theming
- Keyframe animations (bounce, spin, pulse, slideUp)
- Responsive design (768px breakpoint)
- Print-friendly styles

Primary color: `#1E8F5A` (tosca green)
Accent color: `#FFD93D` (yellow)

## 📱 Responsive Design

- **Desktop (> 768px)** - Full-width layouts
- **Mobile/Tablet (≤ 768px)** - Single column, touch-optimized

## 🔄 Features Comparison

| Feature | Vanilla | React |
|---------|---------|-------|
| Structure | Monolithic | Modular components |
| State | Global variables | React hooks |
| Reusability | None | Component library |
| Memoization | N/A | Yes |
| Bundle | 50KB | 65KB (gzip) |

## 🚀 Performance

- Memoized components prevent unnecessary re-renders
- useCallback for stable function references
- CSS transitions for animations
- Efficient event listener cleanup
- Only re-renders on slide change

### Bundle Size
- Minified JS: 209.89 KB
- Gzipped: 64.73 KB

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 🔧 Customization

### Adding Slides
1. Create component in `src/components/slides/`
2. Import and add to Presentation.jsx
3. Update `TOTAL_SLIDES` constant

### Changing Colors
Edit `src/styles/variables.css`:
```css
:root {
    --primary-color: #1E8F5A;
    --accent-color: #FFD93D;
}
```

## 📄 Credits

React conversion of Pantunesia presentation with full feature parity.

Built with **React 18 + Vite** ⚛️ ⚡
