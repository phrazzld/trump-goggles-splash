import type { Meta, StoryObj } from '@storybook/react';
import StarDecoration from './StarDecoration';

const meta = {
  title: 'Shared/StarDecoration',
  component: StarDecoration,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number' },
      description: 'Star size in pixels',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof StarDecoration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: 16,
  },
};

export const Medium: Story = {
  args: {
    size: 24,
  },
};

export const Large: Story = {
  args: {
    size: 48,
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 64,
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'opacity-50',
  },
};

export const ColorVariations: Story = {
  render: () => (
    <div className="flex gap-4">
      <StarDecoration className="text-retro-gold fill-retro-gold" />
      <StarDecoration className="text-retro-red fill-retro-red" />
      <StarDecoration className="text-retro-blue fill-retro-blue" />
      <StarDecoration className="text-retro-black fill-retro-black" />
    </div>
  ),
};

export const SizeComparison: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <StarDecoration size={16} />
      <StarDecoration size={24} />
      <StarDecoration size={32} />
      <StarDecoration size={48} />
      <StarDecoration size={64} />
    </div>
  ),
};

export const DecorationPattern: Story = {
  render: () => (
    <div className="relative w-64 h-64">
      <StarDecoration className="absolute top-0 left-0" size={32} />
      <StarDecoration className="absolute top-0 right-0" size={32} />
      <StarDecoration className="absolute bottom-0 left-0" size={32} />
      <StarDecoration className="absolute bottom-0 right-0" size={32} />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-retro-blue font-display text-xl">Content</p>
      </div>
    </div>
  ),
};