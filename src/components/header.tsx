import { MenuIcon } from 'lucide-react'
import Image from 'next/image'

import { Logo } from '@/types/logo'
import { NavigationItem } from '@/types/navigation-item'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Navigation } from './ui/navigation'

export const Header = ({
  sections,
  logo,
}: {
  sections: NavigationItem[]
  logo: Logo
}) => {
  const estilo_nav_item = 'hover:bg-primary'

  return (
    <div className="flex flex-row h-[100px] px-6 gap-2 items-center justify-between w-full bg-background">
      <a href="#home">
        <Image
          alt={logo.alt}
          src={logo.src}
          width={logo.width}
          height={logo.height}
          className={logo.className ?? 'size-[60px]'}
        />
      </a>
      <DropdownMenu>
        <DropdownMenuTrigger className="sm:hidden">
          <MenuIcon size={32} color="white" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-6 p-8">
          <Navigation navItem={sections} classNavItem={estilo_nav_item} />
        </DropdownMenuContent>
      </DropdownMenu>
      <Navigation
        className="hidden sm:flex"
        navItem={sections}
        classNavItem={estilo_nav_item}
      />
    </div>
  )
}
