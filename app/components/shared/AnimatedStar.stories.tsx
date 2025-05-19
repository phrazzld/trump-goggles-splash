import type { Meta, StoryObj } from '@storybook/react';
import AnimatedStar from './AnimatedStar';

const meta = {
  title: 'Shared/AnimatedStar',
  component: AnimatedStar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'CSS classes for positioning and styling',
    },
    delay: {
      control: { type: 'number', step: 0.1 },
      description: 'Animation delay in seconds',
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