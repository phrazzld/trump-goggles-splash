import { Zap, Sliders, Shield, ToggleRight } from 'lucide-react';
import TexturedCard from './shared/TexturedCard';

const features = [
  {
    icon: Zap,
    title: 'Instant Processing',
    description: 'Transform the web as you browse with lightning-fast text replacement.'
  },
  {
    icon: Sliders,
    title: 'Customizable Filters',
    description: 'Choose your preferred language style and customize replacement patterns.'
  },
  {
    icon: Shield,
    title: 'Privacy Focused',
    description: 'No data collection - everything runs locally in your browser.'
  },
  {
    icon: ToggleRight,
    title: 'Easy Toggle',
    description: 'Enable or disable with one click from your browser toolbar.'
  }
];

export default function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-retro-blue mb-12 text-shadow-vintage">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <TexturedCard key={index}>
                <div className="p-8 text-center">
                  <Icon className="w-12 h-12 text-retro-red mx-auto mb-4" />
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