import { MenuIcon, MenuSquareIcon } from "lucide-react"
import Image from "next/image"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Navigation } from "../ui/navigation"

export const BcHeader = () => {
    const bc_sections = [
        {
            label: 'Início',
            href: 'home',
            classN: 'hover:bg-bc-caramel'
        },
        {
            label: 'Edições Anteriores',
            href: '/',
            classN: 'hover:bg-bc-caramel'        
        },
        {
            label: 'Material',
            href: 'about',
            classN: 'hover:bg-bc-caramel'        
        },
        {
            label: 'Participe',
            href: 'about',
            classN: 'hover:bg-bc-caramel'        
        },
        {
            label: 'FAQ',
            href: 'faq',
            classN: 'hover:bg-bc-caramel'        
        }
    ]
    
    return (
        <div className="flex flex-row h-[109px] items-center justify-between w-full w-[368px] md:w-[720px] lg:w-[1120px] px-6">
            <a href="#home">
                <img alt="Logo da Symcomp" src="/logo/logo_byte_horizontal.png" width={200} height={200} className="flex h-[50px] w-auto" />
            </a>
            <div className="lg:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger className="">
                        <MenuIcon size={32} color="#47160F" /> 
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mt-[2.5rem] flex justify-center items-center w-full sm:max-w-[368px] mx-auto">
                        <Navigation navItem={bc_sections}/>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <Navigation className="hidden lg:flex" navItem={bc_sections} />
        </div>
    )
}