import { MenuIcon, MenuSquareIcon } from "lucide-react"
import Image from "next/image"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Navigation } from "../ui/navigation"

export const BcHeader = () => {
    const sections = [
        {
            label: 'Início',
            href: 'home'
        },
        {
            label: 'Edições Anteriores',
            href: '/'
        },
        {
            label: 'Material',
            href: 'about'
        },
        {
            label: 'Participe',
            href: 'about'
        },
        {
            label: 'FAQ',
            href: 'faq'
        }
    ]
    
    return (
        <div className="flex flex-row h-[109px] items-center justify-between w-full w-[368px] md:w-[720px] lg:w-[1120px]">
            <a href="#home">
                <img alt="Logo da Symcomp" src="/logo/logo_byte_horizontal.png" width={200} height={200} className="flex h-[50px] w-auto" />
            </a>
            <div className="lg:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger className="">
                        <MenuIcon size={32} color="#47160F" /> 
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mt-[2.5rem] flex bg-yellow-200 justify-center items-center w-full sm:max-w-[368px] mx-auto">
                        <Navigation navItem={sections} className="bg-pink-200"/>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <Navigation className="hidden lg:flex" navItem={sections} />
        </div>
    )
}