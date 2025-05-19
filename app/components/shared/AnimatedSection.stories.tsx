import type { Meta, StoryObj } from '@storybook/react';
import AnimatedSection from './AnimatedSection';

const meta = {
  title: 'Shared/AnimatedSection',
  component: AnimatedSection,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    customVariants: {
      control: 'object',
      description: 'Custom animation variants',
    },
    delay: {
      control: { type: 'number', step: 0.1 },
      description: 'Animation delay in seconds',
    },
    amount: {
      control: { type: 'number', min: 0, max: 1, step: 0.1 },
      description: 'Viewport amount to trigger animation',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    children: {
      control: 'text',
      description: 'Section content',
    },
  },
} satisfies Meta<typeof AnimatedSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-8 bg-retro-cream text-retro-black rounded-lg">
        <h2 className="text-2xl font-display mb-4">Animated Section</h2>
        <p>This content appears with a default fade-up animation</p>
      </div>
    ),
  },
};

export const WithDelay: Story = {
  args: {
    delay: 0.5,
    children: (
      <div className="p-8 bg-retro-blue text-retro-cream rounded-lg">
        <h2 className="text-2xl font-display">Delayed Animation (0.5s)</h2>
      </div>
    ),
  },
};

export const CustomVariants: Story = {
  args: {
    customVariants: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    children: (
      <div className="p-8 bg-retro-red text-retro-cream rounded-lg">
        <h2 className="text-2xl font-display">Custom Slide Animation</h2>
      </div>
    ),
  },
};

export const ScaleAnimation: Story = {
  args: {
    customVariants: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    children: (
      <div className="p-8 bg-retro-gold text-retro-black rounded-lg">
        <h2 className="text-2xl font-display">Scale Animation</h2>
      </div>
    ),
  },
};

export const QuickViewportTrigger: Story = {
  args: {
    amount: 0.1,
    children: (
      <div className="p-8 bg-retro-black text-retro-cream rounded-lg">
        <h2 className="text-2xl font-display">Quick Trigger (10% visible)</h2>
        <p>This animates when just 10% is visible</p>
      </div>
    ),
  },
};

export const SlowViewportTrigger: Story = {
  args: {
    amount: 0.8,
    children: (
      <div className="p-8 bg-retro-cream text-retro-black rounded-lg">
        <h2 className="text-2xl font-display">Slow Trigger (80% visible)</h2>
        <p>This animates when 80% is visible</p>
      </div>
    ),
  },
};

export const SequentialAnimations: Story = {
  args: {
    children: <div>Sequential</div>, // Required arg
  },
  render: () => (
    <div className="space-y-4">
      <AnimatedSection delay={0}>
        <div className="p-4 bg-retro-blue text-retro-cream rounded">First</div>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="p-4 bg-retro-red text-retro-cream rounded">Second</div>
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <div className="p-4 bg-retro-gold text-retro-black rounded">Third</div>
      </AnimatedSection>
    </div>
  ),
};

export const ComplexAnimation: Story = {
  args: {
    customVariants: {
      hidden: { 
        opacity: 0, 
        y: 100,
        rotate: -10
      },
      visible: { 
        opacity: 1, 
        y: 0,
        rotate: 0,
        transition: {
          duration: 0.8,
          ease: [0.6, -0.05, 0.01, 0.99]
        }
      },
    },
    children: (
      <div className="p-8 bg-gradient-to-r from-retro-blue to-retro-red text-retro-cream rounded-lg">
        <h2 className="text-3xl font-display mb-4">Complex Animation</h2>
        <p>With rotation and custom easing</p>
      </div>
    ),
  },
};