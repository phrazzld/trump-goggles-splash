import { Zap, Sliders, Shield, ToggleRight } from 'lucide-react';
import TexturedCard from './shared/TexturedCard';
import { APP_CONFIG } from '@/app/config/app-config';

const featureIcons = [
  { icon: Zap },
  { icon: Sliders },
  { icon: Shield },
  { icon: ToggleRight }
];

export default function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-retro-blue mb-12 text-shadow-vintage">
          {APP_CONFIG.uiText.features.sectionTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {APP_CONFIG.uiText.features.featureItems.map((feature, index) => {
            const Icon = featureIcons[index]?.icon;
            if (!Icon) return null;
            
            return (
              <TexturedCard key={index}>
                <div className="p-8 text-center">
                  <Icon className="w-12 h-12 text-retro-red mx-auto mb-4" aria-label={`${feature.title} icon`} />
                  <h3 className="text-retro-blue mb-3 text-shadow-vintage">
                    {feature.title}
                  </h3>
                  <p className="text-retro-black">
                    {feature.description}
                  </p>
                </div>
              </TexturedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}