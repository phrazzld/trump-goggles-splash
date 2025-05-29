# Task Description

## Issue Details
**Issue #27**: make hero section nicer, cleaner, smoother  
**URL**: https://github.com/phrazzld/trump-goggles-splash/issues/27

## Overview
The hero section has several UI/UX issues that need addressing to improve the overall user experience. The current implementation has jerky animations, layout problems, and visual inconsistencies that detract from the professional appearance of the landing page.

## Requirements
Based on the issue description, the following specific problems need to be resolved:

1. **Animation Issues**:
   - Opening/intro animation is jerky and rough
   - Stars start in wrong positions and snap too hard to static positions
   - Animation needs complete reimagining or potential removal

2. **Layout Issues**:
   - Background is not full height/width, creating awkward visual gaps
   - Overall layout and positioning inconsistencies

3. **General Polish**:
   - Various small UI/UX tweaks needed to improve design quality
   - Need to ensure smooth, professional user experience

## Technical Context
- Project uses Next.js 15 with App Router
- Styling with Tailwind CSS v4 and custom retro theme
- Animations currently implemented with Framer Motion
- Hero component located at `app/components/Hero.tsx`
- Related components: `AnimatedStar`, `StarDecoration`, `AnimatedSection`
- Design system follows retro Americana theme (red, blue, cream, gold, black)

## Related Issues
- This connects to the overall project goal of creating a polished, professional splash page
- May relate to future animation and micro-interaction improvements mentioned in other issues
- Could impact the general user experience improvements discussed in UX-focused issues

## Labels
- priority:high
- domain:ui
- domain:ux  
- type:enhancement