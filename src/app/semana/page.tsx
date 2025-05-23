import { barlowCondensed } from '@/lib/font'
import { cn } from '@/lib/utils'

export default function Semana() {
  return (
    <div>
      <div className="flex flex-row gap-4 items-end">
        <h2
          className={cn(
            barlowCondensed.className,
            'font-bold text-8xl italic text-sc-2025-primary sc-2025-text-shadow-solid',
          )}
        >
          SEMANA
        </h2>
        <h2
          className={cn(
            barlowCondensed.className,
            'font-bold text-6xl italic text-sc-2025-background sc-2025-text-shadow-solid',
          )}
        >
          XV
        </h2>
      </div>
      <h2
        className={cn(
          barlowCondensed.className,
          'font-bold text-7xl italic text-sc-2025-secondary sc-2025-text-shadow-solid',
        )}
      >
        DA COMPUTAÇÃO
      </h2>
    </div>
  )
}
