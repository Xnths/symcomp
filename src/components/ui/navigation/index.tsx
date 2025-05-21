import { cn } from '@/lib/utils'
import { NavigationItem } from '@/types/navigation-item'

import { NavItem } from './nav-item'

interface NaviagtionProps {
  navItem: NavigationItem[]
  className?: string
  classNavItem?: string
}

export const Navigation = ({ navItem, className, classNavItem }: NaviagtionProps) => {
  return (
    <nav className={cn('flex flex-col gap-6 lg:flex-row sm:gap-4', className)}>
      {navItem.map((item) => (
        <NavItem
          key={item.href}
          href={item.href}
          label={item.label}
          classN={classNavItem}
        />
      ))}
    </nav>
  )
}
