import Image from 'next/image'
import Link from 'next/link'

import { CustomButton } from '@/components/ui/custom-button'
import { barlowCondensed } from '@/lib/font'
import { cn } from '@/lib/utils'

export default function Semana() {
  const pictures2024 = [
    {
      src: '/photos/valentina.JPG',
      alt: 'No palco do auditório Jacy Monteiro, Valentina apresenta sua aula sobre GitHub.',
    },
    {
      src: '/photos/plateia.JPG',
      alt: 'Vários alunos sentados no auditório. As cadeiras são vermelhas e detalhes em preto. Elas se encontram elevadas para melhor visão do palestrante.',
    },
    {
      src: '/photos/rede_linux.JPG',
      alt: 'Três alunos apresentam o projeto da rede linux no projetor do auditório.',
    },
    {
      src: '/photos/equipe_lpy.JPG',
      alt: 'Três dos organizadores, vestidos com a camiseta do evento em rosa, estão configurando o som para próxima apresentação.',
    },
    {
      src: '/photos/encontro.JPG',
      alt: 'Em roda, vários ex-alunos e atuais professores do departamento conversam com alunos da graduação sobre suas experiências.',
    },
    {
      src: '/photos/coffee_break.JPG',
      alt: 'Em um corredor amplo, alunos participantes das palestras confraternizam e conversam no Bloco B do IME - USP',
    },
    {
      src: '/photos/coffee_break2.JPG',
      alt: 'Alunos em rosa da organização distribuem bolo para os participantes da palestra com professores',
    },
  ]

  return (
    <div>
      <div className="flex flex-col gap-[25px] w-full h-svh justify-center items-center bg-sc-2025-background">
        <div className="w-full flex justify-center items-center bg-sc-2025-contrast h-[70px] lg:h-[120px]">
          <div className="flex flex-col">
            <div className="flex flex-row gap-4 items-end">
              <h2
                className={cn(
                  barlowCondensed.className,
                  'font-bold text-6xl lg:text-8xl italic text-sc-2025-primary sc-2025-text-shadow-solid',
                )}
              >
                SEMANA AAAAAAAAAAAAA
              </h2>
              <h2
                className={cn(
                  barlowCondensed.className,
                  'font-bold text-4xl lg:text-6xl italic text-sc-2025-background sc-2025-text-shadow-solid',
                )}
              >
                XV
              </h2>
            </div>
            <h2
              className={cn(
                barlowCondensed.className,
                'font-bold text-5xl lg:text-7xl italic text-sc-2025-secondary sc-2025-text-shadow-solid',
              )}
            >
              DA COMPUTAÇÃO
            </h2>
          </div>
        </div>
        <div className="mt-[50px] flex flex-col lg:flex-row gap-4">
          <CustomButton color="white">
            <Link href="https://forms.gle/ZTL8WRMhWsarFTUV9">
              Participar da organização
            </Link>
          </CustomButton>
          <CustomButton color="white">
            <a href="mailto:semanadacomputacao@ime.usp.br">Patrocinar o evento</a>
          </CustomButton>
        </div>
      </div>
      <div className="flex flex-col bg-sc-2025-background justify-center items-center">
        <h2 className="font-bold text-2xl lg:text-2xl text-black symcomp-border py-2 px-8 bg-white">
          EDIÇÃO DE 2024
        </h2>

        <div className="w-fit flex flex-row flex-wrap justify-center items-center p-[50px] gap-4">
          {pictures2024.map((pictures) => (
            <Image
              key={pictures.src}
              width={720}
              height={1280}
              src={pictures.src}
              className="w-[640px] symcomp-border"
              alt={pictures.alt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
