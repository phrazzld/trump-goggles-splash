# T008 - Add Custom Tailwind Utility Classes

## Objective
Add three custom utility classes to support the Retro Americana design:
1. Text shadow for vintage effect
2. Double border for retro style
3. Paper texture pattern

## Implementation Approach
1. Add utility classes under @layer utilities in app/globals.css
2. Define .text-shadow-vintage with specific shadow values
3. Define .border-double-retro with double border style
4. Define .texture-paper with CSS gradient pattern (matching the one already defined as CSS variable)

## Classes to Add
1. `.text-shadow-vintage`: 2px 2px 4px shadow with 0.1 opacity
2. `.border-double-retro`: 3px double border using currentColor
3. `.texture-paper`: Uses the same gradient pattern as --texture-paper variable

## Note
These utilities will be essential for RetroButton and other components requiring vintage styling.