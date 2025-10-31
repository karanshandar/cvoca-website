# Responsive Design Guide - CVOCA Website

## Material You 3 Breakpoints

The CVOCA website uses Vuetify 3's default breakpoints aligned with Material Design guidelines:

| Breakpoint | Range | Device Type | Columns | Gutters |
|------------|-------|-------------|---------|---------|
| **xs** | 0-599px | Phone (portrait) | 4 | 16px |
| **sm** | 600-959px | Phone (landscape), Tablet (portrait) | 8 | 16px |
| **md** | 960-1279px | Tablet (landscape), Small Desktop | 12 | 24px |
| **lg** | 1280-1919px | Desktop | 12 | 24px |
| **xl** | 1920px+ | Large Desktop | 12 | 24px |

## Testing Checklist

### Mobile (320px - 599px)

#### Layout
- [ ] Content is readable without horizontal scrolling
- [ ] Images scale properly and don't overflow
- [ ] Navigation drawer opens smoothly
- [ ] All text is legible (minimum 16px body text)
- [ ] Cards stack vertically
- [ ] Forms are single-column layout

#### Touch Targets
- [ ] All buttons minimum 48x48px
- [ ] Links have adequate spacing
- [ ] Form inputs are easy to tap
- [ ] Icons are at least 24x24px

#### Typography
- [ ] Headings scale appropriately (clamp values)
- [ ] Line length is comfortable (45-75 characters)
- [ ] Line height provides adequate spacing
- [ ] Font sizes never below 14px

#### Images & Media
- [ ] Hero images load quickly (optimized)
- [ ] Aspect ratios maintained
- [ ] No layout shifts during load
- [ ] Images have proper alt text

#### Navigation
- [ ] Mobile menu icon visible
- [ ] Desktop navigation hidden
- [ ] Drawer slides in smoothly
- [ ] Close button easily accessible
- [ ] Menu items have adequate spacing

#### Components
- [ ] Cards have proper padding (pa-4 minimum)
- [ ] Buttons span full width on mobile
- [ ] Chips wrap gracefully
- [ ] Tables scroll horizontally or reformat
- [ ] Modals fit in viewport

---

### Tablet (600px - 959px)

#### Layout
- [ ] 2-column grid for cards
- [ ] Content width comfortable (not too wide)
- [ ] Adequate whitespace maintained
- [ ] Images displayed at appropriate size

#### Navigation
- [ ] Decide: Mobile drawer or desktop nav?
- [ ] Navigation items visible or collapsed
- [ ] Search functionality accessible

#### Typography
- [ ] Headings sized between mobile and desktop
- [ ] Paragraphs readable (60-80 characters per line)
- [ ] Adequate spacing between sections

#### Components
- [ ] Feature cards in 2-column grid
- [ ] Forms can be 2-column where appropriate
- [ ] Hero sections have balanced layout

---

### Desktop (960px - 1279px)

#### Layout
- [ ] 3-4 column grid for cards
- [ ] Content centered with max-width
- [ ] Desktop navigation visible
- [ ] Proper use of horizontal space

#### Navigation
- [ ] Full horizontal navigation bar
- [ ] All menu items visible
- [ ] Hover states clear
- [ ] Mobile menu hidden

#### Typography
- [ ] Large headings (h1: 3-4rem)
- [ ] Optimal line length (60-80 characters)
- [ ] Clear visual hierarchy

#### Components
- [ ] Hero sections use horizontal layout
- [ ] Cards displayed in grid
- [ ] Forms can be multi-column
- [ ] Adequate spacing between elements

---

### Large Desktop (1280px+)

#### Layout
- [ ] Maximum content width enforced (1400-1600px)
- [ ] Content centered with margins
- [ ] 4-column grid for cards
- [ ] Generous whitespace

#### Typography
- [ ] Headings at maximum size
- [ ] Optimal reading width maintained
- [ ] Adequate line height for large text

#### Components
- [ ] Large hero sections with impact
- [ ] Grid layouts utilize full width
- [ ] Images and media high resolution

---

## Vuetify Responsive Utilities

### Grid System

```vue
<v-row>
  <v-col cols="12" sm="6" md="4" lg="3">
    <!-- Content -->
  </v-col>
</v-row>
```

