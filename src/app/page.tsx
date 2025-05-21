import type { Metadata } from 'next'

import { Header } from '@/components/header'
import { AboutUs } from '@/components/home/about-us'
import { Footer } from '@/components/home/footer'
import { HeroSection } from '@/components/home/hero-section'
import { Projects } from '@/components/home/projects'
import { symcompPrimaryColor, symcompPrimaryColorContrast } from '@/lib/constants'
import { Color } from '@/types/color'
import { Logo } from '@/types/logo'

export const metadata: Metadata = {
  title: 'SYMCOMP | Aproximando a computação e a sociedade',
  description:
    'O Simpósio da Computação promove eventos relacionados à computação na Universidade de São Paulo campus Butantã. Com alunos do curso de Bacharelado em Ciência da Computação, oferecido pelo Instituto de Matemática e Estatística (IME), somos responsáveis por aproximar os alunos de graduação da sociedade, fortalecendo a presença do BCC na comunidade interna e externa à USP.',
}

export default function Home() {
  const sections = [
    {
      label: 'Início',
      href: 'home',
    },
    {
      label: 'Projetos',
      href: 'projects',
    },
    {
      label: 'Quem somos',
      href: 'about',
    },
  ]

  const logo: Logo = {
    alt: 'Logo do grupo de extensão',
    src: '/logo/symcomp.png',
    width: 100,
    height: 100,
    className: 'size-[60px]',
  }

  const color: Color = {
    primary: symcompPrimaryColor,
    contrast: symcompPrimaryColorContrast,
  }

  return (
    <main className="bg-white h-screen">
      <div className="grid grid-rows-[auto,1fr] h-full">
        <Header
          backgroundColor="bg-background"
          color={color}
          sections={sections}
          logo={logo}
        />
        <div className="h-full w-full overflow-auto">
          <HeroSection />
          <Projects />
          <AboutUs />
          <Footer />
        </div>
      </div>
    </main>
  )
}
