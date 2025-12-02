"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/app/components/shared/SectionHeading";
import ExternalLink from "@/app/components/shared/ExternalLink";
import AnimatedSection from "@/app/components/shared/AnimatedSection";
import { APP_CONFIG } from "@/app/config/app-config";

export default function InstallationGuide() {
  return (
    <section aria-labelledby="installation-guide-heading" className="bg-retro-red relative">
      <AnimatedSection className="py-20 md:py-28 px-6 relative" delay={0.3}>
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading level={2} className="text-retro-cream mb-8" id="installation-guide-heading">
            Ready to See the Web Differently?
          </SectionHeading>

          {/* Large CTA button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ExternalLink
              href={APP_CONFIG.urls.chromeStore}
              variant="button"
              ariaLabel="Install Trump Goggles from Chrome Web Store"
              buttonProps={{
                variant: "secondary",
                size: "lg",
                className: "text-xl md:text-2xl px-10 md:px-14 py-5 md:py-6 bg-retro-cream text-retro-red border-retro-cream hover:bg-retro-gold hover:border-retro-gold hover:text-retro-black font-black rounded-none shadow-lg",
              }}
            >
              {APP_CONFIG.uiText.installationGuide.ctaButtonText}
            </ExternalLink>
          </motion.div>

          {/* Simple steps as inline list */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center items-center gap-4 md:gap-8 text-retro-cream/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-lg">1. Click Install</span>
            <span className="text-retro-cream/50 hidden md:inline">→</span>
            <span className="text-lg">2. Add to Chrome</span>
            <span className="text-retro-cream/50 hidden md:inline">→</span>
            <span className="text-lg">3. Enjoy!</span>
          </motion.div>

          {/* GitHub link - subtle */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <ExternalLink
              href={APP_CONFIG.urls.githubRepo}
              className="text-retro-cream/70 hover:text-retro-cream transition-colors underline underline-offset-4"
              ariaLabel="View Trump Goggles source code on GitHub"
            >
              {APP_CONFIG.uiText.installationGuide.githubLinkText}
            </ExternalLink>
          </motion.div>

          {/* Browser compatibility note */}
          <motion.p
            className="mt-8 text-sm text-retro-cream/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {APP_CONFIG.uiText.installationGuide.browserCompatibilityNote}
          </motion.p>
        </div>
      </AnimatedSection>
    </section>
  );
}