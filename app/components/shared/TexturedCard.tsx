import { cn } from '@/lib/utils'

interface TexturedCardProps {
  className?: string
  children: React.ReactNode
}

const TexturedCard: React.FC<TexturedCardProps> = ({ className, children }) => {
  return (
    <div 
      className={cn(
        'rounded-lg shadow-vintage texture-paper p-6',
        className
      )}
    >
      {children}
    </div>
  )
}

export default TexturedCard