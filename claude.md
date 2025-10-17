# Vue 3 + Vuetify CVOCA Website - Claude Code Instructions

You are an expert in Vue 3, Vuetify 3, Vue Router, Pinia, and modern web development for the CVOCA (Chartered Accountants) professional community website.

## Core Development Principles

### Code Quality
- Write simple, readable, optimized code
- Prioritize clarity over complexity
- Use early returns and avoid nested conditions
- Follow DRY (Don't Repeat Yourself) principles
- Write complete, working code with no TODOs or placeholders

### Vue 3 Best Practices
- **Always use `<script setup>` syntax** for all components
- Use Composition API with `ref` and `reactive`
- Leverage auto-imports (no need to explicitly import `ref`, `computed`, `watch`, etc.)
- Define props with proper types: `defineProps<{ title: string }>()` or `defineProps({ title: String })`
- Use `defineEmits<{ submit: [value: string] }>()` for component events
- Prefer `computed` over methods for derived state
- Use `watchEffect` or `watch` sparingly

### Code Style Standards
- Use descriptive, semantic names: `isLoading`, `hasError`, `fetchUserData`
- Write short, single-purpose functions (max 20-30 lines)
- Prefer arrow functions for methods and callbacks
- Use template syntax for declarative rendering
- Keep component files under 300 lines; split larger components
- Use TypeScript-style prop definitions when possible

## Material You 3 Design System

### Visual Design Principles
- Implement Material You 3 (Material Design 3) principles throughout
- Use dynamic color theming with Vuetify's theme system
- Apply **large, rounded corners**: `rounded-xl`, `rounded-lg` for modern feel
- Use **elevation and shadows** appropriately: `elevation-2`, `elevation-4`, `elevation-8`
- Implement smooth transitions and micro-animations (60fps target)
- Follow Material You 3 motion principles for natural, delightful interactions

### Color & Theming
- Use proper **color tokens**: `surface`, `primary`, `secondary`, `tertiary`
- Create cohesive color schemes with primary/secondary/tertiary colors
- Use **surface variants** (`surface-variant`, `surface-bright`) for depth and hierarchy
- Implement **proper contrast ratios** for WCAG AA accessibility
- Support both **light and dark themes** seamlessly
- Use color intentionally to convey meaning and CVOCA brand identity
- Use **professional color palettes** that convey trust and authority for chartered accountants

### Typography & Layout
- Use **bold, expressive typography** with Vuetify's text classes (`text-h1`, `text-h2`, etc.)
- Implement hero sections with large headings and engaging visuals
- Apply **consistent visual hierarchy** with proper heading scales
- Use **whitespace generously** for clean, breathable layouts
- Maintain professional aesthetics suitable for chartered accountants
- Balance modern design with corporate credibility

## Vuetify 3 Implementation

### Component Usage
- Use Vuetify 3 components with Material You styling
- Leverage modern variants:
  - Buttons: `v-btn variant="elevated"`, `variant="outlined"`, `variant="tonal"`
  - Cards: `v-card variant="outlined"`, `variant="elevated"`
  - Text fields: `v-text-field variant="outlined"`
- Use adaptive layouts with `v-container`, `v-row`, `v-col`
- Apply **consistent spacing**: `ma-4`, `pa-6`, `mx-auto`, `my-8`
- Use Vuetify's color system: `color="primary"`, `bg-color="surface"`

### Responsive Design
- Use **mobile-first approach** with responsive breakpoints
- Leverage Vuetify's grid system: `cols="12" md="6" lg="4"`
- Use responsive display utilities: `d-none d-md-flex`
- Test layouts on mobile, tablet, and desktop viewports
- Ensure touch-friendly targets (minimum 48x48px)

### Cards & Surfaces
- Implement Material You 3 card designs with proper elevation
- Use progressive disclosure for complex information
- Apply layered information architecture
- Create engaging call-to-action buttons with proper emphasis
- Use `v-card-title`, `v-card-subtitle`, `v-card-text`, `v-card-actions` properly

## Project Structure & Organization

### File Organization
- **Import data** from `/src/data/*.json`
- **Store shared state** in Pinia stores (`/src/stores/`)
- **Reference images**: `/assets/images/filename.jpg`
- **Components**: Use PascalCase for component names (`UserProfile.vue`)
- **Files**: Use camelCase for file names (`userProfile.js`)
- **Routes**: Define in `/src/router/index.js`

### Data Management
- Use Pinia stores for global state management
- Keep component-local state with `ref` and `reactive`
- Use `provide`/`inject` for dependency injection when appropriate
- Fetch data in composables for reusability

## Performance & User Experience

### Optimization Techniques
- Use `v-show` for **frequent toggles** (keeps element in DOM)
- Use `v-if` for **conditional rendering** (removes from DOM)
- Implement **lazy loading** for routes and large components
- Use `v-lazy` for images and heavy content
- Minimize watchers and computed dependencies
- Avoid unnecessary re-renders with `v-memo` when needed

### Loading & States
- Add **loading skeletons** (`v-skeleton-loader`) for better perceived performance
- Implement smooth state transitions with Vue's `<Transition>` component
- Handle loading states elegantly with spinners or progress indicators
- Show meaningful error states with recovery actions
- Ensure **60fps animations** and micro-interactions
- Add subtle animations and hover effects for interactivity

## Accessibility & Best Practices

### Accessibility (a11y)
- Include **ARIA labels** and attributes where needed
- Ensure proper **semantic HTML** structure
- Maintain **keyboard navigation** support
- Test with screen readers
- Provide **alt text** for all images
- Use proper heading hierarchy (h1 → h2 → h3)

### Error Handling
- Handle loading and error states with elegant transitions
- Provide user-friendly error messages
- Implement proper form validation with clear feedback
- Use `v-alert` for notifications and messages

## Common Patterns & Examples

### Component Structure
```vue
<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <v-card variant="elevated" rounded="lg" class="pa-6">
          <v-card-title class="text-h4">{{ title }}</v-card-title>
          <v-card-text>
            <!-- Content here -->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const props = defineProps({
  title: String
})

const isLoading = ref(false)
const hasError = ref(false)

const fetchData = async () => {
  isLoading.value = true
  try {
    // Fetch logic
  } catch (error) {
    hasError.value = true
  } finally {
    isLoading.value = false
  }
}
</script>
```

### Theming Example
```vue
<v-card
  variant="elevated"
  rounded="xl"
  elevation="4"
  color="surface"
  class="pa-6"
>
  <v-btn
    variant="elevated"
    color="primary"
    size="large"
    rounded="lg"
    class="px-8"
  >
    Call to Action
  </v-btn>
</v-card>
```

## Development Workflow

### When Writing Code
1. Read existing files to understand current patterns
2. Follow the established architecture and naming conventions
3. Use Vuetify 3 components with Material You 3 styling
4. Ensure responsive design and accessibility
5. Test in both light and dark themes
6. Write clean, self-documenting code

### When Refactoring
1. Maintain backward compatibility unless explicitly asked to break it
2. Improve code clarity and performance
3. Follow DRY principles
4. Update related documentation
5. Test thoroughly after changes

## Summary

Generate clean, functional Vue 3 code with modern Material You 3 design that creates **visually stunning, accessible, and engaging user experiences** for the CVOCA professional community. Always prioritize:
- Professional aesthetics suitable for chartered accountants
- Modern, beautiful UI with Material You 3 principles
- Accessibility and inclusive design
- Performance and smooth user experience
- Clean, maintainable code architecture
