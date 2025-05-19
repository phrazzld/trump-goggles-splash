import type { Meta, StoryObj } from '@storybook/react';
import ExternalLink from './ExternalLink';

const meta = {
  title: 'Shared/ExternalLink',
  component: ExternalLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'External URL',
    },
    children: {
      control: 'text',
      description: 'Link text content',
    },
    variant: {
      control: { type: 'select', options: ['text', 'button'] },
      description: 'Link display variant',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessibility label',
    },
  },
} satisfies Meta<typeof ExternalLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: 'https://example.com',
    children: 'External Link',
  },
};

export const TextVariant: Story = {
  args: {
    href: 'https://github.com',
    children: 'View on GitHub',
    variant: 'text',
  },
};

export const ButtonVariant: Story = {
  args: {
    href: 'https://chrome.google.com/webstore',
    children: 'Add to Chrome',
    variant: 'button',
  },
};

export const ButtonWithCustomProps: Story = {
  args: {
    href: 'https://example.com',
    children: 'Custom Button',
    variant: 'button',
    buttonProps: {
      variant: 'secondary',
      size: 'lg',
    },
  },
};

export const WithAriaLabel: Story = {
  args: {
    href: 'https://example.com',
    children: 'Learn More',
    ariaLabel: 'Learn more about our product',
  },
};

export const WithCustomClass: Story = {
  args: {
    href: 'https://example.com',
    children: 'Styled Link',
    className: 'font-bold uppercase',
  },
};

export const ChromeStoreLink: Story = {
  args: {
    href: 'https://chromewebstore.google.com/detail/trump-goggles/jffbimfdmgbfannficjejaffmnggoigd',
    children: 'Add Trump Goggles to Chrome',
    variant: 'button',
    buttonProps: {
      variant: 'primary',
      size: 'lg',
    },
  },
};

export const GitHubLink: Story = {
  args: {
    href: 'https://github.com/phrazzld/trump-goggles',
    children: 'Fork on GitHub',
    variant: 'text',
  },
};

export const LongText: Story = {
  args: {
    href: 'https://example.com',
    children: 'This is a very long link text that might wrap to multiple lines',
  },
};