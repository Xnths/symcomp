import Image from "next/image"

export const HomeHeader = () => {
    const sections = [
        {
            label: 'Início',
            href: 'home'
        },
        {
            label: 'Projetos',
            href: 'projects'
        },
        {
            label: 'Quem somos',
            href: 'about'
        }
    ]
    
    return (
        <div className="flex flex-row h-[100px] px-6 gap-2 items-center justify-between w-full bg-background">
            <a href="#home">
                <Image alt="Logo da Symcomp" src="/logo/symcomp.png" width={100} height={100} className="flex size-[60px]" />
            </a>
            <nav className="flex flex-row gap-4">
                {sections.map(section => (
                   <a className="font-bold px-[48px] py-2 transition-colors hover:bg-primary hover:text-white border-4 shadow-solid border-black bg-white" key={section.href} href={`#${section.href}`}>{section.label.toUpperCase()}</a> 
                ))}
            </nav>
        </div>
    )
}