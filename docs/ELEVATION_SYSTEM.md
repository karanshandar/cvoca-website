# Material You 3 Elevation System

## Elevation Levels

Material You 3 uses a consistent elevation system to create depth and hierarchy. The CVOCA website uses the following elevation levels:

### Elevation Scale
| Level | Usage | Components |
|-------|-------|------------|
| **0** | Flat surfaces, inline content | Text, inline images, dividers |
| **2** | Slightly raised surfaces, default cards | Default cards, buttons (rest state), list items |
| **4** | Interactive elements (hover), prominent cards | Cards on hover, raised buttons, dropdowns |
| **8** | Floating elements, modals, dialogs | Floating Action Buttons, App Bar (scrolled), Modals, Dialogs |

## Current Implementation

### Vuetify Defaults (src/plugins/vuetify.js)
```javascript
defaults: {
  global: {
    elevation: 2,  // Default for most components
    rounded: 'lg',
  },
  VCard: {
    elevation: 3,  // ⚠️ Should be 2 or 4 for consistency
    rounded: 'xl',
  },
  VBtn: {
    elevation: 2,  // ✅ Correct
    rounded: 'lg',
  },
}
```

### Issues Identified
1. **VCard default elevation**: Currently set to 3, should be 2 or 4
2. **Hero button elevations**: Some buttons use elevation: 8, which should be reserved for floating elements
3. **Inconsistent card elevations**: Some cards use elevation: 1, others use 2, 3, or custom values

## Recommended Changes

### 1. Update Vuetify Defaults
```javascript
VCard: {
  elevation: 2,  // Change from 3 to 2 for default cards
  rounded: 'xl',
},
```

### 2. Component-Specific Guidelines

#### Cards
- **Default cards**: `elevation="2"` (lists, content cards)
- **Interactive cards** (hover state): `elevation="4"`
- **Featured cards**: `elevation="4"` (hero cards, call-out cards)
- **Modals/Dialogs**: `elevation="8"`

#### Buttons
- **Default buttons**: `elevation="2"`
- **Primary action buttons**: `elevation="4"`
- **Floating Action Buttons**: `elevation="8"`
- **Hover state**: Increase by 2 levels (2→4, 4→6)

#### App Bar / Header
- **Default state**: `elevation="0"` (transparent/blended)
- **Scrolled state**: `elevation="4"` or `elevation="8"` (floating feel)

#### Menus & Dropdowns
- **Dropdowns**: `elevation="4"`
- **Context menus**: `elevation="4"`
- **Mobile drawer**: `elevation="8"`

## Implementation Checklist

### Global Defaults
- [ ] Update VCard elevation from 3 to 2 in vuetify.js
- [ ] Verify VBtn elevation is 2
- [ ] Document elevation scale in project guidelines

### Component Audits
- [ ] HomeView.vue - Review all card and button elevations
- [ ] AboutView.vue - Ensure consistent card elevations
- [ ] MembershipView.vue - Check button elevations
- [ ] EventsView.vue - Verify card elevations
- [ ] BlogView.vue - Standardize card elevations
- [ ] ContactView.vue - Review form and card elevations
- [ ] DigitalOutreachView.vue - Check component elevations
- [ ] AppHeader.vue - Verify header elevation states
- [ ] AppFooter.vue - Check footer elevation
- [ ] BaseCard.vue - Confirm default elevation matches system
- [ ] ManagingCommitteeHierarchy.vue - Review card elevations
- [ ] CoreCommitteesStructure.vue - Check accordion elevations
- [ ] PastPresidentsGallery.vue - Verify image card elevations

### Hover States
- [ ] Add consistent hover elevation increase (elevation + 2)
- [ ] Ensure smooth transitions (300-400ms)
- [ ] Test hover states on all interactive elements

## Material You 3 Elevation Principles

1. **Purpose**: Elevation creates hierarchy and focus
2. **Consistency**: Use the defined scale consistently
3. **Transitions**: Animate elevation changes smoothly
4. **Accessibility**: Don't rely solely on elevation for meaning
5. **Performance**: Minimize overlapping high-elevation surfaces

## Testing

- [ ] Visual test all pages for elevation consistency
- [ ] Verify hover states increase elevation appropriately
- [ ] Test dark theme elevation (shadows may be subtle)
- [ ] Ensure no z-index conflicts
- [ ] Validate mobile elevation rendering

## References
- Material Design 3 Elevation: https://m3.material.io/styles/elevation/overview
- Vuetify 3 Elevation: https://vuetifyjs.com/en/styles/elevation/

## Last Updated
2025-10-31
