import RetroButton from './shared/RetroButton';
import StarDecoration from './shared/StarDecoration';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background texture overlay */}
      <div className="absolute inset-0 texture-paper opacity-10" />
      
      {/* Stripe pattern accent - diagonal stripes */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 50px,
              #B91C1C 50px,
              #B91C1C 54px,
              transparent 54px,
              transparent 104px,
              #1E3A8A 104px,
              #1E3A8A 108px
            )`
          }}
        />
      </div>

      {/* Star decorations - positioned artfully */}
      <StarDecoration className="absolute top-[10%] left-[7%] w-14 h-14 md:w-20 md:h-20 rotate-12 opacity-80" />
      <StarDecoration className="absolute top-[15%] right-[10%] w-8 h-8 md:w-12 md:h-12 -rotate-12 opacity-70" />
      <StarDecoration className="absolute bottom-[15%] left-[8%] w-12 h-12 md:w-16 md:h-16 rotate-45 opacity-75" />
      <StarDecoration className="absolute bottom-[10%] right-[7%] w-10 h-10 md:w-14 md:h-14 -rotate-45 opacity-80" />
      <StarDecoration className="absolute top-[35%] left-[20%] w-6 h-6 opacity-40" />
      <StarDecoration className="absolute bottom-[35%] right-[25%] w-5 h-5 opacity-40" />
      <StarDecoration className="absolute top-[60%] right-[15%] w-4 h-4 opacity-30" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Main headline */}
        <h1 className="text-retro-blue mb-10 text-shadow-hero">
          Trump Goggles
        </h1>
        
        {/* Tagline */}
        <p className="lead text-gray-800 mb-16 max-w-3xl mx-auto">
          See every Trump-related headline, story, and mention on any webpage
        </p>
        
        {/* CTA Button */}
        <div className="transform hover:scale-105 transition-transform duration-200">
          <RetroButton variant="primary" size="lg" className="text-xl md:text-2xl px-10 py-5">
            Install Trump Goggles
          </RetroButton>
        </div>
      </div>

      {/* Vintage border frame effect */}
      <div className="absolute inset-8 md:inset-16 border-8 border-retro-blue/10 pointer-events-none" />
    </section>
  );
}