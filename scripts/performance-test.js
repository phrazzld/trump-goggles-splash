#!/usr/bin/env node

/**
 * Performance Testing Script for Hero Animations
 * 
 * This script uses Lighthouse to establish performance baselines
 * and monitor Core Web Vitals for the hero section animations.
 * 
 * Usage:
 *   node scripts/performance-test.js [url] [--output=json|html]
 * 
 * Examples:
 *   node scripts/performance-test.js http://localhost:3000
 *   node scripts/performance-test.js http://localhost:3000 --output=html
 */

const { default: lighthouse } = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');

// Configuration
const DEFAULT_URL = 'http://localhost:3000';
const OUTPUT_DIR = path.join(__dirname, '..', 'performance-results');
const BASELINE_FILE = path.join(OUTPUT_DIR, 'hero-performance-baseline.json');

// Performance thresholds based on T014 acceptance criteria
const PERFORMANCE_THRESHOLDS = {
  // Core Web Vitals
  'largest-contentful-paint': 2500, // 2.5s (Good)
  'cumulative-layout-shift': 0.1,   // 0.1 (Good)
  'first-contentful-paint': 1800,   // 1.8s (Good)
  
  // Additional metrics
  'speed-index': 3400,               // 3.4s (Good)
  'total-blocking-time': 300,        // 300ms (Good)
  'first-meaningful-paint': 2000,    // 2.0s (Good)
};

class PerformanceTester {
  constructor(url = DEFAULT_URL, outputFormat = 'json') {
    this.url = url;
    this.outputFormat = outputFormat;
    this.timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
  }

  async runLighthouseTest(scenario = 'default') {
    console.log(`🚀 Running Lighthouse performance test for: ${this.url}`);
    console.log(`📊 Scenario: ${scenario}`);
    
    const chrome = await chromeLauncher.launch({
      chromeFlags: ['--headless', '--no-sandbox', '--disable-dev-shm-usage']
    });

    const options = {
      logLevel: 'info',
      output: 'json',
      onlyCategories: ['performance'],
      port: chrome.port,
      throttlingMethod: 'devtools',
      // Focus on metrics relevant to animations and Core Web Vitals
      onlyAudits: [
        'largest-contentful-paint',
        'first-contentful-paint',
        'cumulative-layout-shift',
        'speed-index',
        'total-blocking-time',
        'first-meaningful-paint',
        'render-blocking-resources',
        'unused-css-rules',
        'layout-shift-elements'
      ]
    };

    try {
      const runnerResult = await lighthouse(this.url, options);
      await chrome.kill();
      
      return this.processLighthouseResults(runnerResult, scenario);
    } catch (error) {
      await chrome.kill();
      throw error;
    }
  }

  processLighthouseResults(runnerResult, scenario) {
    const { lhr } = runnerResult;
    const audits = lhr.audits;
    
    const results = {
      url: this.url,
      scenario,
      timestamp: new Date().toISOString(),
      performance: {
        score: lhr.categories.performance.score * 100,
        metrics: {},
        thresholds: {},
        passed: true
      }
    };

    // Extract key metrics
    Object.keys(PERFORMANCE_THRESHOLDS).forEach(metricKey => {
      if (audits[metricKey]) {
        const audit = audits[metricKey];
        const value = audit.numericValue || audit.score;
        const threshold = PERFORMANCE_THRESHOLDS[metricKey];
        
        results.performance.metrics[metricKey] = {
          value: Math.round(value),
          displayValue: audit.displayValue,
          score: audit.score
        };
        
        results.performance.thresholds[metricKey] = {
          threshold,
          passed: value <= threshold
        };
        
        if (value > threshold) {
          results.performance.passed = false;
        }
      }
    });

    // Add Core Web Vitals summary
    results.performance.coreWebVitals = {
      lcp: results.performance.metrics['largest-contentful-paint'],
      cls: results.performance.metrics['cumulative-layout-shift'],
      fcp: results.performance.metrics['first-contentful-paint']
    };

    return results;
  }

  async establishBaseline() {
    console.log('📏 Establishing performance baseline...');
    
    const baselineResults = await this.runLighthouseTest('baseline');
    
    // Save baseline results
    fs.writeFileSync(BASELINE_FILE, JSON.stringify(baselineResults, null, 2));
    console.log(`💾 Baseline saved to: ${BASELINE_FILE}`);
    
    return baselineResults;
  }

