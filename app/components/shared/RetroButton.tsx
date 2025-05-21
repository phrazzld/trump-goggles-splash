import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'

const retroButtonVariants = cva(
  'inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-retro-blue focus-visible:ring-offset-2 focus-visible:ring-offset-retro-cream shadow-vintage rounded-md font-display disabled:opacity-50 disabled:cursor-not-allowed',
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
  ({ className, variant, size, children, type = "button", ...props }, ref) => {
    const starSize = size === 'sm' ? 14 : size === 'lg' ? 20 : 16
    
    return (
      <button
        ref={ref}
        type={type}
        className={cn(retroButtonVariants({ variant, size, className }))}
        {...props}
      >
        {variant === 'primary' && (
          <Star 
            className="mr-2 text-retro-gold fill-retro-gold" 
            size={starSize}
            aria-hidden="true"
          />
        )}
        {children}
      </button>
    )
  }
)

RetroButton.displayName = 'RetroButton'

export default RetroButton