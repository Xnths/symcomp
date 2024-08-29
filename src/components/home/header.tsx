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
        <div className="flex flex-row px-4 py-6 gap-2 items-center justify-between">
            <span className="font-bold text-2xl">SYMCOMP</span>
            <nav className="flex flex-row gap-4">
                {sections.map(section => (
                   <a className="font-bold px-4 py-2 transition-colors hover:bg-primary hover:text-white border-4 shadow-solid border-black" key={section.href} href={section.href}>{section.label}</a> 
                ))}
            </nav>
        </div>
    )
}