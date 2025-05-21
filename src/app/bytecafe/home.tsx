import BCButton from './bcbutton'
export const BCHome = () => {
  return (
    <div
      id="home"
      className="flex flex-col justify-center items-center min-h-screen text-center  bg-bc-white lg:text-left lg:min-w-[65rem] font-mono lg:items-start lg:px-[2rem] lg:justify-center"
    >
      <div className="h-[100px] w-full z-4" />
      <Header />
      <Invitation />
      <Description />
      <ParticipeButton />
    </div>
  )
}

const Header = () => (
  <div className="flex flex-col justify-center items-center md:flex-col-reverse lg:flex-row lg:flex-row-reverse lg:justify-between lg:items-center lg:w-full lg:h-[15rem]">
    <Logo />
    <Title />
  </div>
)

const Logo = () => (
  <div className="relative">
    <img
      alt="Logo do ByteCafé - Uma xícara feita de chaves (operador matemático) com números em binário (0 e 1) representando a bebida em cor de caramelo. Os números em binário representam o código do curso. Há um vapor, também em cor de caramelo saindo da xícara."
      src="/logo/logo_bytecafe.svg"
      className="h-[18rem] md:h-[13rem] mt-4 md:mt-0 lg:h-[20rem] lg:h-[24rem]"
    />
    <div className="hidden lg:block">
      <img
        alt="Reflexo do logo do ByteCafé"
        src="/logo/logo_bytecafe.svg"
        className="mt-0 lg:h-[24rem] absolute top-full left-0 transform rotate-180 opacity-20"
        style={{
          clipPath: 'inset(0 0 0 0)',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',
        }}
      />
    </div>
  </div>
)

const Title = () => (
  <span className="text-bc-caramel">
    <p className="text-[1.5rem] h-[1.5rem] md:text-[5rem] md:h-[5rem]">UM PROJETO</p>
    <h1 className="font-thin text-[2.5rem] md:text-[7rem] md:font-bold">SYMCOMP</h1>
  </span>
)

const Invitation = () => (
  <div className="hidden sm:block text-bc-brown font-mono font-bold text-[1.1rem] w-[20rem] pb-4">
    <p>VENHA CONHECER O CURSO DE COMPUTAÇÃO DA USP!</p>
  </div>
)

const Description = () => (
  <p className="px-[1.5rem] lg:px-0 text-[0.9rem] pb-8 max-w-[35rem]">
    ByteCafé é um evento voltado para alunos no Ensino Médio conhecerem numa experiência
    prática o curso de <strong>Ciências da Computação</strong> do Instituto de Matemática
    e Estatística da Universidade de São Paulo - <strong>IME USP</strong>.
  </p>
)

const ParticipeButton = () => (
  <BCButton href="#participation" target="_self" className="mb-8 hover:bg-bc-caramel">
    PARTICIPE
  </BCButton>
)
