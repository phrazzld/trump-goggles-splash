import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import SectionHeading, { HeadingLevel } from './SectionHeading';

describe('SectionHeading', () => {
  const testText = 'Test Heading';

  it.each([1, 2, 3, 4, 5, 6] as HeadingLevel[])(
    'renders as an h%s element when level %s is provided',
    async (level) => {
      const { container } = render(<SectionHeading level={level}>{testText}</SectionHeading>);
      const headingElement = screen.getByRole('heading', { level });
      expect(headingElement).toBeInTheDocument();
      expect(headingElement.tagName).toBe(`H${level}`);
      expect(headingElement).toHaveTextContent(testText);
      expect(await axe(container)).toHaveNoViolations();
    },
  );

  it('applies default and custom classNames correctly', async () => {
    const customClass = 'my-custom-heading-class';
    const { container } = render(
      <SectionHeading level={1} className={customClass}>
        {testText}
      </SectionHeading>,
    );
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toHaveClass('text-retro-blue');
    expect(headingElement).toHaveClass('text-shadow-vintage');
    expect(headingElement).toHaveClass(customClass);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('passes through the id prop', async () => {
    const testId = 'custom-section-id';
    const { container } = render(
      <SectionHeading level={2} id={testId}>
        {testText}
      </SectionHeading>,
    );
    const headingElement = screen.getByRole('heading', { level: 2 });
    expect(headingElement).toHaveAttribute('id', testId);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders complex children correctly', () => {
    render(
      <SectionHeading level={3}>
        <span>Complex</span> <strong>Children</strong>
      </SectionHeading>,
    );
    expect(screen.getByText('Complex')).toBeInTheDocument();
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('does not set id when not provided', () => {
    render(<SectionHeading level={1}>{testText}</SectionHeading>);
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).not.toHaveAttribute('id');
  });
});