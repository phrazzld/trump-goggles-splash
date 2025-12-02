"use client";

import { motion, Variants } from "framer-motion";
import SectionHeading from "@/app/components/shared/SectionHeading";
import AnimatedSection from "@/app/components/shared/AnimatedSection";
import { APP_CONFIG } from "@/app/config/app-config";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Slight random rotations for organic feel
const rotations = [-2, 1, -1, 2, -1.5, 1.5];

export default function TrumpismExamples() {
  return (
    <section id="trumpism-examples" aria-labelledby="trumpism-examples-heading" className="bg-retro-cream">
      <AnimatedSection className="py-20 px-6 relative" delay={0.2}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading level={2} className="text-center mb-4" id="trumpism-examples-heading">
            {APP_CONFIG.uiText.trumpismExamplesSection.title}
          </SectionHeading>

          <p className="text-lg md:text-xl text-center mb-16 max-w-3xl mx-auto text-gray-700">
            {APP_CONFIG.uiText.trumpismExamplesSection.subtitle}
          </p>

          {/* Examples grid - Ballot/flash card style */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {APP_CONFIG.trumpismExamples.map((example, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative"
                style={{ transform: `rotate(${rotations[index % rotations.length]}deg)` }}
                whileHover={{ rotate: 0, y: -4, transition: { duration: 0.2 } }}
              >
                {/* Ballot-style card */}
                <div className="relative bg-retro-cream border-4 border-retro-black p-6 pt-10 shadow-lg h-full">
                  {/* "TRUMP'D" stamp in corner */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-retro-red rounded-full flex items-center justify-center transform rotate-12 shadow-md border-2 border-retro-gold">
                    <span className="text-[10px] font-black text-retro-cream uppercase leading-tight text-center">
                      Trump&apos;d
                    </span>
                  </div>

                  {/* Punched hole effect */}
                  <div className="absolute top-3 left-3 w-5 h-5 rounded-full border-4 border-retro-black/20" aria-hidden="true" />

                  {/* Original */}
                  <div className="border-b-2 border-dashed border-retro-black/30 pb-4 mb-4">
                    <span className="text-xs uppercase tracking-widest text-retro-black/50 font-bold">
                      {APP_CONFIG.uiText.trumpismExamplesSection.originalLabel}
                    </span>
                    <p className="text-xl md:text-2xl font-black text-retro-black mt-1">
                      &ldquo;{example.original}&rdquo;
                    </p>
                  </div>

                  {/* Trumpified */}
                  <div>
                    <span className="text-xs uppercase tracking-widest text-retro-red font-bold">
                      {APP_CONFIG.uiText.trumpismExamplesSection.trumpifiedLabel}
                    </span>
                    <p className="text-xl md:text-2xl font-black text-retro-blue mt-1">
                      &ldquo;{example.trumpified}&rdquo;
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom message */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600">
              {APP_CONFIG.uiText.trumpismExamplesSection.bottomMessage}
            </p>
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
}