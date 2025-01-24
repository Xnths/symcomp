export const BCPresentation = () => {
    return (
        <div className="relative flex flex-col justify-center items-left bg-bc-brown text-bc-white h-screen px-8 font-mono overflow-x-hidden">
            <img
            alt="Logo transparente do ByteCafé"
            src="/logo/bc_black.png"
            className="absolute left-40 opacity-30 "
            style={{ zIndex: 2 }}
            />
            <div className="h-[109px]"/>
            <div className="mb-8 z-10">
            <h2><span className="text-[1.5rem]">NOSSOS</span><br/> <span className="text-[2rem]">OBJETIVOS_</span></h2>

            <p className="pt-2 text-[0.9rem]">Queremos com o ByteCafé aproximar alunes do Ensino Médio a conhecerem mais do curso e carreira na área de computação. Queremos que os participantes conheçam melhor a USP, formas de entrada na Universidade, os diferentes benefícios e auxílios para permanência em uma experiência prática.</p>
            </div>

            <div className="z-10">
            <h2><span className="text-[1.5rem]">QUEM</span><br/> <span className="text-[2rem]">SOMOS_</span></h2>
            <p className="pt-2 text-[0.9rem]">Somos um grupo de extensão chamado SymComp | Simpósio de Computação, formado por alunos da graduação do curso de Ciência da Computação do IME-USP, cujo foco é realizar eventos de computação para comunidade interna e externa da faculdade, levando o conteúdo de computação para todes.</p>
            </div>
        </div>
    );
};
