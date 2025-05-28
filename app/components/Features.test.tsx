import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Features, { ICON_REGISTRY, type IconName } from './Features';
import { APP_CONFIG } from '@/app/config/app-config';

describe('Features Component', () => {
  describe('Icon Registry', () => {
    it('should have all required icon mappings', () => {
      const expectedIcons: IconName[] = ['zap', 'sliders', 'shield', 'toggleRight'];
      expectedIcons.forEach(iconName => {
        expect(ICON_REGISTRY[iconName]).toBeDefined();
        // Lucide icons are forwardRef components, which appear as objects
        expect(ICON_REGISTRY[iconName]).toBeTruthy();
      });
    });

    it('should only contain valid LucideIcon components', () => {
      Object.values(ICON_REGISTRY).forEach(IconComponent => {
        expect(IconComponent).toBeDefined();
        // Lucide icons are React components
        expect(IconComponent).toBeTruthy();
      });
    });
  });

  describe('Feature Rendering', () => {
    it('should render all features from config', () => {
      render(<Features />);
      
      APP_CONFIG.uiText.features.featureItems.forEach(feature => {
        expect(screen.getByText(feature.title)).toBeInTheDocument();
        expect(screen.getByText(feature.description)).toBeInTheDocument();
      });
    });

    it('should render correct icons for each feature', () => {
      render(<Features />);
      
      APP_CONFIG.uiText.features.featureItems.forEach(feature => {
        const icon = screen.getByLabelText(feature.iconLabel);
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveClass('w-12', 'h-12', 'text-retro-red');
      });
    });

    it('should apply aria-labels to all icons', () => {
      render(<Features />);
      
      APP_CONFIG.uiText.features.featureItems.forEach(feature => {
        const icon = screen.getByLabelText(feature.iconLabel);
        expect(icon).toHaveAttribute('aria-label', feature.iconLabel);
      });
    });
  });

  describe('Grid Layout', () => {
    it('should have responsive grid classes', () => {
      const { container } = render(<Features />);
      const grid = container.querySelector('.grid');
      
      expect(grid).toHaveClass('grid-cols-1');
      expect(grid).toHaveClass('md:grid-cols-2');
      expect(grid).toHaveClass('lg:grid-cols-4');
    });
  });

  describe('Type Safety', () => {
    it('should enforce valid icon names at compile time', () => {
      // This test verifies TypeScript compilation
      // Invalid icon names should cause TypeScript errors
      const validIconName: IconName = 'zap';
      expect(ICON_REGISTRY[validIconName]).toBeDefined();
      
      // The following would cause a TypeScript error:
      // const invalidIconName: IconName = 'invalid-icon';
    });
  });
});