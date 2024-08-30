interface NavItemProps {
    href: string
    label: string
}

export const NavItem = ({href, label}: NavItemProps) => {
    return (
        <a className="flex flex-row items-center justify-center font-bold px-[48px] py-2 transition-colors hover:bg-primary hover:text-white border-4 shadow-solid border-black bg-white" href={`#${href}`}>{label.toUpperCase()}</a>
    )
}