import { cn } from '@/lib/utils'
import { Color } from '@/types/color'
import { NavigationItem } from '@/types/navigation-item'

import { NavItem } from './nav-item'

interface NaviagtionProps {
  navItem: NavigationItem[]
  className?: string
  color: Color
}

export const Navigation = ({ navItem, className, color }: NaviagtionProps) => {
  return (
    <nav className={cn('flex flex-col gap-6 lg:flex-row sm:gap-4', className)}>
      {navItem.map((item) => (
        <NavItem key={item.href} href={item.href} label={item.label} color={color} />
      ))}
    </nav>
  )
}
