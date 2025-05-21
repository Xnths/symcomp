import type { Metadata } from 'next'

import { BCContent } from './content'
import { BCFaq } from './faq'
import { BCFooter } from './footer'
import { BCHeader } from './header'
import { BCHome } from './home'
import { BCParticipation } from './participation'
import { BCPresentation } from './presentation'

export const metadata: Metadata = {
  title: 'ByteCafé | Um Projeto SymComp',
  description:
    'O ByteCafé é um projeto organizado pelo grupo de extensão do IME USP SymComp - Simpósio de Computação, com o objetivo de atrair mais alunos para o curso de computação e para USP, proporcionando aos visitantes experiências da vida universitária imeana.',
}

export default function ByteCafe() {
  return (
    <main className="flex flex-col justify-start items-center bg-bc-white font-mont h-[100vh]">
      <BCHeader />
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
