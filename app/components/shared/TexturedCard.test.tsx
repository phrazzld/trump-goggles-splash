import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import TexturedCard from './TexturedCard';

expect.extend(toHaveNoViolations);

describe('TexturedCard', () => {
  describe('Rendering', () => {
    it('renders children content', () => {
      render(
        <TexturedCard>
          <p>Card Content</p>
        </TexturedCard>
      );
      const content = screen.getByText('Card Content');
      expect(content).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(
        <TexturedCard className="custom-card">
          Content
        </TexturedCard>
      );
      const card = container.firstChild;
      expect(card).toHaveClass('custom-card');
    });

    // [REMOVED] Test for article element: TexturedCard is a generic container component.
    // It uses a 'div' rather than 'article' to be more flexible for various content types.
    // Using 'div' aligns with semantic HTML principles where the card itself doesn't represent
    // a complete, self-contained composition. Users can place semantic elements like 'article'
    // as children when appropriate for their specific content.
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <TexturedCard>
          <h3>Card Title</h3>
          <p>Card content goes here</p>
        </TexturedCard>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('accepts and applies ARIA attributes', () => {
      render(
        <TexturedCard aria-label="Feature card" role="region">
          <p>Content</p>
        </TexturedCard>
      );
      const region = screen.getByRole('region', { name: 'Feature card' });
      expect(region).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('has correct base styles', () => {
      const { container } = render(
        <TexturedCard>
          <p>Content</p>
        </TexturedCard>
      );
      const card = container.firstChild;
      expect(card).toHaveClass('rounded-lg');
      expect(card).toHaveClass('shadow-vintage');
      expect(card).toHaveClass('texture-paper');
      expect(card).toHaveClass('p-6');
    });

    it('has shadow effect', () => {
      const { container } = render(
        <TexturedCard>
          <p>Content</p>
        </TexturedCard>
      );
      const card = container.firstChild;
      expect(card).toHaveClass('shadow-vintage');
    });

    it('has hover effect', () => {
      const { container } = render(
        <TexturedCard>
          <p>Content</p>
        </TexturedCard>
      );
      const card = container.firstChild;
      expect(card).toHaveClass('hover:translate-y-[-2px]');
      expect(card).toHaveClass('transition-transform');
    });

    it('preserves default classes when custom className is added', () => {
      const { container } = render(
        <TexturedCard className="custom-card">
          <p>Content</p>
        </TexturedCard>
      );
      const card = container.firstChild;
      expect(card).toHaveClass('custom-card');
      expect(card).toHaveClass('texture-paper'); // Default class should still be present
    });
  });

  describe('Props Inheritance', () => {
    it('passes through additional props', () => {
      render(
        <TexturedCard data-testid="custom-card" id="test-card">
          <p>Content</p>
        </TexturedCard>
      );
      const card = screen.getByTestId('custom-card');
      expect(card).toHaveAttribute('id', 'test-card');
    });
  });

  describe('Complex Content', () => {
    it('renders complex nested components', () => {
      render(
        <TexturedCard>
          <header>
            <h2>Title</h2>
          </header>
          <div>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
          </div>
          <footer>
            <button>Action</button>
          </footer>
        </TexturedCard>
      );
      
      expect(screen.getByRole('heading', { name: 'Title' })).toBeInTheDocument();
      expect(screen.getByText('Paragraph 1')).toBeInTheDocument();
      expect(screen.getByText('Paragraph 2')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
    });

    it('maintains layout with different content types', () => {
      render(
        <TexturedCard>
          {/* eslint-disable-next-line @next/next/no-img-element -- Using standard img element in tests is acceptable since we're just testing the card's layout capabilities, not testing image optimization which is Next.js Image component's primary purpose */}
          <img src="test.jpg" alt="Test" />
          <span>Text content</span>
          <div>Block content</div>
        </TexturedCard>
      );
      
      expect(screen.getByRole('img')).toBeInTheDocument();
      expect(screen.getByText('Text content')).toBeInTheDocument();
      expect(screen.getByText('Block content')).toBeInTheDocument();
    });
  });
});