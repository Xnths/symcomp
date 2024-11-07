import { MenuIcon, MenuSquareIcon } from "lucide-react"
import Image from "next/image"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Navigation } from "../ui/navigation"

export const BcHeader = () => {
    const estilo_nav_item = "hover:bg-bc-caramel bg-bc-white border-0 shadow-0 text-bc-brown font-mono min-w-[20rem] font-bold px-4 py-2";

    const bc_sections = [
        {
            label: 'Início',
            href: 'home',
        },
        {
            label: 'Edições Anteriores',
            href: '/',     
        },
        {
            label: 'Material',
            href: 'about',    
        },
        {
            label: 'Participe',
            href: 'about',      
        },
        {
            label: 'FAQ',
            href: 'faq',       
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
                        <Navigation navItem={bc_sections} classNavItem={estilo_nav_item} className="bg-bc-white border-0 gap-2 py-6"/>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <Navigation className="hidden lg:flex" navItem={bc_sections} classNavItem={estilo_nav_item}/>
        </div>
    )
}