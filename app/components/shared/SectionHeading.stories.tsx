import type { Meta, StoryObj } from '@storybook/react';
import SectionHeading from './SectionHeading';

const meta = {
  title: 'Shared/SectionHeading',
  component: SectionHeading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'select', options: [1, 2, 3, 4, 5, 6] },
      description: 'Semantic heading level (h1-h6)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    id: {
      control: 'text',
      description: 'ID attribute for linking',
    },
    children: {
      control: 'text',
      description: 'Heading text content',
    },
  },
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    level: 2,
    children: 'Default Section Heading',
  },
};

export const Level1: Story = {
  args: {
    level: 1,
    children: 'Heading Level 1',
  },
};

export const Level2: Story = {
  args: {
    level: 2,
    children: 'Heading Level 2',
  },
};

export const Level3: Story = {
  args: {
    level: 3,
    children: 'Heading Level 3',
  },
};

export const Level4: Story = {
  args: {
    level: 4,
    children: 'Heading Level 4',
  },
};

export const Level5: Story = {
  args: {
    level: 5,
    children: 'Heading Level 5',
  },
};

export const Level6: Story = {
  args: {
    level: 6,
    children: 'Heading Level 6',
  },
};

export const WithId: Story = {
  args: {
    level: 2,
    children: 'Section with ID',
    id: 'section-id',
  },
};

export const WithCustomClass: Story = {
  args: {
    level: 2,
    children: 'Custom Styled Heading',
    className: 'text-retro-red underline',
  },
};

export const LongText: Story = {
  args: {
    level: 2,
    children: 'This is a very long section heading that demonstrates how the component handles extended text content',
  },
};