import { Zap, Sliders, Shield, ToggleRight, LucideIcon } from 'lucide-react';
import TexturedCard from './shared/TexturedCard';
import { APP_CONFIG } from '@/app/config/app-config';

// Type-safe icon registry mapping icon names to Lucide components
export const ICON_REGISTRY = {
  zap: Zap,
  sliders: Sliders,
  shield: Shield,
  toggleRight: ToggleRight
} as const satisfies Record<string, LucideIcon>;

// Derive IconName type from registry keys
export type IconName = keyof typeof ICON_REGISTRY;

export default function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-retro-blue mb-12 text-shadow-vintage">
          {APP_CONFIG.uiText.features.sectionTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {APP_CONFIG.uiText.features.featureItems.map((feature, index) => {
            const Icon = ICON_REGISTRY[feature.iconName];
            
            return (
              <TexturedCard key={feature.id || index}>
                <div className="p-8 text-center">
                  <Icon className="w-12 h-12 text-retro-red mx-auto mb-4" aria-label={feature.iconLabel} />
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