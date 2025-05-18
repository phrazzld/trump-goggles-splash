## Chosen Approach  
Use a reusable SectionAnimator component that wraps each section in Framer Motion variants for fade-in slide animations with viewport triggers, respects prefers-reduced-motion, and sprinkles extra StarDecoration accents.

## Rationale  
- Simplicity: One wrapper encapsulates all entrance logic—no per-section duplication.  
- Modularity: SectionAnimator is a standalone, typed TSX component; UI sections remain pure.  
- Testability: Variants and motion-preference logic are isolated and easily unit-tested.  
- Coding Standards: Adheres to Next.js/TS strictness, Framer Motion best practices, and our atomic-design structure.  
- Documentation: Self-documenting API plus a brief doc comment on non-obvious trade-offs.

## Build Steps  
1. Install and configure Framer Motion:  
   • `pnpm install framer-motion`  
   • Ensure `tsconfig.json` supports JSX and module resolution.

2. Create `components/shared/SectionAnimator.tsx`:  
   • Import `{ motion, useReducedMotion }`.  
   • Define `variants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }`.  
   • Use `const reduce = useReducedMotion()`; if `reduce`, set `variants.hidden = variants.visible = {}`.  
   • Export a `<motion.section>` that applies `initial="hidden"`, `whileInView="visible"`, `viewport={{ once: true, amount: 0.2 }}`, `transition={{ duration: 0.6 }}` and forwards `className` + `children`.

3. Refactor `app/page.tsx`:  
   Wrap each section:  
   ```tsx
   import SectionAnimator from "@/components/shared/SectionAnimator";
   export default function Home() {
     return (
       <main>
         <SectionAnimator><Hero/></SectionAnimator>
         <SectionAnimator><FeatureShowcase/></SectionAnimator>
         …  
       </main>
     );
   }
   ```

4. Hero initial-load tweak:  
   Inside `Hero.tsx`, wrap the inner content `<div>` in `<motion.div>` using the same variants and a mount-only `animate="visible"` so it animates on page load.

5. Accent StarDecoration animations (optional):  
   Wrap key `<StarDecoration>` instances in `<motion.div>` with a subtle `initial={{ scale:0.8, opacity:0 }}` → `animate={{ scale:1, opacity:1 }}` and `transition={{ duration:0.3, delay:0.2 }}`, respecting `useReducedMotion`.

6. Respect prefers-reduced-motion globally:  
   Ensure `useReducedMotion()` disables all transforms and opacity changes—fall back to static render.

7. Performance tuning:  
   Profile in Chrome DevTools; keep transitions ≤ 300 ms; limit simultaneous anims; use `once: true` to avoid re-animations; lazy-load heavy sections if needed.

8. Testing and validation:  
   • Unit test SectionAnimator renders correct attributes and variant selection with and without reduced motion.  
   • Integration test page snapshot with RTL; verify no motion errors.  
   • Manual/axe-core audit for accessibility and ensure keyboard/SSR hydration remain unaffected.