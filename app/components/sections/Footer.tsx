"use client";

import { motion } from "framer-motion";
import ExternalLink from "@/app/components/shared/ExternalLink";
import AnimatedSection from "@/app/components/shared/AnimatedSection";
import AnimatedStar from "@/app/components/shared/AnimatedStar";
import { APP_CONFIG } from "@/app/config/app-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <AnimatedSection 
        className="relative bg-retro-black text-retro-cream py-12 px-6" 
        delay={0.4}
        customVariants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
      >
      {/* Decorative elements */}
      <AnimatedStar className="absolute top-[20%] left-[5%] w-6 h-6 opacity-20" delay={0.1} />
      <AnimatedStar className="absolute bottom-[30%] right-[10%] w-8 h-8 opacity-20 rotate-45" delay={0.3} />

      <motion.div 
        className="max-w-4xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ExternalLink
            href={APP_CONFIG.urls.githubRepo}
            className="text-retro-cream hover:text-retro-gold transition-colors text-lg font-semibold"
            ariaLabel="View Trump Goggles source code on GitHub"
          >
            {APP_CONFIG.footerText.viewOnGithub}
          </ExternalLink>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="text-sm text-retro-cream/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
        >
          © {currentYear} Trump Goggles. All rights reserved.
        </motion.div>

        {/* Disclaimer */}
        <motion.div 
          className="text-xs text-retro-cream/50 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {APP_CONFIG.footerText.disclaimer}
        </motion.div>

        {/* Made with love */}
        <motion.div 
          className="text-xs text-retro-cream/40 pt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          viewport={{ once: true }}
        >
          {APP_CONFIG.footerText.madeWithLove} for the internet
        </motion.div>
      </motion.div>
    </AnimatedSection>
    </footer>
  );
}