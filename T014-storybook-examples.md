# ExternalLink Component Manual Testing in Storybook

## Text Variant Tests

### Basic Text Variant
```jsx
<ExternalLink href="https://example.com">Example Link</ExternalLink>
```
**Expected Behavior:**
- Renders as an anchor tag with the correct href
- Shows "Example Link" as text
- External link icon appears after the text
- Has text-retro-blue class for styling
- Has underline class
- Has hover:text-retro-red class
- Has transition-colors class
- Has focus styles (focus-visible:outline-none, focus-visible:ring-2, etc.)

### Text Variant with Data Attributes
```jsx
<ExternalLink 
  href="https://example.com" 
  data-testid="test-link" 
  id="link-id"
  data-cy="cypress-test"
>
  Test Attributes
</ExternalLink>
```
**Expected Behavior:**
- All data attributes are correctly applied to the anchor element
- No unexpected attributes appear on the element or its children

### Text Variant with Accessibility Attributes
```jsx
<ExternalLink 
  href="https://example.com" 
  ariaLabel="This is a descriptive label for screen readers"
>
  Accessible Link
</ExternalLink>
```
**Expected Behavior:**
- aria-label attribute is correctly applied to the anchor element
- Screen readers would read "This is a descriptive label for screen readers" instead of "Accessible Link"

### Text Variant with Custom Class
```jsx
<ExternalLink 
  href="https://example.com" 
  className="custom-class font-bold"
>
  Custom Styled Link
</ExternalLink>
```
**Expected Behavior:**
- Custom class is correctly merged with default classes
- Both default styles and custom styles are applied
- No style conflicts occur

## Button Variant Tests

### Basic Button Variant
```jsx
<ExternalLink 
  href="https://example.com" 
  variant="button"
>
  Button Link
</ExternalLink>
```
**Expected Behavior:**
- Renders as an anchor tag containing a RetroButton component
- Anchor has the correct href
- RetroButton shows "Button Link" as text
- Anchor has focus styles, not the button
- Default button variant is used

### Button Variant with Anchor Attributes
```jsx
<ExternalLink 
  href="https://example.com" 
  variant="button"
  id="button-link-id"
  data-testid="button-link-test"
>
  Button with Attributes
</ExternalLink>
```
**Expected Behavior:**
- id and data-testid attributes are applied to the anchor element, not the button
- Can locate the element using the data-testid attribute
- No unexpected attributes appear on the button element

### Button Variant with Button Props
```jsx
<ExternalLink 
  href="https://example.com" 
  variant="button"
  buttonProps={{
    variant: 'secondary',
    size: 'lg',
    className: 'custom-button-class'
  }}
>
  Custom Button
</ExternalLink>
```
**Expected Behavior:**
- buttonProps are correctly passed to the RetroButton component
- RetroButton has the secondary variant styling
- RetroButton has large size styling
- RetroButton has custom class applied
- No buttonProps leaking to the anchor element

### Button Variant with Mixed Properties
```jsx
<ExternalLink 
  href="https://example.com" 
  variant="button"
  id="mixed-id"
  data-testid="mixed-test"
  className="custom-anchor-class"
  buttonProps={{
    variant: 'secondary',
    size: 'sm',
    className: 'custom-button-class'
  }}
  ariaLabel="Mixed properties link"
>
  Mixed Properties
</ExternalLink>
```
**Expected Behavior:**
- All anchor attributes (id, data-testid, className) are on the anchor element
- All button properties are on the button element
- aria-label is correctly applied to the anchor
- Custom class is applied to the anchor, not the button
- Button has its own custom class
- No attribute leaking between elements

## DOM Inspection Tests

When inspecting the DOM structure in the browser:

### Text Variant DOM Structure
```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer" class="text-retro-blue underline hover:text-retro-red transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-retro-blue focus-visible:ring-offset-2 focus-visible:ring-offset-retro-cream">
  Example Link
  <svg class="lucide-external-link inline" aria-hidden="true" ...>...</svg>
  <span class="sr-only">(opens in new tab)</span>
</a>
```

### Button Variant DOM Structure
```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-retro-blue focus-visible:ring-offset-2 focus-visible:ring-offset-retro-cream">
  <button class="...button-classes...">Button Link</button>
</a>
```

These DOM structures should be verified to ensure no unexpected attributes are present.