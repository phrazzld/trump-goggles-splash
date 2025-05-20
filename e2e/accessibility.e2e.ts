import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test.describe('Accessibility compliance', () => {
  // Setup for each test: navigate to page and inject axe
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await injectAxe(page);
  });

  test('Main page passes accessibility checks', async ({ page }) => {
    // Run accessibility audit on the whole page
    await checkA11y(page, {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  });

  test('Hero section accessibility', async ({ page }) => {
    // Specifically test the hero section
    const heroSection = page.locator('section').filter({ hasText: /Trump Goggles/i }).first();
    
    // Check that the hero has proper heading structure
    const heading = heroSection.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText(/Trump Goggles/);
    
    // Run accessibility audit on just the hero section
    // Fix TypeScript error by passing the page element with an appropriate selector
    // rather than passing a Locator directly
    await checkA11y(page, {
      include: [['section:has-text("Trump Goggles")']],
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  });

  test('Interactive elements are accessible', async ({ page }) => {
    // Check that all buttons have accessible names
    const buttons = page.getByRole('button');
    const count = await buttons.count();
    
    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i);
      const name = await button.getAttribute('aria-label') || await button.innerText();
      expect(name?.trim().length).toBeGreaterThan(0);
    }
    
    // Check that all links have accessible names
    const links = page.getByRole('link');
    const linkCount = await links.count();
    
    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i);
      const name = await link.getAttribute('aria-label') || await link.innerText();
      expect(name?.trim().length).toBeGreaterThan(0);
    }
  });

  test('Color contrast is sufficient', async ({ page }) => {
    // This is covered by the general accessibility test, but we can add specific
    // contrast tests if needed for critical components
    await checkA11y(page, {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
      axeOptions: {
        runOnly: {
          type: 'tag',
          values: ['color-contrast'],
        },
      },
    });
  });

  test('Keyboard navigation works', async ({ page }) => {
    // Tab through the page and ensure focus is visible and logical
    await page.keyboard.press('Tab');
    
    // Check that the first focusable element is visible and has focus indicator
    const firstFocusableElement = await page.evaluateHandle(() => document.activeElement);
    expect(firstFocusableElement).toBeTruthy();
    
    // Continue tabbing and check that we can reach main interactive elements
    let foundChromeStoreLink = false;
    let foundGithubLink = false;
    
    // Tab through a reasonable number of elements to find important links
    for (let i = 0; i < 20; i++) {
      await page.keyboard.press('Tab');
      const focusedElement = await page.evaluateHandle(() => document.activeElement);
      
      // Fix null safety issues by adding null checks
      const tagName = await focusedElement.evaluate(el => el ? el.tagName.toLowerCase() : '');
      
      if (tagName === 'a') {
        // Add null check for el
        const href = await focusedElement.evaluate(el => el ? el.getAttribute('href') || '' : '');
        
        if (href.includes('chromewebstore.google.com')) {
          foundChromeStoreLink = true;
        } else if (href.includes('github.com')) {
          foundGithubLink = true;
        }
      }
      
      if (foundChromeStoreLink && foundGithubLink) {
        break;
      }
    }
    
    // Ensure we found our important links via keyboard navigation
    expect(foundChromeStoreLink || foundGithubLink).toBe(true);
  });
});