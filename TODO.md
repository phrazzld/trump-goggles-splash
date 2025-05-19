# TODO: Trump Goggles Splash Page Enhancement

## 🎯 Mission
Transform the minimal splash page into a professional, engaging, and accurate landing experience that properly showcases the Trump Goggles extension.

---

## Phase 1: Typography Foundation

- [x] **T001 · Feature · P0: Typography Overhaul**
    - Select & implement bold display fonts (Ultra/Impact/Playfair Display Black)
    - Configure body font (Inter) using `next/font` for optimal loading
    - Update `tailwind.config.ts` with semantic font names
    - Apply typography globally for consistent hierarchy
    - **Done-when:** Fonts render correctly across all breakpoints without layout shifts
    - **Depends-on:** none

- [x] **T002 · Feature · P1: Create SectionHeading Component**
    - Build `app/components/shared/SectionHeading.tsx`
    - Accept semantic heading level prop (h1-h6)
    - Apply retro Americana styling with display fonts
    - **Done-when:** Component renders with correct semantic tag and styling
    - **Depends-on:** [T001]

- [x] **T003 · Feature · P1: Create ExternalLink Component**
    - Build `app/components/shared/ExternalLink.tsx`
    - Include `rel="noopener noreferrer"` and `target="_blank"`
    - Support button variant (using RetroButton) and text variant
    - **Done-when:** Links open securely in new tabs
    - **Depends-on:** [T001]

---

## Phase 2: Hero Section Fix

- [x] **T004 · Feature · P0: Fix Hero Description & Add Chrome Store CTA**
    - Update description to: "Translates text to Trumpisms (e.g., 'ISIS' → 'Evil Losers', 'Hillary Clinton' → 'Crooked Hillary')"
    - Add Chrome Store button using ExternalLink
    - URL: `https://chromewebstore.google.com/detail/trump-goggles/jffbimfdmgbfannficjejaffmnggoigd`
    - Apply enhanced typography and visual impact
    - **Done-when:** Hero shows accurate description with functional Chrome Store button
    - **Depends-on:** [T001, T003]

---

## Phase 3: Content Sections

- [x] **T005 · Feature · P1: Build FeatureShowcase Section**
    - Create `app/components/sections/FeatureShowcase.tsx`
    - Show before/after translation comparisons using TexturedCards
    - Clear explanation of how the extension works
    - **Done-when:** Visual demonstrations clearly explain functionality
    - **Depends-on:** [T002]

- [x] **T006 · Feature · P1: Build TrumpismExamples Section**
    - Create `app/components/sections/TrumpismExamples.tsx`
    - Display 4-6 iconic Trumpism translations in grid layout
    - Examples:
        - "ISIS" → "Evil Losers"
        - "Hillary Clinton" → "Crooked Hillary"
        - "Climate Change" → "The Chinese Hoax"
        - "The Media" → "Fake News"
        - "North Korea" → "Rocket Man"
        - "Trade Deficit" → "Terrible Trade Deals"
    - **Done-when:** Grid of examples showcases extension's personality
    - **Depends-on:** [T002]

- [x] **T007 · Feature · P1: Build InstallationGuide Section**
    - Create `app/components/sections/InstallationGuide.tsx`
    - Clear step-by-step installation instructions
    - Prominent Chrome Store link
    - GitHub repository link: `https://github.com/phrazzld/trump-goggles`
    - **Done-when:** Users can easily find and follow installation steps
    - **Depends-on:** [T002, T003]

- [x] **T008 · Feature · P1: Build Footer Section**
    - Create/enhance `app/components/sections/Footer.tsx`
    - Add GitHub repository link
    - Include copyright notice
    - Add brief disclaimer if needed
    - **Done-when:** Footer contains all required links and legal text
    - **Depends-on:** [T003]

---

## Phase 4: Page Assembly & Polish

- [x] **T009 · Feature · P0: Assemble All Sections on Main Page**
    - Import all new sections into `app/page.tsx`
    - Arrange in logical order: Hero → FeatureShowcase → TrumpismExamples → InstallationGuide → Footer
    - **Done-when:** Full splash page renders with all sections
    - **Depends-on:** [T004, T005, T006, T007, T008]

- [x] **T010 · Feature · P1: Add Entrance Animations**
    - Implement subtle Framer Motion animations
    - Ensure all animations respect `prefers-reduced-motion`
    - Add StarDecoration elements throughout sections
    - **Done-when:** Sections animate smoothly on scroll/load
    - **Depends-on:** [T009]

- [x] **T011 · Feature · P0: Accessibility & Responsive Design**
    - Ensure WCAG 2.1 AA compliance
    - Test keyboard navigation and focus states
    - Verify responsive layout at all breakpoints (mobile → desktop)
    - **Done-when:** Page is fully accessible and responsive
    - **Depends-on:** [T009]

---

## Phase 5: Testing & QA

- [ ] **T012 · Test · P1: Unit Tests for Shared Components**
    - Test ExternalLink component (security attributes, variants)
    - Test SectionHeading component (semantic tags, props)
    - **Done-when:** 90%+ coverage on shared components
    - **Depends-on:** [T002, T003]

- [ ] **T013 · Test · P1: Create Storybook Stories**
    - Stories for all shared components (SectionHeading, ExternalLink)
    - Stories for section components (FeatureShowcase, TrumpismExamples, etc.)
    - Include accessibility checks
    - **Done-when:** All components documented in Storybook
    - **Depends-on:** [T002, T003, T005, T006, T007, T008]

- [ ] **T014 · Test · P0: E2E Tests for Critical User Flows**
    - Test Chrome Store link functionality
    - Test GitHub link functionality
    - Verify responsive layouts
    - Test accessibility compliance
    - **Done-when:** E2E tests cover all critical paths
    - **Depends-on:** [T009]

---

## 🔍 Critical URLs
- Chrome Web Store: `https://chromewebstore.google.com/detail/trump-goggles/jffbimfdmgbfannficjejaffmnggoigd`
- GitHub Repository: `https://github.com/phrazzld/trump-goggles`

## ✅ Success Criteria
- [x] Extension description accurately states "translates text to Trumpisms"
- [x] Chrome Web Store link prominently displayed and functional
- [x] GitHub repository link in footer
- [x] Bold, attention-grabbing typography throughout
- [x] Page feels professionally designed and "full"
- [x] All sections responsive and accessible
- [x] Consistent retro Americana aesthetic maintained

## 🚨 Critical Fixes
1. ~~Update Hero description~~ - FIXED
2. ~~Add Chrome Web Store link~~ - FIXED
3. ~~Add GitHub repository link~~ - FIXED
4. ~~Implement bold typography~~ - FIXED