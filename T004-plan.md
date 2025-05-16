# T004 - Set Up Custom Fonts Using Next/Font

## Objective
Configure Google Fonts (Playfair Display, Inter, Courier Prime) using Next.js font optimization and assign them to CSS variables for use with Tailwind.

## Fonts Required
1. Playfair Display - For display/headings 
2. Inter - For body text
3. Courier Prime - For accent/monospace text

## Implementation Approach
1. Import fonts using `next/font/google`
2. Configure each font with appropriate settings
3. Apply font CSS variables to the root element
4. Variables will be:
   - `--font-playfair`
   - `--font-inter`  
   - `--font-courier`

## Integration
These CSS variables align with the Tailwind font configuration already set up in T003.