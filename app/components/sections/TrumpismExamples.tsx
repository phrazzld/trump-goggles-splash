import SectionHeading from "@/app/components/shared/SectionHeading";
import TexturedCard from "@/app/components/shared/TexturedCard";
import StarDecoration from "@/app/components/shared/StarDecoration";

interface TrumpismExample {
  original: string;
  trumpified: string;
}

const examples: TrumpismExample[] = [
  { original: "ISIS", trumpified: "Evil Losers" },
  { original: "Hillary Clinton", trumpified: "Crooked Hillary" },
  { original: "Climate Change", trumpified: "The Chinese Hoax" },
  { original: "The Media", trumpified: "Fake News" },
  { original: "North Korea", trumpified: "Rocket Man" },
  { original: "Trade Deficit", trumpified: "Terrible Trade Deals" },
];

export default function TrumpismExamples() {
  return (
    <section className="py-20 px-6 relative bg-retro-cream">
      {/* Background accent elements */}
      <StarDecoration className="absolute top-[10%] right-[15%] w-12 h-12 opacity-20 rotate-12" />
      <StarDecoration className="absolute bottom-[20%] left-[10%] w-8 h-8 opacity-20 -rotate-45" />
      <StarDecoration className="absolute top-[50%] left-[5%] w-6 h-6 opacity-15" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading level={2} className="text-center mb-4">
          Iconic Trumpisms
        </SectionHeading>

        <p className="text-lg md:text-xl text-center mb-16 max-w-3xl mx-auto text-gray-700">
          See the most memorable translations that give the internet a whole new
          personality!
        </p>

        {/* Examples grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <TexturedCard
              key={index}
              className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white"
            >
              {/* Card content */}
              <div className="relative z-10">
                {/* Original */}
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Original
                  </span>
                  <p className="text-xl md:text-2xl font-semibold text-gray-800 mt-1">
                    &ldquo;{example.original}&rdquo;
                  </p>
                </div>

                {/* Arrow separator */}
                <div className="text-center my-4">
                  <span className="text-3xl font-black text-retro-red">↓</span>
                </div>

                {/* Trumpified */}
                <div>
                  <span className="text-xs uppercase tracking-wider text-retro-red font-bold">
                    Trumpified
                  </span>
                  <p className="text-xl md:text-2xl font-black text-retro-blue mt-1">
                    &ldquo;{example.trumpified}&rdquo;
                  </p>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-retro-red/5 to-retro-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </TexturedCard>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            And many more entertaining translations that make browsing the web
            an unforgettable experience!
          </p>
        </div>
      </div>
    </section>
  );
}