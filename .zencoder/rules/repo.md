---
description: Repository Information Overview
alwaysApply: true
---

# Portfolio Website Information

## Summary

A personal portfolio website built with Next.js 15, React 19, and TailwindCSS 4. The site showcases a cybersecurity specialist's professional information with a modern, animated UI featuring a gradient design theme.

## Structure

- **app/**: Next.js app router directory containing page components and global styles
- **components/**: Reusable UI components using a component library pattern
- **compontes/**: Contains the main Hero component (note: likely a typo of "components")
- **lib/**: Utility functions and shared code
- **public/**: Static assets including SVG icons

## Language & Runtime

**Language**: TypeScript
**Version**: TypeScript 5.x
**Build System**: Next.js with Turbopack
**Package Manager**: npm

## Dependencies

**Main Dependencies**:

- Next.js 15.5.2 (React framework)
- React 19.1.0 (UI library)
- React DOM 19.1.0
- Radix UI (React Slot 1.2.3)
- class-variance-authority 0.7.1 (Component styling utility)
- clsx 2.1.1 (Class name utility)
- lucide-react 0.542.0 (Icon library)
- tailwind-merge 3.3.1 (TailwindCSS utility)

**Development Dependencies**:

- TypeScript 5.x
- ESLint 9.x with Next.js configuration
- TailwindCSS 4.x
- tw-animate-css 1.3.8 (Animation utilities)
- Type definitions for Node.js, React, and React DOM

## Build & Installation

```bash
# Install dependencies
npm install

# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Main Files

**Entry Points**:

- app/layout.tsx (Root layout with font configuration)
- app/page.tsx (Main page component)
- compontes/Hero.tsx (Hero section with personal information)

**Configuration**:

- next.config.ts (Next.js configuration)
- tsconfig.json (TypeScript configuration)
- postcss.config.mjs (PostCSS configuration for TailwindCSS)
- components.json (Component configuration)

## UI Components

**Component Library**:

- components/ui/button.tsx (Button component with variants)
- components/ui/badge.tsx (Badge component with variants)
- lib/utils.ts (Utility functions for class name management)
