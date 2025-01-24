import BCButton from "./bcbutton";
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
        <Participe />
        <Apoie />

        </div>
    );
}


const Overlay = () => (
    <div
        className="absolute top-0 left-0 w-full h-full bg-bc-white opacity-90"
        style={{ zIndex: 4 }}
    ></div>
);

const Participe = () => (
    <div className="z-10 flex flex-col justify-center items-center">
        <span className="text-bc-caramel text-center">
            <p className="text-[2rem]">PARTICIPE</p>
            <p className="text-[1.2rem]">DO BYTECAFÉ</p>
        </span>
        <p className="text-left text-[0.9rem] m-4 max-w-[20rem]">Gostaria de inscrever sua escola para participar de uma edição do ByteCafé? Se inscreva no botão abaixo:</p>
        <BCButton href="#" className="w-[11rem] justify-center text-bc-caramel border-bc-caramel shadow-[4px_4px_0_rgba(198,129,78,1)] hover:bg-bc-brown px-0">
        INSCREVA-SE
        </BCButton>
    </div>
);

const Apoie = () => (
    <div className="z-10 flex flex-col justify-center items-center lg:justify-start mt-12">
        <span className="text-bc-caramel text-center">
            <p className="text-[2rem]">SEJA UM</p>
            <p className="text-[1.2rem]">APOIADOR</p>
        </span>
        <p className="text-left text-[0.9rem] m-4 max-w-[20rem]">Gostaria apoiar o evento como voluntário ou patrocinador? Clique no botão abaixo:</p>
        <BCButton href="#" className="w-[11rem] justify-center text-bc-caramel border-bc-caramel shadow-[4px_4px_0_rgba(198,129,78,1)] hover:bg-bc-brown px-0 mb-8">
        PATROCINE
        </BCButton>
        <BCButton href="#" className="w-[11rem] justify-center text-bc-caramel border-bc-caramel shadow-[4px_4px_0_rgba(198,129,78,1)] hover:bg-bc-brown px-0 bg-transparent lg:mb-[3rem]">
        VOLUNTÁRIE-SE
        </BCButton>
    </div>
);