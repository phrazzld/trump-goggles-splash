"use client";

import { motion } from "framer-motion";
import ExternalLink from "@/app/components/shared/ExternalLink";
import AnimatedSection from "@/app/components/shared/AnimatedSection";
import AnimatedStar from "@/app/components/shared/AnimatedStar";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
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
            href="https://github.com/phrazzld/trump-goggles"
            className="text-retro-cream hover:text-retro-gold transition-colors text-lg font-semibold"
          >
            View on GitHub →
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
          Trump Goggles is a browser extension created for entertainment purposes
          only. This extension and its creators are not affiliated with,
          endorsed by, or connected to Donald Trump or any of his associated
          entities. All trademarks are property of their respective owners.
        </motion.div>

        {/* Made with love */}
        <motion.div 
          className="text-xs text-retro-cream/40 pt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          viewport={{ once: true }}
        >
          Made with <span className="text-retro-red">♥</span> for the internet
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}