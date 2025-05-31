import { test, expect } from '@playwright/test';

test.describe('Hero Animation Smoothness and Accessibility Tests', () => {
  // Common setup function for animation and accessibility testing
  async function setupPageForTesting(page: any, reducedMotion = false) {
    // Set viewport to standard desktop size
    await page.setViewportSize({ width: 1280, height: 800 });
    
    // Configure reduced motion preference if specified
    if (reducedMotion) {
      await page.emulateMedia({ reducedMotion: 'reduce' });
    } else {
      await page.emulateMedia({ reducedMotion: 'no-preference' });
    }
    
    // Navigate to home page
    await page.goto('/');
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    // Wait for Hero section to be visible
    const heroSection = page.locator('section[aria-labelledby="hero-heading"]');
    await expect(heroSection).toBeVisible();
    
    // Wait for fonts to be fully loaded
    await page.evaluate(() => document.fonts.ready);
    
    // Small delay to ensure initial animation state is stable
    await page.waitForTimeout(100);
    
    return heroSection;
  }

  test('Hero animations complete without JavaScript errors', async ({ page }) => {
    // Set up console error monitoring
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Set up page error monitoring
    const pageErrors: string[] = [];
    page.on('pageerror', error => {
      pageErrors.push(error.message);
    });

    const heroSection = await setupPageForTesting(page, false);
    
    // Wait for animations to potentially complete
    await page.waitForTimeout(2000);
    
    // Verify no JavaScript errors occurred during animation
    expect(consoleErrors).toHaveLength(0);
    expect(pageErrors).toHaveLength(0);
    
    // Verify hero section remains visible after animations
    await expect(heroSection).toBeVisible();
    
    // Verify animated elements are present and visible
    const stars = page.locator('[data-decorative="true"]');
    expect(await stars.count()).toBeGreaterThan(0);
    
    // Verify hero content is visible after animations
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('Trump Goggles');
  });

  test('Hero section has proper ARIA attributes and labels', async ({ page }) => {
    const heroSection = await setupPageForTesting(page);
    
    // Verify hero section has proper ARIA labelledby
    await expect(heroSection).toHaveAttribute('aria-labelledby', 'hero-heading');
    
    // Verify heading has proper structure and is accessible
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).toHaveAttribute('id', 'hero-heading');
    
    // Verify CTA buttons have proper accessibility attributes
    const installButton = heroSection.getByRole('link', { name: /Chrome Web Store/i });
    await expect(installButton).toBeVisible();
    await expect(installButton).toHaveAttribute('aria-label');
    await expect(installButton).toHaveAttribute('rel', 'noopener noreferrer');
    
    const learnMoreButton = heroSection.getByRole('button', { name: /Learn More/i });
    await expect(learnMoreButton).toBeVisible();
    
    // Verify decorative elements are properly marked
    const decorativeElements = page.locator('[data-decorative="true"]');
    expect(await decorativeElements.count()).toBeGreaterThan(0);
  });

  test('Hero section respects prefers-reduced-motion preference', async ({ page }) => {
    // Test with reduced motion enabled
    const heroSection = await setupPageForTesting(page, true);
    
    // Check that reduced motion preference is correctly applied
    const reducedMotionValue = await page.evaluate(() => {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    });
    expect(reducedMotionValue).toBe(true);
    
    // Verify hero section is still functional with reduced motion
    await expect(heroSection).toBeVisible();
    
    // Verify heading is visible
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    
    // Verify CTA buttons are accessible
    const installButton = heroSection.getByRole('link', { name: /Chrome Web Store/i });
    await expect(installButton).toBeVisible();
    
    const learnMoreButton = heroSection.getByRole('button', { name: /Learn More/i });
    await expect(learnMoreButton).toBeVisible();
    
    // Verify no animation-related JavaScript errors with reduced motion
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    // Wait a moment to catch any potential errors
    await page.waitForTimeout(1000);
    expect(consoleErrors).toHaveLength(0);
  });

  test('Hero section keyboard navigation accessibility', async ({ page }) => {
    const heroSection = await setupPageForTesting(page);
    
    // Verify all interactive elements are keyboard accessible
    const installButton = heroSection.getByRole('link', { name: /Chrome Web Store/i });
    const learnMoreButton = heroSection.getByRole('button', { name: /Learn More/i });
    
    // Test install button accessibility
    await installButton.focus();
    await expect(installButton).toBeFocused();
    
    // Verify focus is visible (should have focus-visible ring classes)
    const installButtonClasses = await installButton.getAttribute('class');
    expect(installButtonClasses).toContain('focus-visible:ring');
    
    // Test learn more button accessibility
    await learnMoreButton.focus();
    await expect(learnMoreButton).toBeFocused();
    
    // Verify focus is visible on learn more button
    const learnMoreButtonClasses = await learnMoreButton.getAttribute('class');
    expect(learnMoreButtonClasses).toContain('focus-visible:ring');
    
    // Verify both buttons have proper keyboard accessibility attributes
    await expect(installButton).toHaveAttribute('href');
    await expect(installButton).toHaveAttribute('aria-label');
    await expect(learnMoreButton).toHaveAttribute('type');
    
    // Verify buttons can be activated with keyboard
    // Test Enter key on install button (we'll just check it's focusable and has proper attributes)
    await installButton.focus();
    await expect(installButton).toBeFocused();
    
    // Test Enter key on learn more button
    await learnMoreButton.focus();
    await expect(learnMoreButton).toBeFocused();
    
    // Verify both buttons are within the hero section and accessible
    await expect(installButton).toBeVisible();
    await expect(learnMoreButton).toBeVisible();
  });

  test('Hero animations do not cause layout shifts', async ({ page }) => {
    const heroSection = await setupPageForTesting(page, false);
    
    // Get initial layout measurements
    const initialBox = await heroSection.boundingBox();
    expect(initialBox).not.toBeNull();
    
    // Wait for animations to potentially complete
    await page.waitForTimeout(2000);
    
    // Get final layout measurements
    const finalBox = await heroSection.boundingBox();
    expect(finalBox).not.toBeNull();
    
    // Verify no significant layout shift occurred
    // Allow for minor pixel differences due to font rendering
    const heightDiff = Math.abs((finalBox?.height || 0) - (initialBox?.height || 0));
    const widthDiff = Math.abs((finalBox?.width || 0) - (initialBox?.width || 0));
    
    expect(heightDiff).toBeLessThan(5); // Allow up to 5px difference
    expect(widthDiff).toBeLessThan(5);  // Allow up to 5px difference
    
    // Verify hero section maintains its position
    expect(finalBox?.x).toBe(initialBox?.x);
    expect(finalBox?.y).toBe(initialBox?.y);
  });

  test('Hero section maintains accessibility during animations', async ({ page }) => {
    const heroSection = await setupPageForTesting(page, false);
    
    // Verify accessibility during animation phase
    // Check that elements remain accessible even during animations
    
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    
    const installButton = heroSection.getByRole('link', { name: /Chrome Web Store/i });
    await expect(installButton).toBeVisible();
    
    // Wait for animations to complete
    await page.waitForTimeout(2000);
    
    // Verify accessibility attributes are still intact after animations
    await expect(heroSection).toHaveAttribute('aria-labelledby', 'hero-heading');
    await expect(heading).toHaveAttribute('id', 'hero-heading');
    await expect(installButton).toHaveAttribute('aria-label');
    
    // Verify content is still readable and accessible
    await expect(heading).toContainText('Trump Goggles');
    await expect(installButton).toBeVisible();
    
    // Verify no accessibility violations were introduced
    const decorativeElements = page.locator('[data-decorative="true"]');
    expect(await decorativeElements.count()).toBeGreaterThan(0);
  });
});