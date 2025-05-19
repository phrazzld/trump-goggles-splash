"use client";

import { motion, Variants } from "framer-motion";
import SectionHeading from "@/app/components/shared/SectionHeading";
import TexturedCard from "@/app/components/shared/TexturedCard";
import AnimatedSection from "@/app/components/shared/AnimatedSection";
import AnimatedStar from "@/app/components/shared/AnimatedStar";

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
    <section aria-labelledby="feature-showcase-heading">
      <AnimatedSection className="py-20 px-6 relative">
      {/* Background accent elements */}
      <AnimatedStar className="absolute top-[20%] left-[5%] w-8 h-8 opacity-30 -rotate-12" delay={0.2} />
      <AnimatedStar className="absolute bottom-[30%] right-[8%] w-10 h-10 opacity-30 rotate-45" delay={0.4} />
      <AnimatedStar className="absolute top-[50%] left-[90%] w-6 h-6 opacity-20" delay={0.6} />

      <div className="max-w-6xl mx-auto">
        <SectionHeading level={2} className="text-center mb-8" id="feature-showcase-heading">
          How Trump Goggles Works
        </SectionHeading>

        <p className="text-xl md:text-2xl text-center mb-16 max-w-4xl mx-auto text-gray-700">
          Trump Goggles automatically translates text as you browse the web,
          converting ordinary phrases into memorable Trumpisms inspired by the
          45th President&apos;s unique speaking style.
        </p>

        {/* Translation examples */}
        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {translations.map((translation, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-7 gap-6 items-center"
              variants={itemVariants}
            >
              {/* Before card */}
              <TexturedCard className="md:col-span-3 bg-gray-50 border-2 border-gray-200">
                <div className="text-center">
                  <span className="block text-sm uppercase tracking-wide text-gray-600 mb-2">
                    Before
                  </span>
                  <p className="text-2xl md:text-3xl font-bold text-gray-800">
                    &ldquo;{translation.before}&rdquo;
                  </p>
                </div>
              </TexturedCard>

              {/* Arrow */}
              <div className="md:col-span-1 text-center hidden md:block">
                <motion.div 
                  className="text-4xl font-black text-retro-blue"
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  →
                </motion.div>
              </div>

              {/* After card */}
              <TexturedCard className="md:col-span-3 bg-retro-blue border-4 border-retro-red shadow-lg transform rotate-1 hover:rotate-0 transition-transform">
                <div className="text-center">
                  <span className="block text-sm uppercase tracking-wide text-retro-cream mb-2">
                    After
                  </span>
                  <p className="text-2xl md:text-3xl font-black text-retro-cream text-shadow-hero">
                    &ldquo;{translation.after}&rdquo;
                  </p>
                </div>
              </TexturedCard>
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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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