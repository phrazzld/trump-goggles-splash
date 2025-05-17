import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const retroButtonVariants = cva(
  'inline-flex items-center justify-center transition-colors focus:outline-none shadow-vintage rounded-md font-display',
  {
    variants: {
      variant: {
        primary: 'bg-retro-red text-retro-cream hover:opacity-90 border-retro-red border-double-retro',
        secondary: 'bg-transparent text-retro-blue border-retro-blue hover:bg-retro-blue/10 border-double-retro',
      },
      size: {
        sm: 'text-sm px-3 py-1.5',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface RetroButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof retroButtonVariants> {
  children: React.ReactNode
}

const RetroButton = forwardRef<HTMLButtonElement, RetroButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(retroButtonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    )
  }
)

RetroButton.displayName = 'RetroButton'

export default RetroButton