  async compareWithBaseline() {
    if (!fs.existsSync(BASELINE_FILE)) {
      console.log('⚠️  No baseline found. Establishing baseline first...');
      return await this.establishBaseline();
    }

    const baseline = JSON.parse(fs.readFileSync(BASELINE_FILE, 'utf8'));
    const current = await this.runLighthouseTest('current');
    
    const comparison = {
      baseline: baseline.performance,
      current: current.performance,
      improvements: {},
      regressions: {},
      summary: {
        overallImprovement: current.performance.score - baseline.performance.score,
        coreWebVitalsImproved: 0,
        coreWebVitalsRegressed: 0
      }
    };

    // Compare metrics
    Object.keys(baseline.performance.metrics).forEach(metric => {
      const baselineValue = baseline.performance.metrics[metric].value;
      const currentValue = current.performance.metrics[metric].value;
      const change = currentValue - baselineValue;
      const changePercent = ((change / baselineValue) * 100).toFixed(1);

      const metricComparison = {
        baseline: baselineValue,
        current: currentValue,
        change,
        changePercent: `${changePercent > 0 ? '+' : ''}${changePercent}%`,
        improved: change < 0 // Lower is better for these metrics
      };

      if (change < 0) {
        comparison.improvements[metric] = metricComparison;
        if (['largest-contentful-paint', 'cumulative-layout-shift', 'first-contentful-paint'].includes(metric)) {
          comparison.summary.coreWebVitalsImproved++;
        }
      } else if (change > 0) {
        comparison.regressions[metric] = metricComparison;
        if (['largest-contentful-paint', 'cumulative-layout-shift', 'first-contentful-paint'].includes(metric)) {
          comparison.summary.coreWebVitalsRegressed++;
        }
      }
    });

    // Save comparison results
    const comparisonFile = path.join(OUTPUT_DIR, `performance-comparison-${this.timestamp}.json`);
    fs.writeFileSync(comparisonFile, JSON.stringify(comparison, null, 2));
    console.log(`📊 Comparison saved to: ${comparisonFile}`);

    return comparison;
  }

  generateReport(results) {
    console.log('\n🎯 PERFORMANCE TEST RESULTS');
    console.log('=' .repeat(50));
    
    if (results.baseline && results.current) {
      // Comparison report
      console.log(`📈 Overall Score Change: ${results.summary.overallImprovement > 0 ? '+' : ''}${results.summary.overallImprovement.toFixed(1)}`);
      console.log(`🎯 Core Web Vitals Improved: ${results.summary.coreWebVitalsImproved}`);
      console.log(`⚠️  Core Web Vitals Regressed: ${results.summary.coreWebVitalsRegressed}`);
      
      if (Object.keys(results.improvements).length > 0) {
        console.log('\n✅ IMPROVEMENTS:');
        Object.entries(results.improvements).forEach(([metric, data]) => {
          console.log(`  ${metric}: ${data.baseline} → ${data.current} (${data.changePercent})`);
        });
      }
      
      if (Object.keys(results.regressions).length > 0) {
        console.log('\n⚠️  REGRESSIONS:');
        Object.entries(results.regressions).forEach(([metric, data]) => {
          console.log(`  ${metric}: ${data.baseline} → ${data.current} (${data.changePercent})`);
        });
      }
    } else {
      // Single test report
      console.log(`🎯 Performance Score: ${results.performance.score.toFixed(1)}/100`);
      console.log(`✅ Thresholds Passed: ${results.performance.passed ? 'Yes' : 'No'}`);
      
      console.log('\n📊 CORE WEB VITALS:');
      const cwv = results.performance.coreWebVitals;
      console.log(`  LCP: ${cwv.lcp.displayValue} (${cwv.lcp.value}ms)`);
      console.log(`  CLS: ${cwv.cls.displayValue} (${cwv.cls.value})`);
      console.log(`  FCP: ${cwv.fcp.displayValue} (${cwv.fcp.value}ms)`);
      
      console.log('\n📈 DETAILED METRICS:');
      Object.entries(results.performance.metrics).forEach(([metric, data]) => {
        const threshold = results.performance.thresholds[metric];
        const status = threshold.passed ? '✅' : '❌';
        console.log(`  ${status} ${metric}: ${data.displayValue} (threshold: ${threshold.threshold})`);
      });
    }
    
    console.log('\n🏁 Performance test completed successfully!');
  }
}

// CLI Interface
async function main() {
  const args = process.argv.slice(2);
  const url = args[0] || DEFAULT_URL;
  const outputArg = args.find(arg => arg.startsWith('--output='));
  const outputFormat = outputArg ? outputArg.split('=')[1] : 'json';
  const baseline = args.includes('--baseline');
  const compare = args.includes('--compare');

  console.log('🎭 Hero Animation Performance Tester');
  console.log('====================================\n');

  try {
    const tester = new PerformanceTester(url, outputFormat);
    
    let results;
    if (baseline) {
      results = await tester.establishBaseline();
    } else if (compare) {
      results = await tester.compareWithBaseline();
    } else {
      // Default: compare with baseline if it exists, otherwise establish baseline
      results = await tester.compareWithBaseline();
    }
    
    tester.generateReport(results);
    
    // Exit with error code if performance thresholds are not met
    if (results.performance && !results.performance.passed) {
      console.log('\n❌ Performance thresholds not met!');
      process.exit(1);
    }
    
  } catch (error) {
    console.error('❌ Performance test failed:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { PerformanceTester, PERFORMANCE_THRESHOLDS };