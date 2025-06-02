"use client";

import { motion, useReducedMotion } from "framer-motion";
import RetroButton from "./shared/RetroButton";
import ExternalLink from "./shared/ExternalLink";
import AnimatedStar from "./shared/AnimatedStar";
import { APP_CONFIG } from "@/app/config/app-config";
import { animationLogger, createAnimationTimer } from '@/lib/dev-logger';

/**
 * Hero section component for the Trump Goggles splash page.
 * 
 * Features a coordinated animation sequence with performance optimizations and accessibility support.
 * The component implements a single timeline approach where all elements animate in sequence,
 * creating a cohesive entrance effect while maintaining smooth 60fps performance.
 * 
 * ## Animation Design Decisions:
 * - Uses a staggered delay system (0.2s intervals) to create visual hierarchy
 * - Implements `will-change` CSS property for GPU acceleration on animated elements
 * - Respects user's `prefers-reduced-motion` preference by disabling animations when requested
 * - Utilizes CSS containment (`contain: layout style paint`) to improve rendering performance
 * 
 * ## Responsive Design:
 * - Full viewport coverage with `min-h-screen` and `w-full` (addresses T004)
 * - Stars positioned in "safe zones" using responsive utility classes (T005)
 * - Vintage border frame uses responsive spacing (T006)
 * - Typography scales across breakpoints for optimal readability (T008)
 * 
 * ## Performance Optimizations:
 * - Consolidated background patterns to minimize render layers (T007)
 * - GPU-accelerated transforms via `will-change` property (T003)
 * - Simplified animation sequence to reduce complexity (T002)
 * - Isolation context to prevent unwanted stacking issues
 * 
 * @returns Hero section with animated stars, heading, description, and CTA buttons
 */
