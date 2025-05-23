import { barlowCondensed } from '@/lib/font'
import { cn } from '@/lib/utils'

export default function Semana() {
  return (
    <div>
      <p className={cn(barlowCondensed.className, 'font-bold text-8xl italic')}>
        SEMANA DA COMPUTAÇÃO
      </p>
    </div>
  )
}
