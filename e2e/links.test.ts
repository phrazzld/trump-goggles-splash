import { test, expect } from '@playwright/test';

test.describe('External links', () => {
  test('Chrome Store link functionality', async ({ page }) => {
    await page.goto('/');
    
    // Find Chrome Store links - there might be multiple (hero section, installation guide)
    const chromeStoreLinks = page.getByRole('link', { name: /chrome/i });
    
    // Check that at least one link exists
    expect(await chromeStoreLinks.count()).toBeGreaterThan(0);
    
    // Verify the first Chrome Store link has the correct href
    const firstLink = chromeStoreLinks.first();
    await expect(firstLink).toHaveAttribute(
      'href', 
      'https://chromewebstore.google.com/detail/trump-goggles/jffbimfdmgbfannficjejaffmnggoigd'
    );
    
    // Verify link opens in a new tab with secure attributes
    await expect(firstLink).toHaveAttribute('target', '_blank');
    await expect(firstLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('GitHub repository link functionality', async ({ page }) => {
    await page.goto('/');
    
    // Find GitHub repository link in the footer
    const githubLink = page.getByRole('link', { name: /github/i });
    
    // Check that the link exists
    await expect(githubLink).toBeVisible();
    
    // Verify the GitHub link has the correct href
    await expect(githubLink).toHaveAttribute(
      'href', 
      'https://github.com/phrazzld/trump-goggles'
    );
    
    // Verify link opens in a new tab with secure attributes
    await expect(githubLink).toHaveAttribute('target', '_blank');
    await expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});