import SectionHeading from "@/app/components/shared/SectionHeading";
import ExternalLink from "@/app/components/shared/ExternalLink";
import TexturedCard from "@/app/components/shared/TexturedCard";
import StarDecoration from "@/app/components/shared/StarDecoration";

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

export default function InstallationGuide() {
  return (
    <section className="py-20 px-6 relative bg-white">
      {/* Background decorations */}
      <StarDecoration className="absolute top-[15%] left-[10%] w-10 h-10 opacity-20 rotate-45" />
      <StarDecoration className="absolute bottom-[25%] right-[5%] w-12 h-12 opacity-15 -rotate-12" />
      <StarDecoration className="absolute top-[70%] right-[20%] w-6 h-6 opacity-10" />

      <div className="max-w-5xl mx-auto">
        <SectionHeading level={2} className="text-center mb-8">
          How to Install Trump Goggles
        </SectionHeading>

        <p className="text-lg md:text-xl text-center mb-16 max-w-3xl mx-auto text-gray-700">
          Get Trump Goggles up and running in just a few clicks!
        </p>

        {/* Installation steps */}
        <div className="grid gap-6 mb-12">
          {installSteps.map((step) => (
            <TexturedCard
              key={step.number}
              className="flex items-start gap-6 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              {/* Step number */}
              <div className="flex-shrink-0 w-12 h-12 bg-retro-blue text-retro-cream rounded-full flex items-center justify-center font-black text-xl">
                {step.number}
              </div>

              {/* Step content */}
              <div className="flex-grow">
                <h3 className="font-display text-xl md:text-2xl text-retro-blue mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </TexturedCard>
          ))}
        </div>

        {/* CTAs */}
        <div className="text-center space-y-8">
          {/* Chrome Store button */}
          <div>
            <ExternalLink
              href="https://chromewebstore.google.com/detail/trump-goggles/jffbimfdmgbfannficjejaffmnggoigd"
              variant="button"
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
          <div>
            <p className="text-gray-600 mb-2">Want to see the code?</p>
            <ExternalLink
              href="https://github.com/phrazzld/trump-goggles"
              className="text-lg font-semibold"
            >
              View on GitHub →
            </ExternalLink>
          </div>
        </div>

        {/* Browser compatibility note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            Trump Goggles is compatible with Chrome, Edge, and other
            Chromium-based browsers
          </p>
        </div>
      </div>
    </section>
  );
}