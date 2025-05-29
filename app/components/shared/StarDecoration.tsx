import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StarDecorationProps {
  className?: string
  size?: number
  'data-decorative'?: string
}

const StarDecoration: React.FC<StarDecorationProps> = ({ className, size = 24, 'data-decorative': dataDecorative }) => {
  return (
    <Star 
      className={cn('text-retro-gold fill-retro-gold', className)}
      size={size}
      aria-hidden="true"
      data-decorative={dataDecorative}
    />
  )
}

export default StarDecoration