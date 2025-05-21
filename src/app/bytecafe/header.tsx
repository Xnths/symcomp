import { MenuIcon } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Navigation } from '@/components/ui/navigation'

export const BcHeader = () => {
  const estilo_nav_item =
    'hover:bg-bc-caramel bg-bc-white border-0 shadow-0 text-bc-brown font-mono min-w-[20rem] font-bold px-4 py-2'

  const estilo_nav_item_desk =
    'hover:bg-bc-caramel bg-bc-white border-4 border-bc-brown shadow-[4px_4px_0_rgba(10,22,15,1)] text-bc-brown font-mono font-bold px-4 h-[2.5rem] text-[1rem]'

  const bc_sections = [
    {
      label: 'Início',
      href: 'home',
    },
    {
      label: 'Quem Somos',
      href: 'presentation',
    },
    {
      label: 'Edições Anteriores',
      href: 'content',
    },
    {
      label: 'Participe',
      href: 'participation',
    },
    {
      label: 'FAQ',
      href: 'bcfaq',
    },
  ]

  return (
    <div className="flex flex-row min-h-[100px]  items-center bg-bc-white justify-between w-screen min-w-[320px] lg:w-screen px-6 fixed z-50">
      <a href="#home">
        <img
          alt="Logo do ByteCafé"
          src="/logo/logo_byte_horizontal.png"
          width={200}
          height={200}
          className="flex h-[50px] w-auto"
        />
      </a>
      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MenuIcon size={32} color="#47160F" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-[2.5rem] flex justify-center items-center w-full sm:max-w-[320px] mx-auto">
            <Navigation
              navItem={bc_sections}
              classNavItem={estilo_nav_item}
              className="bg-bc-white border-0 gap-2 py-0"
            />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Navigation
        className="hidden lg:flex"
        navItem={bc_sections}
        classNavItem={estilo_nav_item_desk}
      />
    </div>
  )
}
