# Task: T001 - Typography Overhaul

## Task ID
T001

## Title
Typography Overhaul

## Original Ticket Text
- [~] **T001 · Feature · P0: Typography Overhaul**
    - Select & implement bold display fonts (Ultra/Impact/Playfair Display Black)
    - Configure body font (Inter) using `next/font` for optimal loading
    - Update `tailwind.config.ts` with semantic font names
    - Apply typography globally for consistent hierarchy
    - **Done-when:** Fonts render correctly across all breakpoints without layout shifts
    - **Depends-on:** none

## Implementation Approach Analysis Prompt

You are an expert frontend developer tasked with implementing a typography overhaul for a retro Americana-themed splash page. The goal is to replace weak typography with bold, attention-grabbing fonts that match the Trump Goggles extension's personality.

### Context
- The page currently has weak typography that doesn't match the bold personality of the extension
- Need to implement a retro Americana design with strong display fonts
- Using Next.js 15, Tailwind CSS, and TypeScript
- Must follow atomic design principles and the development philosophy

### Requirements
1. Select and implement bold display fonts (Ultra, Impact, or Playfair Display Black suggested)
2. Implement a clean body font (Inter) using next/font for optimal loading
3. Configure fonts in tailwind.config.ts with semantic names
4. Apply typography globally with consistent hierarchy

### Key Considerations
- Font performance is critical - use next/font for optimal loading
- Typography must be responsive and render without layout shifts
- Follow semantic naming (font-display, font-body, etc.)
- Ensure accessibility with proper font sizes and weights
- Maintain the retro Americana aesthetic throughout

### Technical Constraints
- Must use next/font for font loading
- Configure through Tailwind for consistency
- TypeScript strict mode
- Follow frontend development philosophy

### Deliverables
1. Font selection and implementation
2. Tailwind configuration updates
3. Global typography application
4. Type-safe implementation

Please provide a comprehensive implementation plan that addresses all requirements while following best practices for performance, accessibility, and maintainability.