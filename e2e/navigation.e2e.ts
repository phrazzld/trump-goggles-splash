import { test, expect } from '@playwright/test';

test.describe('Page navigation', () => {
  test('Main page loads correctly', async ({ page }) => {
    // Navigate to home page
    await page.goto('/');
    
    // Check that page has loaded with correct title
    await expect(page).toHaveTitle(/Trump Goggles/);
    
    // Verify key elements exist and are visible
    // Main heading
    const mainHeading = page.getByRole('heading', { level: 1 });
    await expect(mainHeading).toBeVisible();
    await expect(mainHeading).toContainText(/Trump Goggles/i);
    
    // Description mentions Trumpisms
    const heroDescription = page.getByText(/Trumpisms/i);
    await expect(heroDescription).toBeVisible();
    
    // Check all major sections are present
    const sections = page.locator('section');
    expect(await sections.count()).toBeGreaterThanOrEqual(3);
    
    // Hero section (already checked with main heading)
    
    // Features/Examples section
    const featuresSection = page.getByText(/Features|Examples/i);
    await expect(featuresSection).toBeVisible();
    
    // Installation section
    const installSection = page.getByText(/Install/i);
    if (await installSection.count() > 0) {
      await expect(installSection.first()).toBeVisible();
    }
    
    // Footer section
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('Test page loads correctly', async ({ page }) => {
    // Navigate to test page (if it exists)
    await page.goto('/test');
    
    // Verify it loads - this may be a development/test page
    // If it's not expected to be publicly accessible, this test can be removed
    await expect(page).toHaveURL(/\/test$/);
  });
});