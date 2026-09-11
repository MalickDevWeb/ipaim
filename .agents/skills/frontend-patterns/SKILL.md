---
name: frontend-patterns
description: Modern React 19 architecture patterns, clean state lifting, resilient TypeScript typings, component composition, and responsive design systems.
---

# Frontend Architecture Patterns (frontend-patterns)

## Core Guidelines
- **Strict Separation of Concerns**: Clear split between presentation components, logic hooks, and centralized data layers (`src/data/campusData.ts`, `src/types.ts`).
- **Smooth Layout Transitions**: Leverage React functional components with `motion/react` for zero-friction user journeys.
- **Resilient State Management**: Explicit prop callbacks, no uncontrolled side-effects in `useEffect`, clean modal lifecycle management.
- **Mobile-First & Touch Optimization**: Minimum 44px touch targets on interactive controls, hidden scrollbars (`no-scrollbar`) with native touch momentum, zero horizontal overflow.
- **Accessible UX**: Semantic HTML, proper ARIA states for expanded/collapsed sections, readable contrast adhering to WCAG AA.
