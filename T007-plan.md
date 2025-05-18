# T007: Build InstallationGuide Section - Implementation Plan

## Task Overview
Create an InstallationGuide section component that provides clear step-by-step installation instructions with prominent links to the Chrome Store and GitHub repository.

## Requirements
- Create `app/components/sections/InstallationGuide.tsx`
- Clear step-by-step installation instructions
- Prominent Chrome Store link
- GitHub repository link: `https://github.com/phrazzld/trump-goggles`
- Users can easily find and follow installation steps

## Implementation Approach

### Component Structure
- Use SectionHeading for the section title
- Use ExternalLink for Chrome Store and GitHub links
- Present instructions in a numbered list format
- Use visual emphasis for important actions

### Key Features
1. Step-by-step numbered instructions
2. Chrome Store link as primary CTA
3. GitHub link for developers/source code
4. Visual hierarchy for easy scanning
5. Responsive design considerations

### Design Decisions
- Clear numbered steps (1-2-3 format)
- Prominent button for Chrome Store
- Secondary link for GitHub
- Use cards or visual containers for each step
- Add icons or visual cues where appropriate

### Content Structure
1. Click the Install button to go to Chrome Web Store
2. Click "Add to Chrome" on the extension page
3. Confirm installation when prompted
4. Start browsing and see the translations!

## Testing Considerations
- Verify ExternalLink usage for both links
- Ensure proper accessibility for instructions
- Test responsive layout
- Validate links open correctly