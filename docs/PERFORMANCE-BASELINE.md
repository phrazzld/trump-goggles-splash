# Hero Animation Performance Baseline

This document provides the performance baseline and testing approach for hero section animations in the Trump Goggles splash page.

## Overview

Performance testing for hero animations focuses on ensuring smooth 60fps animation performance while maintaining excellent Core Web Vitals scores. The testing approach includes both automated E2E tests and comprehensive Lighthouse-based performance auditing.

## Performance Thresholds

### Core Web Vitals
- **Largest Contentful Paint (LCP)**: ≤ 2.5s (Good)
- **Cumulative Layout Shift (CLS)**: ≤ 0.1 (Good)  
- **First Contentful Paint (FCP)**: ≤ 1.8s (Good)

### Additional Metrics
- **Speed Index**: ≤ 3.4s (Good)
- **Total Blocking Time**: ≤ 300ms (Good)
- **First Meaningful Paint**: ≤ 2.0s (Good)

### Animation-Specific Criteria
- **Frame Rate**: Target 60fps for smooth animations
- **Animation Duration**: Hero animations should complete within 3 seconds
- **Memory Usage**: No significant memory leaks (< 50% growth during animation lifecycle)

## Testing Tools

### 1. E2E Performance Tests (`e2e/hero-performance.e2e.ts`)
Automated Playwright-based tests that measure:
- Animation frame rate and timing
- Core Web Vitals impact
- Memory usage during animations
- Performance comparison between normal and reduced motion
- GPU acceleration verification
- Cross-viewport performance consistency

**Usage:**
```bash
# Run all performance E2E tests
pnpm test:e2e e2e/hero-performance.e2e.ts

# Run with custom port
PORT=3001 pnpm test:e2e e2e/hero-performance.e2e.ts
```

### 2. Lighthouse Performance Script (`scripts/performance-test.js`)
Comprehensive Lighthouse-based performance auditing with baseline comparison.

**Installation:**
```bash
npm install lighthouse chrome-launcher --save-dev
```

**Usage:**
```bash
# Establish initial baseline
node scripts/performance-test.js http://localhost:3000 --baseline

# Compare current performance with baseline
node scripts/performance-test.js http://localhost:3000 --compare

# Run single performance test
node scripts/performance-test.js http://localhost:3000
```

## Performance Testing Workflow

### 1. Initial Baseline Establishment
Before making animation changes:
```bash
# Start development server
pnpm dev

# Establish baseline (in another terminal)
node scripts/performance-test.js http://localhost:3000 --baseline
```

**Note**: Development mode performance will be significantly slower than production due to unminified code, hot reloading, and debug tools. For accurate performance measurements, test against production builds.

### 2. Ongoing Performance Monitoring
After implementing animation changes:
```bash
# Compare with baseline
node scripts/performance-test.js http://localhost:3000 --compare

# Run E2E performance tests
pnpm test:e2e e2e/hero-performance.e2e.ts
```

### 3. CI Integration
Performance tests can be integrated into CI pipelines:
```bash
# In CI environment
npm run build
npm start &
sleep 10  # Wait for server
node scripts/performance-test.js http://localhost:3000
```

## Performance Optimization Strategies

### Implemented Optimizations (T001-T008)
1. **Smooth Animation Timing**: Predictable delays and easing (T001)
2. **Coordinated Animation Sequence**: Single timeline for hero elements (T002)
3. **GPU Acceleration**: `will-change` properties for animated elements (T003)
4. **Layout Stability**: Full viewport coverage without shifts (T004-T006)
5. **Visual Hierarchy**: Optimized background patterns (T007)
6. **Responsive Typography**: Consistent visual rhythm (T008)

### Animation Performance Features
- **Reduced Motion Support**: Respects `prefers-reduced-motion` preference
- **Progressive Enhancement**: Graceful degradation when animations are disabled
- **Memory Management**: No animation-related memory leaks
- **GPU Utilization**: Proper hardware acceleration for smooth rendering

## Troubleshooting Performance Issues

### Common Issues and Solutions

#### Poor Animation Frame Rate
- Check GPU acceleration with DevTools Layers panel
- Verify `will-change` properties are applied
- Reduce animation complexity or duration
- Consider using `transform` and `opacity` only

#### High Cumulative Layout Shift (CLS)
- Ensure hero section has fixed dimensions
- Avoid dynamic content that changes layout
- Use `transform` instead of position changes

#### Slow Largest Contentful Paint (LCP)
- Optimize font loading strategies
- Reduce hero section image sizes
- Minimize render-blocking resources

#### Memory Leaks
- Check for event listener cleanup
- Verify animation cleanup on component unmount
- Monitor memory usage over time

## Results Storage

Performance test results are stored in:
- **Baseline**: `performance-results/hero-performance-baseline.json`
- **Comparisons**: `performance-results/performance-comparison-[timestamp].json`
- **E2E Reports**: Generated via Playwright HTML reports

## Performance Monitoring Schedule

### Development
- Run performance tests before major animation changes
- Compare with baseline after implementing new features
- Monitor during code reviews

### CI/CD
- Run performance tests on pull requests
- Fail builds if performance thresholds are not met
- Generate performance reports for tracking trends

### Production
- Monitor Core Web Vitals via Google Search Console
- Use Real User Monitoring (RUM) tools if available
- Track performance trends over time

## Related Documentation

- [DEVELOPMENT_PHILOSOPHY.md](DEVELOPMENT_PHILOSOPHY.md) - Testing strategy and performance principles
- [CLAUDE.md](../CLAUDE.md) - Development commands and workflow
- [TODO.md](../TODO.md) - Animation optimization tasks (T001-T014)

---

*This document should be updated whenever performance thresholds or testing approaches change.*