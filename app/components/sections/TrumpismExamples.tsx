"use client";

import { motion, Variants } from "framer-motion";
import SectionHeading from "@/app/components/shared/SectionHeading";
import TexturedCard from "@/app/components/shared/TexturedCard";
import AnimatedSection from "@/app/components/shared/AnimatedSection";
import AnimatedStar from "@/app/components/shared/AnimatedStar";
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

export default function TrumpismExamples() {
  return (
    <section aria-labelledby="trumpism-examples-heading">
      <AnimatedSection className="py-20 px-6 relative bg-retro-cream" delay={0.2}>
      {/* Background accent elements */}
      <AnimatedStar className="absolute top-[10%] right-[15%] w-12 h-12 opacity-20 rotate-12" delay={0.1} />
      <AnimatedStar className="absolute bottom-[20%] left-[10%] w-8 h-8 opacity-20 -rotate-45" delay={0.3} />
      <AnimatedStar className="absolute top-[50%] left-[5%] w-6 h-6 opacity-15" delay={0.5} />
      <AnimatedStar className="absolute bottom-[10%] right-[5%] w-10 h-10 opacity-15 rotate-30" delay={0.7} />

      <div className="max-w-7xl mx-auto">
        <SectionHeading level={2} className="text-center mb-4" id="trumpism-examples-heading">
          {APP_CONFIG.uiText.trumpismExamplesSection.title}
        </SectionHeading>

        <p className="text-lg md:text-xl text-center mb-16 max-w-3xl mx-auto text-gray-700">
          {APP_CONFIG.uiText.trumpismExamplesSection.subtitle}
        </p>

        {/* Examples grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {APP_CONFIG.trumpismExamples.map((example, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <TexturedCard
                className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl bg-white h-full"
              >
                {/* Card content */}
                <div className="relative z-10">
                  {/* Original */}
                  <div className="mb-6">
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                      {APP_CONFIG.uiText.trumpismExamplesSection.originalLabel}
                    </span>
                    <p className="text-xl md:text-2xl font-semibold text-gray-800 mt-1">
                      &ldquo;{example.original}&rdquo;
                    </p>
                  </div>

                  {/* Arrow separator */}
                  <motion.div 
                    className="text-center my-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-3xl font-black text-retro-red">↓</span>
                  </motion.div>

                  {/* Trumpified */}
                  <div>
                    <span className="text-xs uppercase tracking-wider text-retro-red font-bold">
                      {APP_CONFIG.uiText.trumpismExamplesSection.trumpifiedLabel}
                    </span>
                    <p className="text-xl md:text-2xl font-black text-retro-blue mt-1">
                      &ldquo;{example.trumpified}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-retro-red/5 to-retro-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </TexturedCard>
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