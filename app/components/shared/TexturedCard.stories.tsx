import type { Meta, StoryObj } from '@storybook/react';
import TexturedCard from './TexturedCard';

const meta = {
  title: 'Shared/TexturedCard',
  component: TexturedCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    children: {
      control: 'text',
      description: 'Card content',
    },
  },
} satisfies Meta<typeof TexturedCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a textured card',
  },
};

export const WithParagraph: Story = {
  args: {
    children: (
      <p className="text-retro-black">
        This card contains a paragraph with styled text.
      </p>
    ),
  },
};

export const ComplexContent: Story = {
  args: {
    children: (
      <>
        <h3 className="text-2xl font-display text-retro-blue mb-4">Card Title</h3>
        <p className="text-retro-black mb-4">
          This card demonstrates how complex content can be displayed within a TexturedCard component.
        </p>
        <button className="px-4 py-2 bg-retro-red text-retro-cream rounded">
          Action Button
        </button>
      </>
    ),
  },
};

export const WithList: Story = {
  args: {
    children: (
      <ul className="list-disc list-inside space-y-2">
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </ul>
    ),
  },
};

export const WithCustomClass: Story = {
  args: {
    children: 'Custom styled card',
    className: 'bg-retro-blue text-retro-cream',
  },
};

export const MultipleCards: Story = {
  args: {
    children: "Multiple cards example",
  },
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <TexturedCard>
        <h3 className="font-display text-retro-blue">Card 1</h3>
        <p>First card content</p>
      </TexturedCard>
      <TexturedCard>
        <h3 className="font-display text-retro-blue">Card 2</h3>
        <p>Second card content</p>
      </TexturedCard>
    </div>
  ),
};

export const LongContent: Story = {
  args: {
    children: (
      <>
        <h3 className="text-2xl font-display text-retro-blue mb-4">Long Content Example</h3>
        <p className="text-retro-black mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-retro-black">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </>
    ),
  },
};