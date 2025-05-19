import type { Meta, StoryObj } from '@storybook/react';
import TrumpismExamples from './TrumpismExamples';

const meta = {
  title: 'Sections/TrumpismExamples',
  component: TrumpismExamples,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TrumpismExamples>;

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

export const GridLayout: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Shows how the grid adjusts to different screen sizes',
      },
    },
  },
};