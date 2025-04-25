# Component Structure

This project follows Atomic Design principles for organizing components:

## Atoms

Basic building blocks of the interface:

- Typography components
- Icons
- Basic form elements
- Basic buttons
- Basic media elements

## Molecules

Combinations of atoms that form distinct functional units:

- Form groups
- Navigation items
- Data display components
- Feedback components
- Basic modals

## Organisms

Complex UI components composed of molecules and atoms:

- Complex forms
- Navigation bars
- Tables
- Carousels
- Complex modals
- Charts

## Templates

Page layouts and structural components:

- Layout components
- Section components
- Overlays

## Pages

Complete pages with all necessary data and functionality:

- Full page components
- Page-specific layouts
- Complete user flows

## Component Naming Convention

- Use PascalCase for component names
- Use kebab-case for file names
- Include `.stories.tsx` for Storybook files
- Include `.test.tsx` for test files
- Include `.styles.ts` for styled-components files (if used)

## Storybook Organization

Each component should have its corresponding Storybook file with:

- Clear component description
- Props documentation
- Usage examples
- Variants and states
- Accessibility information
