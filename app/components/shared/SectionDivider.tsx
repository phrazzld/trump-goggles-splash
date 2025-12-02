interface SectionDividerProps {
  /** Color of the divider (the wave shape) */
  color?: 'cream' | 'blue' | 'red' | 'black';
  /** Background color above the wave (should match section transitioning FROM) */
  bgColor?: 'cream' | 'blue' | 'red' | 'black';
  /** Whether to flip the wave vertically */
  flip?: boolean;
  /** Additional CSS classes */
  className?: string;
}

const colorMap = {
  cream: 'text-retro-cream',
  blue: 'text-retro-blue',
  red: 'text-retro-red',
  black: 'text-retro-black',
};

const bgColorMap = {
  cream: 'bg-retro-cream',
  blue: 'bg-retro-blue',
  red: 'bg-retro-red',
  black: 'bg-retro-black',
};

/**
 * Wave divider component for creating visual separation between sections.
 * Renders an SVG wave that fills with the specified color.
 * Use bgColor to set the background above the wave (matching the section it transitions from).
 */
export default function SectionDivider({
  color = 'cream',
  bgColor,
  flip = false,
  className = ''
}: SectionDividerProps) {
  const bgClass = bgColor ? bgColorMap[bgColor] : '';

  return (
    <div
      className={`relative h-16 md:h-24 -mt-1 ${bgClass} ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`absolute w-full h-full ${colorMap[color]}`}
        fill="currentColor"
      >
        <path d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );
}
