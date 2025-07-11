import BCButton from './bcbutton'

interface SectionProps {
  title: string
  subtitle: string
  children: React.ReactNode
}

const Section = ({ title, subtitle, children }: SectionProps) => (
  <div className="z-10 md:max-w-[25rem] md:ml-8 mb-6">
    <h2>
      <span className="text-[1.5rem]">{title}</span>
      <br />
      <span className="text-[2rem]">{subtitle}</span>
    </h2>
    <p className="pt-2 text-[0.9rem]">{children}</p>
  </div>
)

export const BCPresentation = () => {
  return (
    <div
      id="presentation"
      className="relative flex flex-col justify-center items-center bg-bc-brown text-bc-white min-h-screen px-8 font-mono overflow-x-hidden overflow-y-hidden w-full"
    >
      <img
        alt="Logo transparente do ByteCafé"
        src="/logo/bc_black.png"
        className="absolute left-40 opacity-20 h-[20rem] md:h-[40rem] md:left-60 w-auto lg:h-[50rem] lg:left-[40rem]"
        style={{ zIndex: 2 }}
      />
      <div className="flex flex-col lg:w-[65rem] w-full">
        <div className="h-[109px]" />
        <Section title="NOSSOS" subtitle="OBJETIVOS_">
          Queremos com o ByteCafé aproximar alunes do Ensino Médio a conhecerem mais do
          curso e carreira na área de computação. Queremos que os participantes conheçam
          melhor a USP, formas de entrada na Universidade, os diferentes benefícios e
          auxílios para permanência em uma experiência prática.
        </Section>
        <Section title="QUEM" subtitle="SOMOS_">
          Somos um grupo de extensão chamado SymComp | Simpósio de Computação, formado por
          alunos da graduação do curso de Ciência da Computação do IME-USP, cujo foco é
          realizar eventos de computação para comunidade interna e externa da faculdade,
          levando o conteúdo de computação para todes.
        </Section>
        <BCButton
          target="_self"
          href="#"
          className="w-[11rem] justify-center items-center text-center bg-transparent text-bc-white border-bc-white shadow-[4px_4px_0_rgba(255,255,255,1)] md:ml-8 mb-8 hover:bg-bc-caramel hover:text-bc-white"
        >
          SAIBA MAIS
        </BCButton>
      </div>
    </div>
  )
}
