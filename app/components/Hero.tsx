"use client";

import { motion, useReducedMotion } from "framer-motion";
import RetroButton from "./shared/RetroButton";
import ExternalLink from "./shared/ExternalLink";
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

  // Smooth scroll to Trumpism Examples section
  const scrollToExamples = () => {
    const element = document.getElementById('trumpism-examples');
    if (element) {
      element.scrollIntoView({ 
        behavior: shouldReduceMotion ? 'auto' : 'smooth',
        block: 'start'
      });
    }
  };

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
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden hero-optimized bg-retro-cream"
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
      {/* Diagonal stripe background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            var(--color-retro-blue) 0px,
            var(--color-retro-blue) 2px,
            transparent 2px,
            transparent 40px
          )`
        }}
        aria-hidden="true"
      />

      {/* Decorative "CERTIFIED" badge in corner */}
      <motion.div
        className="absolute top-8 right-8 md:top-12 md:right-12 w-20 h-20 md:w-28 md:h-28 z-20"
        initial={shouldReduceMotion ? {} : { scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 12 }}
        transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 100 }}
        aria-hidden="true"
      >
        <div className="w-full h-full bg-retro-red rounded-full flex items-center justify-center border-4 border-retro-gold shadow-lg">
          <div className="text-center">
            <span className="block text-[8px] md:text-[10px] font-black text-retro-cream uppercase tracking-wider">100%</span>
            <span className="block text-[10px] md:text-xs font-black text-retro-cream uppercase">Authentic</span>
          </div>
        </div>
      </motion.div>


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
              onClick={scrollToExamples}
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