export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Development logging: Track reduced motion state and animation sequence
  animationLogger.accessibility('Hero', {
    reducedMotion: shouldReduceMotion,
    animationElements: ['section', 'content', 'heading', 'description', 'cta-buttons'],
    staggeredDelays: [0, 0.2, 0.4, 0.6, 0.8],
  });

  // Development logging: Animation sequence start
  const timer = createAnimationTimer('Hero');
  animationLogger.start('Hero', {
    sequence: 'coordinated-stagger',
    totalDuration: 1.4, // 0.6s base + 0.8s final delay
    elementCount: 5,
    baseDelay: 0.2,
    reducedMotion: shouldReduceMotion,
  });

  return (
    <motion.section 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden hero-optimized"
      initial={shouldReduceMotion ? {} : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onAnimationStart={() => {
        // Development logging: Section animation start
        animationLogger.timing('Hero', { section_start: timer.measure('section_start') });
      }}
      onAnimationComplete={() => {
        // Development logging: Section animation complete  
        const duration = timer.measure('section_complete');
        animationLogger.complete('Hero', {
          element: 'section',
          actualDuration: duration,
          expectedDuration: 0.6 * 1000,
        });
      }}
      aria-labelledby="hero-heading"
      style={{
        contain: "layout style paint",
        isolation: "isolate"
      }}
    >
      {/* Stripe pattern accent - diagonal stripes 
          Optimized in T007: Single-layer gradient pattern for minimal render complexity
          Ultra-low opacity (0.03) maintains visual hierarchy without overwhelming content */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        data-testid="stripe-pattern"
        data-decorative="true"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 50px,
              #B91C1C 50px,
              #B91C1C 54px,
              transparent 54px,
              transparent 104px,
              #1E3A8A 104px,
              #1E3A8A 108px
            )`,
          }}
        />
      </div>

      {/* Star decorations - positioned with responsive safe zones 
          T005 implementation: Uses CSS utility classes (star-safe-*) defined in globals.css
          for viewport-aware positioning that prevents edge clipping on all devices */}
      <AnimatedStar className="star-safe-top-left w-14 h-14 md:w-20 md:h-20 opacity-80" delay={0.1} data-decorative="true" />
      <AnimatedStar className="star-safe-top-right w-8 h-8 md:w-12 md:h-12 opacity-70" delay={0.2} data-decorative="true" />
      <AnimatedStar className="star-safe-bottom-left w-12 h-12 md:w-16 md:h-16 opacity-75" delay={0.3} data-decorative="true" />
      <AnimatedStar className="star-safe-bottom-right w-10 h-10 md:w-14 md:h-14 opacity-80" delay={0.4} data-decorative="true" />
      <AnimatedStar className="star-safe-mid-left w-6 h-6 opacity-40 hidden sm:block" delay={0.5} data-decorative="true" />
      <AnimatedStar className="star-safe-accent w-5 h-5 opacity-40 hidden sm:block" delay={0.6} data-decorative="true" />
      <AnimatedStar className="star-safe-mid-right w-4 h-4 opacity-30 hidden sm:block" delay={0.7} data-decorative="true" />

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center hero-content-padding max-w-6xl mx-auto"
        style={{ willChange: "transform, opacity" }}
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        onAnimationStart={() => {
          // Development logging: Content container animation start
          animationLogger.timing('Hero', { content_start: timer.measure('content_start') });
        }}
        onAnimationComplete={() => {
          // Development logging: Content container animation complete
          const duration = timer.measure('content_complete');
          animationLogger.complete('Hero', {
            element: 'content',
            actualDuration: duration,
            expectedDuration: (0.6 + 0.2) * 1000,
            delay: 0.2,
          });
        }}
      >
        {/* Main headline */}
        <motion.h1 
          id="hero-heading"
          className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-retro-blue mb-8 text-shadow-hero hero-heading"
          style={{ willChange: "transform, opacity" }}
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          onAnimationStart={() => {
            // Development logging: Heading animation start
            animationLogger.timing('Hero', { heading_start: timer.measure('heading_start') });
          }}
          onAnimationComplete={() => {
            // Development logging: Heading animation complete
            const duration = timer.measure('heading_complete');
            animationLogger.complete('Hero', {
              element: 'heading',
              actualDuration: duration,
              expectedDuration: (0.6 + 0.4) * 1000,
              delay: 0.4,
            });
          }}
        >
          {APP_CONFIG.uiText.hero.title}
        </motion.h1>

        {/* Accurate description with examples */}
        <motion.p 
          className="lead text-lg md:text-xl lg:text-2xl text-gray-800 mb-12 max-w-4xl mx-auto hero-description"
          style={{ willChange: "transform, opacity" }}
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          onAnimationStart={() => {
            // Development logging: Description animation start
            animationLogger.timing('Hero', { description_start: timer.measure('description_start') });
          }}
          onAnimationComplete={() => {
            // Development logging: Description animation complete
            const duration = timer.measure('description_complete');
            animationLogger.complete('Hero', {
              element: 'description',
              actualDuration: duration,
              expectedDuration: (0.6 + 0.6) * 1000,
              delay: 0.6,
            });
          }}
        >
          {APP_CONFIG.uiText.hero.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          style={{ willChange: "transform, opacity" }}
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          onAnimationStart={() => {
            // Development logging: CTA buttons animation start
            animationLogger.timing('Hero', { cta_start: timer.measure('cta_start') });
          }}
          onAnimationComplete={() => {
            // Development logging: CTA buttons animation complete
            const duration = timer.measure('cta_complete');
            animationLogger.complete('Hero', {
              element: 'cta-buttons',
              actualDuration: duration,
              expectedDuration: (0.6 + 0.8) * 1000,
              delay: 0.8,
            });
            
            // Development logging: Overall sequence coordination complete
            const totalSequenceTime = timer.measure('total_sequence_duration');
            animationLogger.performance('Hero', {
              total_sequence_time: totalSequenceTime,
            });
            
            animationLogger.info('Hero', 'Animation sequence completed successfully', {
              coordination_success: true,
              final_element_delay: 0.8,
              sequence_type: 'staggered',
            });
          }}
        >
          <motion.div 
            className="transform hover:scale-105 transition-transform duration-200"
            style={{ willChange: "transform" }}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <ExternalLink
              href={APP_CONFIG.urls.chromeStore}
              variant="button"
              ariaLabel="Install Trump Goggles from Chrome Web Store"
              buttonProps={{
                variant: "primary",
                size: "lg",
                className: "text-xl md:text-2xl px-10 py-5",
              }}
            >
              {APP_CONFIG.uiText.hero.installButton}
            </ExternalLink>
          </motion.div>

          <motion.div 
            className="text-gray-600"
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            {APP_CONFIG.uiText.hero.orSeparator}
          </motion.div>

          <motion.div 
            className="transform hover:scale-105 transition-transform duration-200"
            style={{ willChange: "transform" }}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <RetroButton
              variant="secondary"
              size="lg"
              className="text-xl md:text-2xl px-10 py-5"
            >
              {APP_CONFIG.uiText.hero.learnMoreButton}
            </RetroButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Vintage border frame effect 
          T006 implementation: Responsive border using CSS utility class defined in globals.css
          Adapts spacing using viewport units to maintain consistent visual weight across devices */}
      <div className="border-frame-responsive" />
    </motion.section>
  );
}