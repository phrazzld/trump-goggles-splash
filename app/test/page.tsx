import Features from '../components/Features';

export default function TestPage() {
  return (
    <>
      <div className="p-8 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Color Test</h1>
        
        <div className="space-y-2">
          <div className="bg-retro-red text-white p-4">bg-retro-red</div>
          <div className="bg-retro-blue text-white p-4">bg-retro-blue</div>
          <div className="bg-retro-cream text-black p-4">bg-retro-cream</div>
          <div className="bg-retro-gold text-black p-4">bg-retro-gold</div>
        </div>

        <div className="space-y-2">
          <div className="text-retro-red">text-retro-red</div>
          <div className="text-retro-blue">text-retro-blue</div>
          <div className="text-retro-cream bg-black">text-retro-cream</div>
          <div className="text-retro-gold">text-retro-gold</div>
        </div>

        <div className="space-y-2">
          <div className="border-2 border-retro-red p-4">border-retro-red</div>
          <div className="border-2 border-retro-blue p-4">border-retro-blue</div>
          <div className="border-double-retro p-4">border-double-retro</div>
          <div className="shadow-vintage p-4">shadow-vintage</div>
        </div>
      </div>
      
      <hr className="my-8" />
      
      <div className="bg-retro-cream">
        <h1 className="text-2xl font-bold p-8">Features Component Test</h1>
        <Features />
      </div>
    </>
  );
}