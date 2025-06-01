import type { Meta, StoryObj } from '@storybook/react';
import Hero from './Hero';

const meta = {
  title: 'Sections/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default hero section with full animation sequence. Note the coordinated entrance of stars, heading, description, and CTA buttons.',
      },
    },
  },
};

export const Desktop: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    docs: {
      description: {
        story: 'Desktop viewport (1280px+). Typography and spacing optimized for larger screens with enhanced visual hierarchy.',
      },
    },
  },
};

export const Tablet: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story: 'Tablet viewport (768px). Responsive typography scaling and adjusted star positioning for medium screens.',
      },
    },
  },
};

export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Mobile viewport (375px). Smaller stars, stacked CTA buttons, and mobile-optimized typography. Some decorative stars hidden for clarity.',
      },
    },
  },
};

export const WithReducedMotion: Story = {
  args: {},
  parameters: {
    reducedMotion: 'reduce',
    docs: {
      description: {
        story: 'Hero section with animations disabled for users who prefer reduced motion. All content immediately visible without transitions.',
      },
    },
  },
};