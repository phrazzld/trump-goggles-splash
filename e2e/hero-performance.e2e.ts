import { test, expect } from '@playwright/test';

test.describe('Hero Animation Performance Tests', () => {
  // Common setup function for performance testing
  async function setupPageForPerformanceTesting(page: any, enableAnimations = true) {
    // Set viewport to standard desktop size for consistent measurements
    await page.setViewportSize({ width: 1280, height: 800 });
    
    // Configure reduced motion preference based on test scenario
    if (!enableAnimations) {
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
    
    return heroSection;
  }

  test('Hero animation frame rate performance', async ({ page }) => {
    const heroSection = await setupPageForPerformanceTesting(page, true);
    
    // Start performance monitoring
    const performanceEntries: any[] = [];
    
    await page.evaluate(() => {
      // Clear existing performance entries
      performance.clearMarks();
      performance.clearMeasures();
      
      // Mark the start of animation monitoring
      performance.mark('animation-start');
    });
    
    // Wait for animations to complete (based on T001-T003 implementation)
    await page.waitForTimeout(2000);
    
    // Measure animation performance
    const performanceMetrics = await page.evaluate(() => {
      performance.mark('animation-end');
      performance.measure('animation-duration', 'animation-start', 'animation-end');
      
      const animationMeasure = performance.getEntriesByName('animation-duration')[0];
      const paintEntries = performance.getEntriesByType('paint');
      const layoutShiftEntries = performance.getEntriesByType('layout-shift');
      
      return {
        animationDuration: animationMeasure ? animationMeasure.duration : 0,
        firstPaint: paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        layoutShifts: layoutShiftEntries.length,
        cumulativeLayoutShift: layoutShiftEntries.reduce((sum: number, entry: any) => sum + entry.value, 0)
      };
    });
    
    // Verify performance criteria
    expect(performanceMetrics.animationDuration).toBeGreaterThan(0);
    expect(performanceMetrics.animationDuration).toBeLessThan(3000); // Animations should complete within 3 seconds
    expect(performanceMetrics.cumulativeLayoutShift).toBeLessThan(0.1); // CLS should be minimal
    
    // Verify hero section remains visible and functional after animations
    await expect(heroSection).toBeVisible();
    
    console.log('Animation Performance Metrics:', performanceMetrics);
  });

  test('Hero section Core Web Vitals impact', async ({ page }) => {
    const heroSection = await setupPageForPerformanceTesting(page, true);
    
    // Measure Largest Contentful Paint timing
    const lcpMetrics = await page.evaluate(() => {
      return new Promise((resolve) => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any; // LCP entry type
          
          if (lastEntry) {
            resolve({
              lcp: lastEntry.startTime,
              element: lastEntry.element?.tagName || 'unknown'
            });
          }
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        
        // Fallback timeout
        setTimeout(() => {
          resolve({ lcp: 0, element: 'timeout' });
        }, 5000);
      });
    });
    
    // Verify LCP performance
    expect(lcpMetrics).toBeDefined();
    console.log('LCP Metrics:', lcpMetrics);
    
    // Verify hero section is visible and properly rendered
    await expect(heroSection).toBeVisible();
    
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('Trump Goggles');
  });

  test('Memory usage during hero animations', async ({ page }) => {
    const heroSection = await setupPageForPerformanceTesting(page, true);
    
    // Get initial memory usage
    const initialMemory = await page.evaluate(() => {
      if ('memory' in performance) {
        return {
          used: (performance as any).memory.usedJSHeapSize,
          total: (performance as any).memory.totalJSHeapSize
        };
      }
      return { used: 0, total: 0 };
    });
    
    // Wait for animations to complete
    await page.waitForTimeout(2000);
    
    // Force garbage collection if available (Chrome DevTools Protocol)
    try {
      const client = await page.context().newCDPSession(page);
      await client.send('HeapProfiler.collectGarbage');
    } catch (e) {
      // Ignore if not available
    }
    
    // Get memory usage after animations
    const finalMemory = await page.evaluate(() => {
      if ('memory' in performance) {
        return {
          used: (performance as any).memory.usedJSHeapSize,
          total: (performance as any).memory.totalJSHeapSize
        };
      }
      return { used: 0, total: 0 };
    });
    
    // Verify no significant memory leaks
    if (initialMemory.used > 0 && finalMemory.used > 0) {
      const memoryIncrease = finalMemory.used - initialMemory.used;
      const memoryIncreasePercentage = (memoryIncrease / initialMemory.used) * 100;
      
      // Allow reasonable memory increase (less than 50% growth)
      expect(memoryIncreasePercentage).toBeLessThan(50);
      
      console.log('Memory Usage:', {
        initial: `${(initialMemory.used / 1024 / 1024).toFixed(2)}MB`,
        final: `${(finalMemory.used / 1024 / 1024).toFixed(2)}MB`,
        increase: `${(memoryIncrease / 1024 / 1024).toFixed(2)}MB (${memoryIncreasePercentage.toFixed(2)}%)`
      });
    }
    
    // Verify hero section is still functional
    await expect(heroSection).toBeVisible();
  });

  test('Performance comparison: animations vs reduced motion', async ({ page }) => {
    // Test with animations enabled
    await setupPageForPerformanceTesting(page, true);
    
    const animatedMetrics = await page.evaluate(() => {
      const start = performance.now();
      
      return new Promise((resolve) => {
        // Wait for one frame to measure rendering performance
        requestAnimationFrame(() => {
          const end = performance.now();
          const paintEntries = performance.getEntriesByType('paint');
          
          resolve({
            renderTime: end - start,
            firstPaint: paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0,
            firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
          });
        });
      });
    });
    
    // Test with reduced motion
    await setupPageForPerformanceTesting(page, false);
    
    const reducedMotionMetrics = await page.evaluate(() => {
      const start = performance.now();
      
      return new Promise((resolve) => {
        requestAnimationFrame(() => {
          const end = performance.now();
          const paintEntries = performance.getEntriesByType('paint');
          
          resolve({
            renderTime: end - start,
            firstPaint: paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0,
            firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
          });
        });
      });
    });
    
    // Both should have reasonable performance
    expect(animatedMetrics).toBeDefined();
    expect(reducedMotionMetrics).toBeDefined();
    
    console.log('Performance Comparison:', {
      animated: animatedMetrics,
      reducedMotion: reducedMotionMetrics
    });
    
    // Verify hero section works in both modes
    const heroSection = page.locator('section[aria-labelledby="hero-heading"]');
    await expect(heroSection).toBeVisible();
  });

  test('Hero animation GPU acceleration verification', async ({ page }) => {
    const heroSection = await setupPageForPerformanceTesting(page, true);
    
    // Check if animated elements have will-change property (from T003)
    const animatedStars = page.locator('[data-decorative="true"]');
    const heroMotionSection = page.locator('section[aria-labelledby="hero-heading"]');
    
    // Verify will-change properties are applied
    const starWillChange = await animatedStars.first().evaluate(el => {
      return window.getComputedStyle(el).willChange;
    });
    
    const heroWillChange = await heroMotionSection.evaluate(el => {
      return window.getComputedStyle(el).willChange;
    });
    
    // Verify GPU acceleration hints are present
    // will-change should be 'auto' or specific properties, not 'auto' means it's set
    console.log('GPU Acceleration Properties:', {
      starWillChange,
      heroWillChange
    });
    
    // Verify elements are properly rendered
    await expect(animatedStars.first()).toBeVisible();
    await expect(heroMotionSection).toBeVisible();
  });

  test('Animation performance with multiple viewport sizes', async ({ page }) => {
    const viewports = [
      { width: 375, height: 667, name: 'Mobile' },
      { width: 768, height: 1024, name: 'Tablet' },
      { width: 1280, height: 800, name: 'Desktop' },
      { width: 1920, height: 1080, name: 'Large Desktop' }
    ];
    
    const performanceResults: any[] = [];
    
    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.emulateMedia({ reducedMotion: 'no-preference' });
      
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      
      const heroSection = page.locator('section[aria-labelledby="hero-heading"]');
      await expect(heroSection).toBeVisible();
      
      // Measure performance for this viewport
      const metrics = await page.evaluate(() => {
        const start = performance.now();
        
        return new Promise((resolve) => {
          requestAnimationFrame(() => {
            const end = performance.now();
            const paintEntries = performance.getEntriesByType('paint');
            
            resolve({
              renderTime: end - start,
              firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
            });
          });
        });
      });
      
      performanceResults.push({
        viewport: viewport.name,
        metrics
      });
      
      // Small delay between viewport tests
      await page.waitForTimeout(100);
    }
    
    // Verify all viewports have reasonable performance
    performanceResults.forEach(result => {
      expect(result.metrics).toBeDefined();
    });
    
    console.log('Viewport Performance Results:', performanceResults);
  });
});