- `cols`: Mobile (xs) - default 12 (full width)
- `sm`: Tablet portrait (600px+)
- `md`: Tablet landscape/Small desktop (960px+)
- `lg`: Desktop (1280px+)
- `xl`: Large desktop (1920px+)

### Display Utilities

```vue
<!-- Hide on mobile, show on desktop -->
<div class="d-none d-md-flex">Desktop only</div>

<!-- Show on mobile, hide on desktop -->
<div class="d-md-none">Mobile only</div>
```

Available classes:
- `d-none`: Hidden at all sizes
- `d-{breakpoint}-none`: Hidden at breakpoint and up
- `d-flex`, `d-block`, `d-inline`: Display types
- `d-{breakpoint}-flex`, etc.: Display at breakpoint

### Spacing Utilities

```vue
<!-- Responsive padding -->
<v-card class="pa-4 pa-md-6 pa-lg-8">

<!-- Responsive margins -->
<div class="ma-2 ma-sm-4 ma-md-6">
```

## Common Responsive Patterns

### 1. Responsive Hero Section

```vue
<section class="hero-section">
  <v-container>
    <v-row align="center" justify="center">
      <!-- Text content -->
      <v-col cols="12" md="6" class="text-center text-md-left">
        <h1 class="text-h2 text-md-h1">Heading</h1>
        <p class="text-body-1 text-md-h6">Subtitle</p>
      </v-col>

      <!-- Image/visual -->
      <v-col cols="12" md="6" class="d-none d-md-flex">
        <v-img src="/hero.jpg" />
      </v-col>
    </v-row>
  </v-container>
</section>

<style>
.hero-section {
  min-height: 60vh; /* Mobile */
  padding: 2rem 0;
}

@media (min-width: 960px) {
  .hero-section {
    min-height: 85vh; /* Desktop */
    padding: 4rem 0;
  }
}
</style>
```

### 2. Responsive Card Grid

```vue
<v-row>
  <v-col
    v-for="item in items"
    :key="item.id"
    cols="12"    <!-- Mobile: 1 column -->
    sm="6"       <!-- Tablet: 2 columns -->
    md="4"       <!-- Desktop: 3 columns -->
    lg="3"       <!-- Large: 4 columns -->
  >
    <v-card>{{ item.title }}</v-card>
  </v-col>
</v-row>
```

### 3. Responsive Typography

```vue
<h1 class="responsive-heading">CVOCA</h1>

<style>
.responsive-heading {
  font-size: clamp(2rem, 5vw, 4rem);
  /* Min: 2rem (mobile), Preferred: 5vw, Max: 4rem (desktop) */
}
</style>
```

### 4. Responsive Navigation

```vue
<template>
  <v-app-bar>
    <!-- Logo (always visible) -->
    <v-app-bar-title>CVOCA</v-app-bar-title>

    <!-- Desktop navigation (md and up) -->
    <div class="d-none d-lg-flex">
      <v-btn v-for="item in nav" :key="item">{{ item }}</v-btn>
    </div>

    <!-- Mobile menu button (below md) -->
    <v-btn icon class="d-lg-none" @click="drawer = true">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>

  <!-- Mobile drawer -->
  <v-navigation-drawer v-model="drawer" temporary>
    <!-- Navigation items -->
  </v-navigation-drawer>
</template>
```

### 5. Responsive Container

```vue
<v-container class="content-wrapper">
  <!-- Content -->
</v-container>

<style>
.content-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem; /* Mobile */
}

@media (min-width: 960px) {
  .content-wrapper {
    padding: 0 2rem; /* Desktop */
  }
}
</style>
```

## Current Implementation Review

### ✅ Good Practices Found

1. **Content Wrappers:**
   ```css
   .content-wrapper {
     max-width: 1400px;
     margin: 0 auto;
     padding: 0 1rem;
   }
   ```

2. **Responsive Typography:**
   ```css
   h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
   ```

3. **Grid Usage:**
   ```vue
   <v-col cols="12" sm="6" md="4" lg="3">
   ```

### ⚠️ Areas for Improvement

1. **Horizontal Scrolling:**
   - Need to audit all pages for overflow issues
   - Check wide tables and images

