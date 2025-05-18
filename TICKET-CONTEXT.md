# Plan Details

# Trump Goggles Splash Page Enhancement Plan

## Objective
Transform the existing minimal splash page into a comprehensive, engaging landing experience that accurately represents the Trump Goggles extension, corrects the functionality description, adds essential links, and dramatically improves the design quality.

## Chosen Approach (One-liner)
Incrementally enhance the existing Next.js/Tailwind/Framer Motion splash page by adding required content sections, refining typography, correcting information, and integrating links, adhering strictly to the Retro Americana theme and Atomic Design principles.

## Architecture Blueprint

### Components Structure (Atomic Design)

**Existing Components to Enhance:**
- `Hero.tsx` - Needs accurate description, Chrome Store link, typography improvements
- `RetroButton.tsx` - Already implemented, will be leveraged
- `StarDecoration.tsx` - Already implemented, will be used extensively
- `TexturedCard.tsx` - Already implemented, will be used for content sections

**New Components to Create:**
- `shared/SectionHeading.tsx` - Consistent section headers with retro styling
- `shared/ExternalLink.tsx` - Styled external links with security attributes
- `sections/FeatureShowcase.tsx` - Visual demonstration of Trumpism translations
- `sections/TrumpismExamples.tsx` - Grid of popular translations
- `sections/InstallationGuide.tsx` - Clear installation steps with links
- `sections/SocialProof.tsx` - User testimonials (if content available)
- `sections/Footer.tsx` - Enhanced footer with GitHub link

### Critical URLs to Integrate
- Chrome Web Store: `https://chromewebstore.google.com/detail/trump-goggles/jffbimfdmgbfannficjejaffmnggoigd`
- GitHub Repository: `https://github.com/phrazzld/trump-goggles`

## Implementation Steps

### Phase 1: Typography & Foundation

1. **Typography Overhaul**
   - Select bold display fonts (e.g., Ultra, Impact, or heavy serif like Playfair Display Black)
   - Implement using `next/font` for optimal loading
   - Configure in `tailwind.config.ts` with semantic names
   - Apply globally for consistent hierarchy

2. **Create Core Shared Components**
   - `SectionHeading.tsx` - Configurable semantic headings with retro styling
   - `ExternalLink.tsx` - Secure external links with button/text variants

### Phase 2: Hero Section Enhancement

3. **Correct Functionality Description**
   - Update to: "Translates text to Trumpisms (e.g., 'ISIS' → 'Evil Losers', 'Hillary Clinton' → 'Crooked Hillary')"
   - Add Chrome Web Store CTA button using `ExternalLink`
   - Enhance visual impact with better typography and decorations

### Phase 3: Content Sections

4. **FeatureShowcase Section**
   - Create before/after visual comparisons
   - Use TexturedCards to demonstrate translations
   - Clear explanation of extension functionality

5. **TrumpismExamples Section**
   - Grid of 4-6 popular translations
   - Each example in a TexturedCard
   - Showcase the extension's humor and personality

6. **InstallationGuide Section**
   - Step-by-step installation instructions
   - Prominent Chrome Store and GitHub links
   - Optional screenshots or visual aids

7. **Footer Enhancement**
   - Add GitHub repository link
   - Copyright notice
   - Brief disclaimer if needed

### Phase 4: Polish & Animation

8. **Visual Enhancements**
   - Subtle entrance animations with Framer Motion
   - Ensure all animations respect `prefers-reduced-motion`
   - Add more StarDecoration elements throughout
   - Implement consistent spacing and visual rhythm

9. **Accessibility & Responsive Design**
   - WCAG 2.1 AA compliance
   - Keyboard navigation support
   - Focus states for all interactive elements
   - Test across all breakpoints

## Testing Strategy

### Test Types
- **Unit Tests**: Core shared components (ExternalLink, SectionHeading)
- **Component Tests**: Section components in isolation
- **Visual Tests**: Storybook for all shared components
- **E2E Tests**: Critical user flows and link verification

### Key Test Cases
- Chrome Store link functionality
- GitHub link functionality
- Responsive layout at all breakpoints
- Accessibility compliance
- Content accuracy

## Risk Matrix

| Risk | Severity | Mitigation |
|------|----------|------------|
| Typography choices clash with theme | Medium | Iterate with preview, prioritize readability |
| Page becomes visually cluttered | Medium | Follow atomic design, use whitespace effectively |
| Performance impact from animations | Low | Optimize all assets, profile performance |
| Content unavailable for examples | Low | Prepare fallback content or placeholders |

## Typography Recommendations

### Display Fonts (Headlines)
- Primary: Ultra or Impact (for maximum Trump energy)
- Secondary: Playfair Display Black or similar heavy serif
- Fallback: System UI bold fonts

### Body Fonts
- Primary: Inter or similar clean sans-serif
- Accent: Courier Prime for specific elements

## Example Trumpisms to Feature
1. "ISIS" → "Evil Losers"
2. "Hillary Clinton" → "Crooked Hillary"
3. "Climate Change" → "The Chinese Hoax"
4. "The Media" → "Fake News"
5. "North Korea" → "Rocket Man"
6. "Trade Deficit" → "Terrible Trade Deals"

## Success Criteria
- [ ] Accurate extension description ("translates text to Trumpisms")
- [ ] Chrome Web Store link prominently displayed
- [ ] GitHub repository link in footer
- [ ] Bold, attention-grabbing typography
- [ ] Page feels "full" and professionally designed
- [ ] All sections responsive and accessible
- [ ] Maintains retro Americana aesthetic throughout

## Task Breakdown Requirements
- Create atomic, independent tasks
- Ensure proper dependency mapping
- Include verification steps
- Follow project task ID and formatting conventions
