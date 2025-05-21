import type { Metadata } from 'next'

import { Header } from '@/components/header'
import { BCPrimaryColor, BCPrimaryColorContrast } from '@/lib/constants'
import { Color } from '@/types/color'
import { Logo } from '@/types/logo'

import { BCContent } from './content'
import { BCFaq } from './faq'
import { BCFooter } from './footer'
import { BCHome } from './home'
import { BCParticipation } from './participation'
import { BCPresentation } from './presentation'

export const metadata: Metadata = {
  title: 'ByteCafé | Um Projeto SymComp',
  description:
    'O ByteCafé é um projeto organizado pelo grupo de extensão do IME USP SymComp - Simpósio de Computação, com o objetivo de atrair mais alunos para o curso de computação e para USP, proporcionando aos visitantes experiências da vida universitária imeana.',
}

export default function ByteCafe() {
  const sections = [
    {
      label: 'Início',
      href: 'home',
    },
    {
      label: 'Quem Somos',
      href: 'presentation',
    },
    {
      label: 'Edições Anteriores',
      href: 'content',
    },
    {
      label: 'Participe',
      href: 'participation',
    },
    {
      label: 'FAQ',
      href: 'bcfaq',
    },
  ]

  const logo: Logo = {
    alt: 'Logo do evento. Uma chícara de café cheia. No seu interior temos números binários dentro.',
    src: '/logo/logo_byte_horizontal.png',
    width: 200,
    height: 200,
    className: 'h-[50px]',
  }

  const color: Color = {
    primary: BCPrimaryColor,
    contrast: BCPrimaryColorContrast,
  }

  return (
    <main className="flex flex-col justify-start items-center bg-bc-white font-mont h-[100vh]">
      <Header
        color={color}
        sections={sections}
        logo={logo}
        backgroundColor="bc-backgrond"
      />
      <div className="flex flex-col justify-start items-center w-full ">
        <BCHome />
        <BCPresentation />
        <BCContent />
        <BCParticipation />
        <BCFaq />
        <BCFooter />
      </div>
    </main>
  )
}
