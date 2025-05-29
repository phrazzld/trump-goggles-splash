"use client";

import { motion, useReducedMotion } from "framer-motion";
import RetroButton from "./shared/RetroButton";
import ExternalLink from "./shared/ExternalLink";
import AnimatedStar from "./shared/AnimatedStar";
import { APP_CONFIG } from "@/app/config/app-config";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={shouldReduceMotion ? {} : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-labelledby="hero-heading"
    >
      {/* Background texture overlay */}
      <div className="absolute inset-0 texture-paper opacity-10" />

      {/* Stripe pattern accent - diagonal stripes */}
      <div className="absolute inset-0 opacity-[0.03]">
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

      {/* Star decorations - positioned artfully */}
      <AnimatedStar className="absolute top-[10%] left-[7%] w-14 h-14 md:w-20 md:h-20 rotate-12 opacity-80" delay={0.1} />
      <AnimatedStar className="absolute top-[15%] right-[10%] w-8 h-8 md:w-12 md:h-12 -rotate-12 opacity-70" delay={0.2} />
      <AnimatedStar className="absolute bottom-[15%] left-[8%] w-12 h-12 md:w-16 md:h-16 rotate-45 opacity-75" delay={0.3} />
      <AnimatedStar className="absolute bottom-[10%] right-[7%] w-10 h-10 md:w-14 md:h-14 -rotate-45 opacity-80" delay={0.4} />
      <AnimatedStar className="absolute top-[35%] left-[20%] w-6 h-6 opacity-40" delay={0.5} />
      <AnimatedStar className="absolute bottom-[35%] right-[25%] w-5 h-5 opacity-40" delay={0.6} />
      <AnimatedStar className="absolute top-[60%] right-[15%] w-4 h-4 opacity-30" delay={0.7} />

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        {/* Main headline */}
        <motion.h1 
          id="hero-heading"
          className="text-retro-blue mb-10 text-shadow-hero"
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {APP_CONFIG.uiText.hero.title}
        </motion.h1>

        {/* Accurate description with examples */}
        <motion.p 
          className="lead text-gray-800 mb-16 max-w-3xl mx-auto"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          {APP_CONFIG.uiText.hero.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="transform hover:scale-105 transition-transform duration-200"
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

      {/* Vintage border frame effect */}
      <div className="absolute inset-8 md:inset-16 border-8 border-retro-blue/10 pointer-events-none" />
    </motion.section>
  );
}