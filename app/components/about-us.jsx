import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="flex max-w-[1200px] relative w-full">
            <div className="flex flex-col items-center w-full h-full gap-8 p-5 bg-blue md:bg-[url('/slider/team.png')] bg-cover md:p-16 md:gap-16 bg-center">
                <h1 className="z-10 text-2xl font-bold text-white sm:text-5xl">
                    QUEM SOMOS?
                </h1>

               

                <Image 
                    src='/slider/team.png'
                    width={1270}
                    height={720}
                    className="aspect-[21/9] object-cover border-[3px] border-black button-shadow md:hidden z-10"
                />
                <p className="z-10 text-justify text-white sm:text-xl max-w-[700px]">
                    A SymComp, Simpósio da Computação, é um grupo de extensão originado em 2023 a 
                    partir da comissão responsável pela Semana da Computação do Instituto de Matemática e Estatística 
                    da Universidade de São Paulo (IME USP). O grupo surgiu com o propósito de fortalecer a presença do 
                    curso de Ciência da Computação não apenas dentro da comunidade uspiana, mas também na comunidade externa, 
                    promovendo eventos e atividades relacionadas a essa ciência tão essencial e relevante na atualidade.
                </p>

                <a 
                    href="#"
                    className="p-3 text-lg font-bold border-[3px] border-black bg-yellow button-shadow w-2/3 max-w-[360px] sm:text-2xl text-center z-10 hover:scale-105 transition hover:bg-yellow-500"
                >
                    QUERO FAZER PARTE!
                </a>
            </div>

            <div className="absolute hidden w-full h-full bg-black opacity-70 md:block">
            </div>
        </div>
    )
}