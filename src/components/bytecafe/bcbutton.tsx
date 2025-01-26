interface BCButtonProps {
    href: string;
    className?: string;
    children: React.ReactNode;
}

const BCButton: React.FC<BCButtonProps> = ({ href, className, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`flex items-center  bg-bc-white border-4 border-bc-brown shadow-[4px_4px_0_rgba(71,22,15,1)] text-bc-brown font-mono font-bold px-8 h-[2.5rem] text-[1rem] w-[12.5rem] justify-center ${className}`}>
        {children}
    </a>
);

export default BCButton;