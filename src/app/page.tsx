import { AboutUs } from '@/components/home/about-us'
import { Footer } from '@/components/home/footer'
import { HomeHeader } from '@/components/home/header'
import { HeroSection } from '@/components/home/hero-section'
import { Projects } from '@/components/home/projects'
import { Title } from '@/components/ui/title'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SYMCOMP | Aproximando a computação e a sociedade',
  description:
    'O Simpósio da Computação promove eventos relacionados à computação na Universidade de São Paulo campus Butantã. Com alunos do curso de Bacharelado em Ciência da Computação, oferecido pelo Instituto de Matemática e Estatística (IME), somos responsáveis por aproximar os alunos de graduação da sociedade, fortalecendo a presença do BCC na comunidade interna e externa à USP.',
}

export default function Home() {
  return (
    <main className="bg-white h-screen">
      <div className="grid grid-rows-[auto,1fr] h-screen">
        <HomeHeader />
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
