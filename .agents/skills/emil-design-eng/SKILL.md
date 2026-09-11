---
name: emil-design-eng
description: Design engineering excellence inspired by Emil Kowalski. Fluid spring physics, layout animations, micro-interactions, optical hierarchy, and tactile feedback.
---

# Emil Design Engineering Skill (emil-design-eng)

## Core Philosophy
- **Fluid Spring Physics over Easing Curves**: Use spring physics (`type: "spring", stiffness: 400, damping: 30` or `bounce: 0.15, duration: 0.5`) rather than linear or abrupt transitions.
- **Micro-Interactions**: Every actionable element (buttons, cards, pills, tabs) must provide immediate tactile feedback (`whileHover={{ scale: 1.02 }}`, `whileTap={{ scale: 0.97 }}`).
- **Layout Animations**: When state changes (e.g. switching tabs, filtering items, opening accordions), use `layout` and `layoutId` from `motion/react` to morph positions seamlessly without jarring jumps.
- **Optical Balance & Craft**:
  - Consistent border radii (`rounded-2xl`, `rounded-3xl`).
  - Subtle borders (`border-slate-200/80`, `shadow-sm` transitioning to `shadow-xl` with border highlights).
  - High-contrast typography paired with generous negative space.
  - Zero layout shifts (CLS = 0) during async operations or interactive expansions.
- **AnimatePresence for Modals & Drawers**: Modals must fade and scale smoothly with backdrop blur (`backdrop-blur-md`, `initial={{ opacity: 0, scale: 0.95 }}`, `animate={{ opacity: 1, scale: 1 }}`).
