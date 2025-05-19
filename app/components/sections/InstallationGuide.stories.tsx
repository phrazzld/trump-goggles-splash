import type { Meta, StoryObj } from '@storybook/react';
import InstallationGuide from './InstallationGuide';

const meta = {
  title: 'Sections/InstallationGuide',
  component: InstallationGuide,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InstallationGuide>;

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