import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface TexturedCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

const TexturedCard: React.FC<TexturedCardProps> = ({ 
  className, 
  children,
  ...props 
}) => {
  return (
    <div
      className={cn(
        'rounded-lg shadow-retro p-6 transition-transform hover:translate-y-[-2px]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default TexturedCard