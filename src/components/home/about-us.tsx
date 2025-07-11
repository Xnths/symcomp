import { Title } from '../ui/title'

export const AboutUs = () => {
  return (
    <div id="about">
      <Title color="yellow">SOBRE NÓS</Title>
      <div className="flex flex-col items-center p-8 gap-8">
        <p className="sm:w-1/3 indent-8 text-justify hyphens-auto">
          A SymComp, Simpósio da Computação, é um grupo de extensão originado em 2023 a
          partir da comissão responsável pela Semana da Computação do Instituto de
          Matemática e Estatística da Universidade de São Paulo (IME USP). O grupo surgiu
          com o propósito de fortalecer a presença do curso de Ciência da Computação não
          apenas dentro da comunidade uspiana, mas também na comunidade externa,
          promovendo eventos e atividades relacionadas a essa ciência tão essencial e
          relevante na atualidade.
        </p>
        {/* <CustomButton disabled color="yellow">QUERO FAZER PARTE</CustomButton> */}
      </div>
    </div>
  )
}
