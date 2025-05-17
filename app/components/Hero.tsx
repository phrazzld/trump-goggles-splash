import RetroButton from './shared/RetroButton'
import StarDecoration from './shared/StarDecoration'

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden texture-paper">
      {/* Decorative Stars */}
      <StarDecoration 
        className="absolute top-8 left-8 md:top-12 md:left-12" 
        size={48}
      />
      <StarDecoration 
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12" 
        size={48}
      />
      
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-retro-blue text-shadow-vintage mb-6">
            Trump Goggles
          </h1>
          <p className="font-body text-lg md:text-xl lg:text-2xl text-retro-black mb-8">
            See every Trump-related headline, story, and mention on any webpage
          </p>
          <RetroButton variant="primary" size="lg">
            Install Trump Goggles
          </RetroButton>
        </div>
      </div>
      
      {/* Stripe Accent */}
      <div className="absolute bottom-0 inset-x-0 h-2 bg-gradient-to-r from-retro-red via-retro-blue to-retro-red opacity-50" />
    </section>
  )
}

export default Hero