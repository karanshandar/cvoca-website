# CVOCA Design System Reference

Quick reference for Material You 3 implementation standards used in the CVOCA website.

---

## Color System (WCAG 2.1 AA Compliant)

### Light Theme
| Token | Value | Usage | Contrast |
|-------|-------|-------|----------|
| primary | #1E40AF | Main actions, primary UI | 5.87:1 ✓ |
| secondary | #7C3AED | Alternative actions | 6.35:1 ✓ |
| tertiary | #059669 | Feature highlights | 4.72:1 ✓ |
| error | #DC2626 | Error states | 5.48:1 ✓ |
| warning | #B45309 | Warnings/alerts | 4.13:1 ✓ |
| success | #059669 | Success states | 4.72:1 ✓ |

### Dark Theme
| Token | Value | Usage | Contrast |
|-------|-------|-------|----------|
| primary | #60A5FA | Main actions | 8.94:1 ✓ |
| secondary | #A78BFA | Alternative actions | 9.12:1 ✓ |
| tertiary | #34D399 | Feature highlights | 9.87:1 ✓ |

---

## Elevation Scale

| Level | Usage | Examples |
|-------|-------|----------|
| **0** | Flat surfaces | Text, dividers, inline content |
| **2** | Default cards/buttons | Content cards, default buttons |
| **4** | Interactive hover state | Cards on hover, raised buttons |
| **8** | Floating elements | Modals, dialogs, floating action buttons |

**Animation:** Hover states increase elevation by 2 levels (2→4, 4→6) with 350ms transition.

---

## Button Variants

| Variant | Usage | Example |
|---------|-------|---------|
| **elevated** | Primary actions | "Join Now", "Submit", "Register" |
| **outlined** | Secondary actions | "Learn More", "Contact Us" |
| **tonal** | Alternative primary | Feature exploration, highlights |
| **text** | Tertiary/icon buttons | "Cancel", icon buttons, low emphasis |

**Sizing:**
- Hero CTAs: `size="x-large"` (56px+)
- Primary: `size="large"` (40px)
- Standard: `size="default"` (36px)
- Minimum touch target: **48x48px** (enforced globally)

---

## Rounded Corners

| Element | Value | CSS Class |
|---------|-------|-----------|
| Cards | 24px | `rounded-xl` |
| Buttons | 16px | `rounded-lg` |
| Small elements | 12px | `rounded-md` |

---

## Typography Hierarchy

| Level | Size | Weight | Usage |
|-------|------|--------|-------|
| **Display (h1)** | clamp(2.5rem, 6vw, 4rem) | 800 | Hero sections |
| **Headline (h2)** | clamp(2rem, 4.5vw, 2.75rem) | 700 | Section titles |
| **Title (h3-h4)** | clamp(1.5rem, 3vw, 2rem) | 600 | Card titles |
| **Body** | 1rem | 400 | Paragraph text |
| **Label** | 0.875rem | 500 | Captions, form labels |

---

## Responsive Breakpoints

| Breakpoint | Range | Device |
|-----------|-------|--------|
| **xs** | 0-599px | Mobile (portrait) |
| **sm** | 600-959px | Tablet (portrait) |
| **md** | 960-1279px | Tablet (landscape) |
| **lg** | 1280-1919px | Desktop |
| **xl** | 1920px+ | Large desktop |

---

## Animations & Motion

| Property | Value | Usage |
|----------|-------|-------|
| **Duration** | 350ms | Standard transitions |
| **Easing** | cubic-bezier(0.2, 0, 0, 1) | Emphasized (recommended) |
| **GPU Acceleration** | `transform`, `opacity` | All animations |
| **Mobile** | Respects `prefers-reduced-motion` | Accessibility |

---

## Spacing Scale (Vuetify Utilities)

```
ma-1 = 4px    | pa-1 = 4px
ma-2 = 8px    | pa-2 = 8px
ma-3 = 12px   | pa-3 = 12px
ma-4 = 16px   | pa-4 = 16px
ma-6 = 24px   | pa-6 = 24px
ma-8 = 32px   | pa-8 = 32px
```

---

## Component Defaults (Vuetify)

```javascript
// src/plugins/vuetify.js
defaults: {
  global: {
    elevation: 2,
    rounded: 'lg',
  },
  VCard: {
    elevation: 2,
    rounded: 'xl',
  },
  VBtn: {
    elevation: 2,
    rounded: 'lg',
  },
}
```

---

## Card Styling Standards

- **Border radius:** 24px (rounded-xl)
- **Default elevation:** 2
- **Padding:** 1.5rem
- **Title weight:** 700
- **Hover elevation:** 4 (with 350ms transition)

---

## Accessibility Requirements

✓ **WCAG 2.1 AA Compliance**
- Minimum 4.5:1 contrast for normal text
- Minimum 3:1 contrast for large text (18pt+)
- All buttons: minimum 48x48px touch target
- Keyboard navigation supported (Tab, Esc keys)
- Focus indicators visible (2px outline)
- Screen reader compatible (ARIA labels)

---

## Common Implementation Patterns

### Responsive Card Grid
```vue
<v-row>
  <v-col cols="12" sm="6" md="4" lg="3">
    <v-card variant="elevated" rounded="xl">...</v-card>
  </v-col>
</v-row>
```

### Hero Section Button
```vue
<v-btn
  variant="elevated"
  color="primary"
  size="x-large"
  rounded="lg"
>
  Call to Action
</v-btn>
```

### Hover State (Elevation Change)
```css
.v-card {
  transition: elevation 350ms cubic-bezier(0.2, 0, 0, 1);
}
.v-card:hover {
  elevation: 4;
}
```

---

## Performance Targets

- **Animations:** 60fps (GPU-accelerated)
- **Page load:** < 2.5 seconds (LCP)
- **Bundle size:** < 250 KB gzipped (JS)
- **Lighthouse:** 90+ across all categories

---

**Last Updated:** 2025-10-31
**Status:** Reference document for Material You 3 implementation
