import type { Meta, StoryObj } from '@storybook/react';
import FeatureShowcase from './FeatureShowcase';

const meta = {
  title: 'Sections/FeatureShowcase',
  component: FeatureShowcase,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Desktop: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const Tablet: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const WithReducedMotion: Story = {
  args: {},
  parameters: {
    reducedMotion: 'reduce',
  },
};