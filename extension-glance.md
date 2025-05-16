Okay, this is a comprehensive technical overview of the `/Users/phaedrus/Development/trump-goggles` directory, incorporating the content of all files and directory summaries.

**Technical Overview: `/Users/phaedrus/Development/trump-goggles` Directory**

**Purpose:**

The `/Users/phaedrus/Development/trump-goggles` directory represents the root directory of the "Trump Goggles" browser extension project. The extension's primary function is to modify web page content by substituting specific names with nicknames popularized by Donald Trump. The directory contains all the source code, documentation, tests, and build scripts necessary to develop, test, and package the extension for various browsers. The project aims to provide an entertaining, albeit controversial, browsing experience.

**Architecture:**

The project follows a modular architecture, separating concerns into distinct directories and files. The key components include:

*   **Content Scripts:** These scripts are injected into web pages to modify the DOM.
*   **Background Script:** This script manages the extension's lifecycle and handles browser events.
*   **Core Modules:** These modules provide essential functionality such as text processing, DOM manipulation, browser API abstraction, and logging.
*   **Test Suite:** This suite includes unit, integration, and end-to-end tests to ensure code correctness and prevent regressions.
*   **Documentation:** This documentation provides comprehensive information for developers and AI agents.
*   **Build Scripts:** These scripts automate the process of building browser-specific extension packages.

The project leverages a combination of JavaScript and TypeScript.  It uses a mix of established patterns (IIFE, globals) and modern approaches (ES Modules - but *inconsistently*).  The architecture aims for cross-browser compatibility (Chrome, Firefox, Edge), accessibility, and performance.

**Key Directory and File Roles:**

*   **`/Users/phaedrus/Development/trump-goggles/` (Root):**
    *   **`vitest.config.js`:** Configuration file for the Vitest test runner, specifying the test environment, globals, setup files, include patterns, coverage settings, and JSDOM environment options.
    *   **`TODO.md`:** A markdown file tracking the remaining tasks for the implement-hover-tooltip branch, including tasks related to Typescript interfaces, TextProcessor, DOMModifier, TooltipUI, TooltipManager, integration, accessibility, performance, testing, documentation, and cross-browser compatibility.
    *   **`background-combined.js`:** A single file containing all browser detection, browser adapter, and other utilities needed for the background script to function.
    *   **`build-browser-packages.sh`:** A bash script to build browser-specific extension packages for Chrome and Firefox. It copies files, removes browser-specific files, modifies the manifest, and creates zip archives.
    *   **`error-handler.js`:** A JavaScript module implementing centralized error handling for unhandled exceptions and promise rejections.
    *   **`mutation-observer.js`:** A JavaScript module responsible for observing DOM changes with batched processing and lifecycle management.
    *   **`options.html`:** A HTML file that displays the options for the Trump Goggles extension.
    *   **`package.json`:** Defines the project's metadata, dependencies, and scripts for testing, linting, formatting, type checking, and building.
    *   **`performance-test-page.html`:** A HTML page used for performance testing, containing various terms that trigger replacements and buttons to test different versions and content loading scenarios.
    *   **`CODE_REVIEW.md`:** A markdown file containing the code review notes for the implement-hover-tooltip branch.
    *   **`LICENSE`:** A text file containing the MIT license information for the project.
    *   **`PLAN.md`:** A markdown file outlining the plan to implement hover tooltips showing original unconverted text.
    *   **`REVIEW-CONTEXT.md`:** A markdown file containing the code review context for the current pull request, including branch details and diff information.
    *   **`crash-test-page.html`:** A HTML page designed to crash test the extension.
    *   **`eslint.config.js`:** A JavaScript file that configures ESLint for the project, defining rules, environments, and plugins.
    *   **`manifest-firefox.json`:** A JSON file containing the manifest for the Firefox version of the extension.
    *   **`manifest-universal.json`:** A JSON file containing the manifest for the universal version of the extension, built with a browser API polyfill.
    *   **`background-firefox.js`:** A JavaScript file that contains the event handler for the extension icon click in Firefox.
    *   **`browser-testing-instructions.md`:** A markdown file containing step-by-step instructions for testing the Trump Goggles extension across different browsers.
    *   **`performance-test.js`:** A JavaScript file that helps measure performance metrics of the Trump Goggles extension.
    *   **`performance-utils.d.ts`:** A typescript declaration file that defines the types for the `performance-utils.js` file.
    *   **`tooltip-basic.spec.js`:** A JavaScript file containing tests for the basic tooltip functionality using Playwright.
    *   **`tooltip-dynamic.spec.js`:** A JavaScript file containing tests for the dynamic tooltip functionality using Playwright.
    *   **`tooltip-keyboard.spec.js`:** A JavaScript file containing tests for the tooltip keyboard navigation functionality using Playwright.
    *   **`text-processor.js`:** A JavaScript file that handles text replacement operations with pattern matching and optimizations.
    *   **`declarations.d.ts`:** A typescript declaration file that defines the types for the globals and browser extension APIs used in the project.
    *   **`content-before-optimization.js`:** A JavaScript file that simulates the "before optimization" version of content.js, used for performance comparison.
    *   **`content-consolidated.js`:** A JavaScript file that orchestrates the initialization of all content script modules.
    *   **`dom-modifier.js`:** A JavaScript file that is responsible for modifying DOM elements with text conversions.
    *   **`trump-mappings.js`:** A JavaScript file that provides Trump nickname mappings and associated utilities.
    *   **`build-browser-extensions.sh`:** A Bash script used to automate the process of creating browser-specific builds of the extension.

