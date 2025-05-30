import { test, expect } from '@playwright/test';

test.describe('Hero Visual Regression Tests', () => {
  // Common setup function for all visual regression tests
  async function setupPageForVisualTesting(page: any, viewportWidth: number, viewportHeight: number) {
    // Set viewport to specified size
    await page.setViewportSize({ width: viewportWidth, height: viewportHeight });
    
    // Navigate to home page
    await page.goto('/');
    
    // Disable animations for consistent screenshots by setting reduced motion preference
    await page.emulateMedia({ reducedMotion: 'reduce' });
    
    // Add CSS to disable all animations and transitions
    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
        }
      `
    });
    
    // Wait for page to be fully loaded including fonts and images
    await page.waitForLoadState('networkidle');
    
    // Wait for Hero section to be visible
    const heroSection = page.locator('section[aria-labelledby="hero-heading"]');
    await expect(heroSection).toBeVisible();
    
    // Wait for fonts to be fully loaded
    await page.evaluate(() => document.fonts.ready);
    
    // Additional delay to ensure layout is completely stable
    await page.waitForTimeout(500);
    
    return heroSection;
  }

  test('Hero visual regression - Mobile (375px)', async ({ page }) => {
    // Setup page for mobile viewport
    const heroSection = await setupPageForVisualTesting(page, 375, 667);
    
    // Take screenshot of Hero section only
    await expect(heroSection).toHaveScreenshot('hero-mobile-375px.png');
  });

  test('Hero visual regression - Tablet (768px)', async ({ page }) => {
    // Setup page for tablet viewport  
    const heroSection = await setupPageForVisualTesting(page, 768, 1024);
    
    // Take screenshot of Hero section only
    await expect(heroSection).toHaveScreenshot('hero-tablet-768px.png');
  });

  test('Hero visual regression - Desktop (1280px)', async ({ page }) => {
    // Setup page for desktop viewport
    const heroSection = await setupPageForVisualTesting(page, 1280, 800);
    
    // Take screenshot of Hero section only
    await expect(heroSection).toHaveScreenshot('hero-desktop-1280px.png');
  });

  // Test to verify Hero section renders correctly across all breakpoints (functional validation)
  test('Hero section functional validation across breakpoints', async ({ page }) => {
    const breakpoints = [
      { name: 'mobile', width: 375, height: 667 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'desktop', width: 1280, height: 800 }
    ];

    for (const breakpoint of breakpoints) {
      // Setup for each breakpoint
      const heroSection = await setupPageForVisualTesting(page, breakpoint.width, breakpoint.height);
      
      // Verify Hero section elements are present and visible
      await expect(heroSection).toBeVisible();
      
      // Verify main heading is present
      const heading = page.getByRole('heading', { level: 1 });
      await expect(heading).toBeVisible();
      await expect(heading).toContainText('Trump Goggles');
      
      // Verify CTA buttons are present (scope to hero section)
      const installButton = heroSection.getByRole('link', { name: /Chrome Web Store/i });
      await expect(installButton).toBeVisible();
      
      const learnMoreButton = heroSection.getByRole('button', { name: /Learn More/i });
      await expect(learnMoreButton).toBeVisible();
      
      // Verify decorative stars are present (should have multiple)
      const stars = page.locator('[data-decorative="true"]');
      expect(await stars.count()).toBeGreaterThan(0);
      
      // Verify stripe pattern background is present
      const stripePattern = page.locator('[data-testid="stripe-pattern"]');
      await expect(stripePattern).toBeVisible();
    }
  });

  // Test to ensure visual regression tests themselves are working correctly
  test('Visual regression test validation', async ({ page }) => {
    // This test validates that our visual regression setup is working
    const heroSection = await setupPageForVisualTesting(page, 1280, 800);
    
    // Verify Hero section has expected structure for screenshot comparison
    await expect(heroSection).toHaveClass(/min-h-screen/);
    await expect(heroSection).toHaveAttribute('aria-labelledby', 'hero-heading');
    
    // Verify animations are disabled (reduced motion applied)
    const reducedMotion = await page.evaluate(() => {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    });
    expect(reducedMotion).toBe(true);
    
    // Verify font loading completed by checking computed styles
    const heading = page.getByRole('heading', { level: 1 });
    const fontFamily = await heading.evaluate((el) => {
      return window.getComputedStyle(el).fontFamily;
    });
    
    // Font should be loaded (not generic fallback)
    expect(fontFamily).not.toBe('serif');
    expect(fontFamily).not.toBe('sans-serif');
  });
});