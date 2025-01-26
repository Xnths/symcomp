import BCButton from "./bcbutton";

const Overlay = () => (
    <div
        className="absolute top-0 left-0 w-full h-full bg-bc-white opacity-90"
        style={{ zIndex: 4 }}
    ></div>
);

interface SectionProps {
    title: string;
    subtitle: string;
    description: string;
    buttons: { href: string; text: string; className: string }[];
}

const Section = ({ title, subtitle, description, buttons }: SectionProps) => (
    <div className="z-10 flex flex-col justify-center items-center lg:justify-start mt-12">
        <span className="text-bc-caramel text-center">
            <p className="text-[2rem]">{title}</p>
            <p className="text-[1.2rem]">{subtitle}</p>
        </span>
        <p className="text-left text-[0.9rem] m-4 max-w-[20rem]">{description}</p>
        {buttons.map((button, index) => (
            <BCButton
                key={index}
                href={button.href}
                className={`w-[12.5rem] justify-center text-bc-caramel border-bc-caramel shadow-[4px_4px_0_rgba(195,129,78,1)] hover:bg-bc-brown ${button.className}`}
            >
                {button.text}
            </BCButton>
        ))}
    </div>
);

export const BCParticipation = () => {
    return (
        <div
            className="flex flex-col justify-center items-center min-h-screen text-center lg:text-left bg-bc-white w-full lg:min-w-[65rem] font-mono lg:px-[2rem] lg:justify-center relative"
            style={{
                backgroundImage: 'url(/logo/bc_black.png)',
                backgroundRepeat: 'repeat-X',
                backgroundSize: 'auto 21%',
                backgroundPosition: '-100px 98%',
                zIndex: 3,
            }}
        >
            <Overlay />
            <Section
                title="PARTICIPE"
                subtitle="DO BYTECAFÉ"
                description="Gostaria de inscrever sua escola para participar de uma edição do ByteCafé? Se inscreva no botão abaixo:"
                buttons={[
                    {
                        href: "https://docs.google.com/forms/d/e/1FAIpQLSeKgrutSRuZH5bk5syGWqtaU87q4pDhuaU3aRNcIVYsAQIfQA/viewform?usp=preview",
                        text: "INSCREVA-SE",
                        className: "hover:text-bc-white hover:bg-bc-brown text-bc-brown",
                    },
                ]}
            />
            <Section
                title="SEJA UM"
                subtitle="APOIADOR"
                description="Gostaria apoiar o evento como voluntário ou patrocinador? Clique no botão abaixo:"
                buttons={[
                    {
                        href: "https://docs.google.com/forms/d/e/1FAIpQLSdrmdbySCqquLTWwRe_PwmgalVbE6C8XNNYAY2xcVFNRC2crw/viewform?usp=preview",
                        text: "PATROCINE",
                        className: "mb-8 hover:text-bc-white",
                    },
                    {
                        href: "https://docs.google.com/forms/d/e/1FAIpQLSe3A6S3YqWAEFjr1U73EQy8eZVwgniYPRAP61PwYkw6fagdkA/viewform?usp=preview",
                        text: "VOLUNTÁRIE-SE",
                        className: "bg-transparent lg:mb-[3rem] hover:text-bc-white",
                    },
                ]}
            />
        </div>
    );
};