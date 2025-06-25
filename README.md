# CVOCA Website - Optimized Version

A simplified and optimized website for the CVO Chartered & Cost Accountants Association.

## Features

- **Simplified Architecture**: Removed complex dependencies and unnecessary code
- **Clean UI**: Streamlined components with essential functionality
- **Fast Performance**: Optimized build configuration and reduced bundle size
- **Responsive Design**: Works on all devices
- **Dark/Light Theme**: Toggle between themes

## Pages

- **Home**: Overview and highlights
- **About**: Managing committee, core committees, and past presidents
- **Membership**: Benefits, types, and application form
- **Events**: Upcoming and past events
- **Blog**: Latest articles and newsletter signup
- **Contact**: Contact information and form
- **Digital Outreach**: Social media links and digital initiatives

## Technology Stack

- **Vue 3**: Modern reactive framework
- **Vuetify 3**: Material Design component library
- **Vue Router**: Client-side routing
- **Pinia**: State management
- **Vite**: Fast build tool

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:3000`

### Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── common/
│   │   └── BaseCard.vue          # Simplified card component
│   └── layout/
│       ├── AppHeader.vue         # Navigation header
│       └── AppFooter.vue         # Footer component
├── stores/
│   └── app.js                    # App state management
├── utils/
│   └── constants.js              # Navigation items
├── views/                        # Page components
│   ├── HomeView.vue
│   ├── AboutView.vue
│   ├── MembershipView.vue
│   ├── EventsView.vue
│   ├── BlogView.vue
│   ├── ContactView.vue
│   └── DigitalOutreachView.vue
├── App.vue                       # Main app component
├── main.js                       # App entry point
└── router/
    └── index.js                  # Route definitions
```

## Optimization Highlights

### Removed Dependencies
- Complex meta management libraries
- Unnecessary utility libraries
- Heavy build plugins
- Testing frameworks (can be added back if needed)

### Simplified Components
- Removed complex animations and effects
- Streamlined layouts and styling
- Reduced component complexity
- Cleaner code structure

### Performance Improvements
- Smaller bundle size
- Faster build times
- Reduced runtime overhead
- Simplified state management

## Customization

### Adding New Pages
1. Create a new Vue component in `src/views/`
2. Add the route in `src/router/index.js`
3. Add navigation item in `src/utils/constants.js`

### Styling
- Uses Vuetify's design system
- Custom styles kept minimal
- Easy to modify colors and themes

### Data Management
- Static data in component files
- Can be easily connected to APIs
- Simple state management with Pinia

## License

This project is for the CVO Chartered & Cost Accountants Association. 