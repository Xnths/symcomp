export const BCHome = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-bc-white text-center h-[90vh] font-mono">
            <Logo />
            <Title />
            <Description />
        </div>
    )
}

const Logo = () => (
    <img 
        alt="Logo do ByteCafé - Uma xícara feita de chaves (operador matemático) com números em binário (0 e 1) representando a bebida em cor de caramelo. Os números em binário representam o código do curso. Há um vapor, também em cor de caramelo saindo da xícara." 
        src="/logo/logo_bytecafe.svg" 
    />
);

const Title = () => (
    <span className="text-bc-caramel">
        <p className="text-[1.5rem] py-[0] h-[1.5rem]">UM PROJETO</p>
        <h1 className="font-thin text-[2.5rem]">SYMCOMP</h1>
    </span>
);

const Description = () => (
    <p className="px-[1.5rem] text-[0.9rem] pb-[5rem]">
        ByteCafé é um evento voltado para alunes no Ensimo Médio conhecerem numa experiência prática o curso de <strong>Ciências da Computação</strong> do Instituto de Matemática e Estatística da Universidade de São Paulo - <strong>IME USP</strong>.
    </p>
);