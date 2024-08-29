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
        },
        {
            label: 'FAQ',
            href: 'faq'
        }
    ]
    
    return (
        <div className="flex flex-row h-[100px] px-6 gap-2 items-center justify-between fixed top-0 w-full bg-background">
            <span className="font-extrabold text-4xl text-primary">SYMCOMP</span>
            <nav className="flex flex-row gap-4">
                {sections.map(section => (
                   <a className="font-bold px-[48px] py-2 transition-colors hover:bg-primary hover:text-white border-4 shadow-solid border-black bg-white" key={section.href} href={section.href}>{section.label.toUpperCase()}</a> 
                ))}
            </nav>
        </div>
    )
}