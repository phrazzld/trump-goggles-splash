import type { Meta, StoryObj } from '@storybook/react';
import AnimatedStar from './AnimatedStar';

const meta = {
  title: 'Shared/AnimatedStar',
  component: AnimatedStar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Animated star decoration with smooth entrance animations and performance optimizations.

### Key Features (from T001-T003):
- **Smooth animations**: 0.8s duration with easeOut easing eliminates "snapping"
- **Predictable timing**: Configurable delays enable coordinated sequences
- **GPU acceleration**: Uses \`will-change\` for optimal performance
- **Accessibility**: Respects \`prefers-reduced-motion\` preference
- **Viewport-based**: Animates only when visible (50% threshold)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'CSS classes for positioning and styling. Typically includes absolute positioning and responsive sizing.',
    },
    delay: {
      control: { type: 'number', step: 0.1, min: 0, max: 2 },
      description: 'Animation delay in seconds. Used to create staggered entrance effects in multi-star compositions.',
    },
    'data-decorative': {
      control: 'text',
      description: 'Marks element as decorative for accessibility tools',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
} satisfies Meta<typeof AnimatedStar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="relative w-64 h-64 border-2 border-dashed border-retro-blue">
        <Story />
      </div>
    ),
  ],
};

export const Positioned: Story = {
  args: {
    className: 'absolute top-4 right-4',
  },
  decorators: [
    (Story) => (
      <div className="relative w-64 h-64 border-2 border-dashed border-retro-blue">
        <Story />
      </div>
    ),
  ],
};

export const WithDelay: Story = {
  args: {
    delay: 1,
    className: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  },
  decorators: [
    (Story) => (
      <div className="relative w-64 h-64 border-2 border-dashed border-retro-blue">
        <Story />
      </div>
    ),
  ],
};

export const MultipleStars: Story = {
  args: {
    className: "absolute top-4 left-4",
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the coordinated animation sequence with predictable delays (0.2s intervals). Each star animates smoothly without the "snapping" that occurred with spring physics.',
      },
    },
  },
  render: () => (
    <div className="relative w-96 h-96 border-2 border-dashed border-retro-blue">
      <AnimatedStar className="absolute top-4 left-4" delay={0} />
      <AnimatedStar className="absolute top-4 right-4" delay={0.2} />
      <AnimatedStar className="absolute bottom-4 left-4" delay={0.4} />
      <AnimatedStar className="absolute bottom-4 right-4" delay={0.6} />
      <AnimatedStar className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" delay={0.8} />
    </div>
  ),
};

export const ScatteredPattern: Story = {
  args: {
    className: "absolute top-[10%] left-[15%]",
  },
  render: () => (
    <div className="relative w-full h-96 border-2 border-dashed border-retro-blue bg-retro-cream">
      <AnimatedStar className="absolute top-[10%] left-[15%]" delay={0} />
      <AnimatedStar className="absolute top-[25%] right-[20%]" delay={0.15} />
      <AnimatedStar className="absolute top-[40%] left-[40%]" delay={0.3} />
      <AnimatedStar className="absolute bottom-[30%] right-[35%]" delay={0.45} />
      <AnimatedStar className="absolute bottom-[15%] left-[25%]" delay={0.6} />
      <AnimatedStar className="absolute top-[60%] right-[10%]" delay={0.75} />
    </div>
  ),
};

export const CornersOnly: Story = {
  args: {
    className: "absolute -top-3 -left-3",
  },
  render: () => (
    <div className="relative w-64 h-64 border-4 border-solid border-retro-blue rounded-lg">
      <AnimatedStar className="absolute -top-3 -left-3" delay={0} />
      <AnimatedStar className="absolute -top-3 -right-3" delay={0.2} />
      <AnimatedStar className="absolute -bottom-3 -left-3" delay={0.4} />
      <AnimatedStar className="absolute -bottom-3 -right-3" delay={0.6} />
    </div>
  ),
};

export const LoadingSequence: Story = {
  args: {
    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    delay: 0,
  },
  render: () => (
    <div className="relative w-32 h-32 border-2 border-dashed border-retro-blue">
      <AnimatedStar 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
        delay={0} 
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-dashed border-retro-red rounded-full">
        <AnimatedStar 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75" 
          delay={0.3} 
        />
      </div>
    </div>
  ),
};