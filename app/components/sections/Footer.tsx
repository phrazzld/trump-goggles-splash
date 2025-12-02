"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import ExternalLink from "@/app/components/shared/ExternalLink";
import AnimatedSection from "@/app/components/shared/AnimatedSection";
import { APP_CONFIG } from "@/app/config/app-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-retro-blue overflow-hidden">
      {/* Diagonal stripe texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 22px)'
        }}
        aria-hidden="true"
      />

      {/* Gold stripe top */}
      <div className="h-2 bg-retro-gold" aria-hidden="true" />

      <AnimatedSection
        className="relative py-10 md:py-12 px-6"
        delay={0.4}
        customVariants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
      >
        {/* Main content - horizontal bumper sticker layout */}
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Left: Brand mark */}
          <div className="text-center md:text-left">
            <span className="text-2xl md:text-3xl font-black text-retro-cream">TRUMP GOGGLES</span>
            <p className="text-retro-cream/60 text-sm mt-1">See the web differently&trade;</p>
          </div>

          {/* Center: Star decoration */}
          <div className="hidden md:flex items-center gap-2" aria-hidden="true">
            <Star className="w-4 h-4 text-retro-gold fill-retro-gold" />
            <Star className="w-6 h-6 text-retro-gold fill-retro-gold" />
            <Star className="w-4 h-4 text-retro-gold fill-retro-gold" />
          </div>

          {/* Right: Links */}
          <div className="flex items-center gap-4 md:gap-6 text-retro-cream">
            <ExternalLink
              href={APP_CONFIG.urls.githubRepo}
              className="hover:text-retro-gold transition-colors font-semibold"
              ariaLabel="View Trump Goggles source code on GitHub"
            >
              GitHub
            </ExternalLink>
            <span className="text-retro-cream/30">|</span>
            <span className="text-sm text-retro-cream/50">&copy; {currentYear}</span>
          </div>
        </motion.div>

        {/* Disclaimer - small, subtle */}
        <motion.p
          className="text-center text-xs text-retro-cream/30 mt-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {APP_CONFIG.footerText.disclaimer}
        </motion.p>
      </AnimatedSection>

      {/* Red stripe bottom */}
      <div className="h-2 bg-retro-red" aria-hidden="true" />
    </footer>
  );
}