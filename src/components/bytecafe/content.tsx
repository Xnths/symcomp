import BCButton from "./bcbutton";

export const BCContent = () => {
    return (
        <div
            className="flex flex-col justify-center items-center min-h-screen text-center lg:text-left bg-bc-caramel w-full lg:min-w-[65rem] font-mono lg:px-[2rem] lg:justify-center relative"
            style={{
                backgroundImage: 'url(/logo/bc_black.png)',
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto 10%',
                zIndex: 3,
            }}
        >
            <Overlay />
            <MainContent />
            <Footer />
        </div>
    );
};

const Overlay = () => (
    <div
        className="absolute top-0 left-0 w-full h-full bg-bc-caramel opacity-90"
        style={{ zIndex: 4 }}
    ></div>
);

const MainContent = () => (
    <div className="h-[70%] md:h-[80%] z-10 mx-6 flex flex-col justify-center items-center">
        <div className="h-[100px]"></div>
        <Title />
        <ImageSection />
        <BCButton
            href="#"
            className="w-[11rem] justify-center items-center text-center bg-transparent text-bc-brown border-bc-brown shadow-[4px_4px_0_rgba(71,22,15,1)] my-4 hover:bg-bc-white"
        >
            SAIBA MAIS
        </BCButton>
    </div>
);

const Title = () => (
    <h2 className="text-bc-brown m-2">
        <span className="text-[2rem]">EDIÇÕES</span>
        <br />
        <span className="text-[1.2rem]">ANTERIORES</span>
    </h2>
);

const ImageSection = () => (
    <>
        <img
            src="/photos/bytecafe_2024_1.JPG"
            alt="Participantes da 1º edição do ByteCafé"
            className="w-[80%] border-4 border-white shadow-[4px_4px_0_rgba(255,255,250,1)] mb-2 md:w-[25rem] lg:w-[30rem]"
        />
        <p className="text-bc-brown font-bold mt-2 text-[0.9rem]">
            E.E Bibliotecária Maria Antonieta de Ferraz 2024.1
        </p>
    </>
);

const Footer = () => (
    <div className="bg-bc-black h-[30%] md:h-[20%] w-full z-10 flex flex-col justify-center items-center">
        <div className="text-bc-white">
            <p className="text-[2rem]">ACESSE</p>
            <p>O MATERIAL</p>
        </div>
        <BCButton
            href="#"
            className="w-[11rem] justify-center items-center text-center bg-transparent text-bc-white border-bc-white shadow-[4px_4px_0_rgba(255,255,250,1)] my-4 hover:bg-bc-caramel"
        >
            MANUAL USP
        </BCButton>
    </div>
);