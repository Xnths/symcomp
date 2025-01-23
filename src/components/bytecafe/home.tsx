export const BCHome = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-bc-white text-center h-[90vh] font-mono">
            <div className="flex flex-col justify-center items-center md:flex-col-reverse">
                <Logo />
                <Title />
            </div>
            <div className="hidden sm:block text-bc-brown font-mono font-bold text-[1.2rem] w-[25rem] pb-4">
                <p>VENHA CONHECER O CURSO DE COMPUTAÇÃO DA USP!</p>
            </div>
            <Description />
        </div>
    )
}

const Logo = () => (
    <img
        alt="Logo do ByteCafé - Uma xícara feita de chaves (operador matemático) com números em binário (0 e 1) representando a bebida em cor de caramelo. Os números em binário representam o código do curso. Há um vapor, também em cor de caramelo saindo da xícara."
        src="/logo/logo_bytecafe.svg" className="md:h-[18rem]"
    />
);

const Title = () => (
    <span className="text-bc-caramel md:pt-[1.5rem] md:my-[-1rem]">
        <p className="text-[1.5rem] h-[1.5rem] md:text-[5rem] md:h-[5rem] md:my-[-1rem]">UM PROJETO</p>
        <h1 className="font-thin text-[2.5rem] md:text-[7rem] md:font-bold">SYMCOMP</h1>
    </span>
);

const Description = () => (
    <p className="px-[1.5rem] text-[0.9rem] pb-[5rem] max-w-[35rem]">
        ByteCafé é um evento voltado para alunos no Ensino Médio conhecerem numa experiência prática o curso de <strong>Ciências da Computação</strong> do Instituto de Matemática e Estatística da Universidade de São Paulo - <strong>IME USP</strong>.
    </p>
);