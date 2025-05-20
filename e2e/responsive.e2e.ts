import { test, expect } from '@playwright/test';

test.describe('Responsive layouts', () => {
  // Test critical responsive elements at mobile viewport
  test('Mobile responsive layout', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Verify hero section is visible and properly formatted on mobile
    const heroSection = page.locator('section').filter({ hasText: /Trump Goggles/i }).first();
    await expect(heroSection).toBeVisible();
    
    // Verify the Chrome Store button is appropriately sized for mobile
    const chromeStoreButton = page.getByRole('link', { name: /chrome/i }).first();
    await expect(chromeStoreButton).toBeVisible();
    
    // Check that content sections are stacked vertically on mobile
    // For example, feature showcase section
    const featureSection = page.locator('section').filter({ hasText: /Features/i }).first();
    if (await featureSection.isVisible()) {
      const featureBox = await featureSection.boundingBox();
      expect(featureBox?.width).toBeLessThanOrEqual(375);
    }
    
    // Verify the navigation doesn't overflow horizontally
    const body = page.locator('body');
    const bodyBox = await body.boundingBox();
    expect(bodyBox?.width).toBeLessThanOrEqual(375);
    
    // No horizontal scrollbar should appear
    const html = page.locator('html');
    await expect(html).not.toHaveCSS('overflow-x', 'scroll');
    await expect(html).not.toHaveCSS('overflow-x', 'auto');
  });
  
  // Test critical responsive elements at desktop viewport
  test('Desktop responsive layout', async ({ page }) => {
    // Set viewport to desktop size
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    
    // Verify hero section is visible and properly formatted on desktop
    const heroSection = page.locator('section').filter({ hasText: /Trump Goggles/i }).first();
    await expect(heroSection).toBeVisible();
    
    // Verify sections have appropriate desktop layout spacing
    // Example: Check that the feature section has reasonable desktop width
    const featureSection = page.locator('section').filter({ hasText: /Features/i }).first();
    if (await featureSection.isVisible()) {
      const featureBox = await featureSection.boundingBox();
      expect(featureBox?.width).toBeGreaterThan(900);
    }
  });
  
  // Test that content is readable at various screen sizes
  test('Content readability at different screen sizes', async ({ page }) => {
    // Test tablet size
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    
    // Check that main heading is appropriately sized
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    
    // Test that paragraph text is visible and readable
    const paragraphs = page.locator('p');
    const firstParagraph = paragraphs.first();
    await expect(firstParagraph).toBeVisible();
    
    // Compute style to ensure text isn't too small
    const fontSize = await firstParagraph.evaluate((el) => {
      return window.getComputedStyle(el).fontSize;
    });
    
    // Convert font size to number (remove 'px')
    const fontSizeValue = parseFloat(fontSize);
    expect(fontSizeValue).toBeGreaterThanOrEqual(14);
  });
});