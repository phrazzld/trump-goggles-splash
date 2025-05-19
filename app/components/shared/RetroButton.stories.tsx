import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import RetroButton from './RetroButton';

const meta = {
  title: 'Shared/RetroButton',
  component: RetroButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'secondary'] },
      description: 'Button visual variant',
    },
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
      description: 'Button size',
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof RetroButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click Me',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const PrimaryLarge: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Get Started',
  },
};

export const SecondarySmall: Story = {
  args: {
    variant: 'secondary',
    size: 'sm',
    children: 'Learn More',
  },
};

export const WithCustomClass: Story = {
  args: {
    children: 'Custom Styled',
    className: 'shadow-2xl',
  },
};

export const LongText: Story = {
  args: {
    children: 'This is a button with very long text content',
  },
};

export const AllSizes: Story = {
  args: {
    children: "Button",
  },
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <RetroButton size="sm">Small</RetroButton>
      <RetroButton size="md">Medium</RetroButton>
      <RetroButton size="lg">Large</RetroButton>
    </div>
  ),
};

export const AllVariants: Story = {
  args: {
    children: "Button",
  },
  render: () => (
    <div className="flex gap-4">
      <RetroButton variant="primary">Primary</RetroButton>
      <RetroButton variant="secondary">Secondary</RetroButton>
    </div>
  ),
};