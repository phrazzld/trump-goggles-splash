"use client";

import { motion, Variants } from "framer-motion";
import SectionHeading from "@/app/components/shared/SectionHeading";
import AnimatedSection from "@/app/components/shared/AnimatedSection";

const translations = [
  {
    before: "ISIS",
    after: "Evil Losers",
  },
  {
    before: "Hillary Clinton",
    after: "Crooked Hillary",
  },
  {
    before: "The Media",
    after: "Fake News",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

export default function FeatureShowcase() {
  return (
    <section aria-labelledby="feature-showcase-heading" className="bg-retro-blue relative">
      {/* Subtle diagonal stripe pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 22px)'
        }}
        aria-hidden="true"
      />

      <AnimatedSection className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <SectionHeading level={2} className="text-center mb-8 text-retro-cream" id="feature-showcase-heading">
            How Trump Goggles Works
          </SectionHeading>

          <p className="text-xl md:text-2xl text-center mb-16 max-w-4xl mx-auto text-retro-cream/80">
            Trump Goggles automatically translates text as you browse the web,
            converting ordinary phrases into memorable Trumpisms inspired by the
            45th President&apos;s unique speaking style.
          </p>

          {/* Translation examples - horizontal layout on dark background */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {translations.map((translation, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
                variants={itemVariants}
              >
                {/* Before */}
                <div className="bg-retro-cream/10 backdrop-blur-sm border-2 border-retro-cream/20 rounded-none px-8 py-4 min-w-[200px]">
                  <span className="block text-xs uppercase tracking-widest text-retro-cream/60 mb-1">
                    Before
                  </span>
                  <p className="text-xl md:text-2xl font-bold text-retro-cream">
                    &ldquo;{translation.before}&rdquo;
                  </p>
                </div>

                {/* Arrow */}
                <motion.div
                  className="text-3xl font-black text-retro-gold"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  →
                </motion.div>

                {/* After */}
                <div className="bg-retro-red border-4 border-retro-gold px-8 py-4 min-w-[200px] transform rotate-1 hover:rotate-0 transition-transform">
                  <span className="block text-xs uppercase tracking-widest text-retro-cream/80 mb-1">
                    Trumpified
                  </span>
                  <p className="text-xl md:text-2xl font-black text-retro-cream text-shadow-hero">
                    &ldquo;{translation.after}&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Explanation */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-retro-cream/70 max-w-3xl mx-auto">
              The extension works in real-time, detecting key phrases and names
              across any website and replacing them with Trump&apos;s signature
              nicknames and expressions. It&apos;s like seeing the internet through
              Trump-tinted glasses!
            </p>
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
}