2. **Touch Targets:**
   - Verify all buttons are minimum 48x48px
   - Check icon button sizes on mobile

3. **Typography Scales:**
   - Ensure all headings use clamp() for fluid sizing
   - Check readability on small screens

4. **Image Optimization:**
   - Implement responsive images with srcset
   - Use appropriate aspect ratios

## Testing Workflow

### Manual Testing

1. **Chrome DevTools:**
   ```
   1. Open DevTools (F12)
   2. Toggle device toolbar (Ctrl+Shift+M)
   3. Test these presets:
      - iPhone SE (375px)
      - iPhone 12 Pro (390px)
      - iPad (768px)
      - iPad Pro (1024px)
      - Desktop (1920px)
   ```

2. **Responsive Mode:**
   - Drag viewport to test between breakpoints
   - Watch for layout shifts
   - Check horizontal scrolling

3. **Real Devices:**
   - Test on actual phones (Android & iOS)
   - Test on tablets
   - Test on different desktop resolutions

### Automated Testing

```bash
# Lighthouse Mobile Audit
npm run lighthouse -- --preset mobile

# Responsive image check
npm run test:images

# Accessibility audit
npm run test:a11y
```

## Common Issues & Fixes

### Issue 1: Horizontal Scrolling

**Problem:** Content overflows viewport width

**Solution:**
```css
/* Add to global styles */
html, body {
  overflow-x: hidden;
  max-width: 100vw;
}

* {
  box-sizing: border-box;
}
```

### Issue 2: Touch Targets Too Small

**Problem:** Buttons under 48x48px

**Solution:**
```vue
<v-btn
  size="large"      <!-- Ensures minimum size -->
  icon              <!-- For icon buttons -->
  class="touch-target"
>
  <v-icon>mdi-menu</v-icon>
</v-btn>

<style>
.touch-target {
  min-width: 48px !important;
  min-height: 48px !important;
}
</style>
```

### Issue 3: Text Too Small

**Problem:** Body text below 16px on mobile

**Solution:**
```css
body {
  font-size: 16px; /* Never go below on mobile */
}

@media (min-width: 960px) {
  body {
    font-size: 18px; /* Larger on desktop */
  }
}
```

### Issue 4: Images Overflow

**Problem:** Images wider than container

**Solution:**
```css
img {
  max-width: 100%;
  height: auto;
}

.v-img {
  width: 100%;
}
```

## Performance Considerations

### Mobile Performance

1. **Lazy Loading:**
   ```vue
   <v-img :src="image" lazy />
   ```

2. **Responsive Images:**
   ```html
   <img
     srcset="image-small.jpg 480w,
             image-medium.jpg 768w,
             image-large.jpg 1200w"
     sizes="(max-width: 600px) 100vw,
            (max-width: 960px) 50vw,
            33vw"
     src="image-medium.jpg"
     alt="Description"
   />
   ```

3. **Minimize JS:**
   - Remove unused code
   - Code splitting by route
   - Lazy load components

4. **Optimize CSS:**
   - Remove unused styles
   - Minimize media queries
   - Use Vuetify utilities

## Accessibility

### Screen Reader Support

```vue
<!-- Add aria labels for screen readers -->
<v-btn icon aria-label="Open menu">
  <v-icon>mdi-menu</v-icon>
</v-btn>

<!-- Skip to main content -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>
```

### Focus Management

```css
/* Visible focus states */
*:focus-visible {
  outline: 2px solid rgb(var(--v-theme-primary));
  outline-offset: 2px;
}
```

### Color Contrast

- Test all text colors at all breakpoints
- Ensure WCAG AA compliance (4.5:1 for normal text)
- Check hover states

## Next Steps

1. **Immediate:**
   - [ ] Test all pages at 320px, 768px, 1024px, 1920px
   - [ ] Fix any horizontal scrolling issues
   - [ ] Verify touch targets on all buttons

2. **Short-term:**
   - [ ] Implement responsive images with srcset
   - [ ] Add lazy loading to images below fold
   - [ ] Optimize mobile performance

3. **Long-term:**
   - [ ] Set up automated responsive testing
   - [ ] Create component library with responsive examples
   - [ ] Document responsive patterns

---

**Last Updated:** 2025-10-31
**Version:** 1.0
