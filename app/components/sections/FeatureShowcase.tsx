import SectionHeading from "@/app/components/shared/SectionHeading";
import TexturedCard from "@/app/components/shared/TexturedCard";
import StarDecoration from "@/app/components/shared/StarDecoration";

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

export default function FeatureShowcase() {
  return (
    <section className="py-20 px-6 relative">
      {/* Background accent elements */}
      <StarDecoration className="absolute top-[20%] left-[5%] w-8 h-8 opacity-30 -rotate-12" />
      <StarDecoration className="absolute bottom-[30%] right-[8%] w-10 h-10 opacity-30 rotate-45" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading level={2} className="text-center mb-8">
          How Trump Goggles Works
        </SectionHeading>

        <p className="text-xl md:text-2xl text-center mb-16 max-w-4xl mx-auto text-gray-700">
          Trump Goggles automatically translates text as you browse the web,
          converting ordinary phrases into memorable Trumpisms inspired by the
          45th President&apos;s unique speaking style.
        </p>

        {/* Translation examples */}
        <div className="space-y-12">
          {translations.map((translation, index) => (
            <div
              key={index}
              className="grid md:grid-cols-7 gap-6 items-center"
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
                <div className="text-4xl font-black text-retro-blue">→</div>
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
            </div>
          ))}
        </div>

        {/* Explanation */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The extension works in real-time, detecting key phrases and names
            across any website and replacing them with Trump&apos;s signature
            nicknames and expressions. It&apos;s like seeing the internet through
            Trump-tinted glasses!
          </p>
        </div>
      </div>
    </section>
  );
}