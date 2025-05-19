"use client";

import { motion, Variants } from "framer-motion";
import SectionHeading from "@/app/components/shared/SectionHeading";
import ExternalLink from "@/app/components/shared/ExternalLink";
import TexturedCard from "@/app/components/shared/TexturedCard";
import AnimatedSection from "@/app/components/shared/AnimatedSection";
import AnimatedStar from "@/app/components/shared/AnimatedStar";

interface InstallStep {
  number: number;
  title: string;
  description: string;
}

const installSteps: InstallStep[] = [
  {
    number: 1,
    title: "Visit Chrome Web Store",
    description: "Click the button below to go to the Trump Goggles extension page",
  },
  {
    number: 2,
    title: "Add to Chrome",
    description: "Click the \"Add to Chrome\" button on the extension page",
  },
  {
    number: 3,
    title: "Confirm Installation",
    description: "Click \"Add extension\" when Chrome asks for confirmation",
  },
  {
    number: 4,
    title: "Start Browsing!",
    description: "Trump Goggles is now active - watch the web transform!",
  },
];

const stepVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export default function InstallationGuide() {
  return (
    <section aria-labelledby="installation-guide-heading">
      <AnimatedSection className="py-20 px-6 relative bg-white" delay={0.3}>
      {/* Background decorations */}
      <AnimatedStar className="absolute top-[15%] left-[10%] w-10 h-10 opacity-20 rotate-45" delay={0.2} />
      <AnimatedStar className="absolute bottom-[25%] right-[5%] w-12 h-12 opacity-15 -rotate-12" delay={0.4} />
      <AnimatedStar className="absolute top-[70%] right-[20%] w-6 h-6 opacity-10" delay={0.6} />

      <div className="max-w-5xl mx-auto">
        <SectionHeading level={2} className="text-center mb-8" id="installation-guide-heading">
          How to Install Trump Goggles
        </SectionHeading>

        <p className="text-lg md:text-xl text-center mb-16 max-w-3xl mx-auto text-gray-700">
          Get Trump Goggles up and running in just a few clicks!
        </p>

        {/* Installation steps */}
        <motion.div 
          className="grid gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {installSteps.map((step) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <TexturedCard className="flex items-start gap-6 bg-gray-50 hover:bg-gray-100 transition-colors">
                {/* Step number */}
                <motion.div 
                  className="flex-shrink-0 w-12 h-12 bg-retro-blue text-retro-cream rounded-full flex items-center justify-center font-black text-xl"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    delay: step.number * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                >
                  {step.number}
                </motion.div>

                {/* Step content */}
                <div className="flex-grow">
                  <h3 className="font-display text-xl md:text-2xl text-retro-blue mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </TexturedCard>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Chrome Store button */}
          <div>
            <ExternalLink
              href="https://chromewebstore.google.com/detail/trump-goggles/jffbimfdmgbfannficjejaffmnggoigd"
              variant="button"
              ariaLabel="Install Trump Goggles from Chrome Web Store"
              buttonProps={{
                variant: "primary",
                size: "lg",
                className: "text-xl md:text-2xl px-10 py-5",
              }}
            >
              Get Trump Goggles
            </ExternalLink>
          </div>

          {/* GitHub link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 mb-2">Want to see the code?</p>
            <ExternalLink
              href="https://github.com/phrazzld/trump-goggles"
              className="text-lg font-semibold"
              ariaLabel="View Trump Goggles source code on GitHub"
            >
              View on GitHub →
            </ExternalLink>
          </motion.div>
        </motion.div>

        {/* Browser compatibility note */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500">
            Trump Goggles is compatible with Chrome, Edge, and other
            Chromium-based browsers
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
    </section>
  );
}