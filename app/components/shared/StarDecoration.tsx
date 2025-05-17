import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StarDecorationProps {
  className?: string
  size?: number
}

const StarDecoration: React.FC<StarDecorationProps> = ({ className, size = 24 }) => {
  return (
    <Star 
      className={cn('text-retro-gold fill-retro-gold', className)}
      size={size}
    />
  )
}

export default StarDecoration