*   **`/Users/phaedrus/Development/trump-goggles/archive`:** Contains past iterations of scripts used in the extension, including `background.js`, `content.js`, and `content-fixed.js`.

*   **`/Users/phaedrus/Development/trump-goggles/docs`:** Contains documentation files, including `DEVELOPMENT_PHILOSOPHY.md`, `DEVELOPMENT_PHILOSOPHY_APPENDIX_TYPESCRIPT.md`, `architecture.md`, `behavior.md`, and `CI-MAINTENANCE.md`.

*   **`/Users/phaedrus/Development/trump-goggles/images`:** Serves as a repository for image assets used by the extension.

*   **`/Users/phaedrus/Development/trump-goggles/test`:** Contains the test suite, including unit tests for the background script, browser-specific modules, content script, and integration tests. It also includes manual testing procedures, mocks, and fixtures.

**Important Dependencies and Gotchas:**

*   **Cross-file dependencies:** The content scripts (`content.js`, `content-fixed.js`, `content-consolidated.js`) rely on `content-shared.js` (which is not present in the provided file listing) for the `buildTrumpMap` function. Correct loading order is crucial.
*   **Global scope usage:** The content scripts extensively use the global `window` object to share state.
*   **JSDOM:**  The test suite depends on JSDOM for a virtual DOM environment. Version inconsistencies could cause issues.
*   **Mocking:** The test suite makes extensive use of mocking and stubbing. The quality of the mocks is crucial for the validity of the tests.
*   **Asynchronous operations:** The extension performs asynchronous operations, so tests need to account for these operations.
*   **Browser API differences:** The extension targets multiple browsers, which have slightly different APIs. The tests need to account for these differences.
*   **Regular expressions:** The extension relies on regular expressions for text replacement. The accuracy and performance of these regular expressions are crucial.
*   **Licensing:** The application must ensure that all images are either original creations or are used under appropriate licenses.
*   **Versioning:** A proper versioning strategy is essential to ensure that the application uses the correct image assets.
*   **The `CODE_REVIEW.md` file highlights many issues, especially around the inconsistency of applying code standards.**

This technical overview provides a comprehensive understanding of the Trump Goggles project structure, components, and dependencies. It emphasizes the project's modular architecture, testing infrastructure, and cross-browser compatibility goals.
