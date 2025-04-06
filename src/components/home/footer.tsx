import Image from 'next/image'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'

export const Footer = () => {
  const socialMedias = [
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/symcomp.imeusp/',
      icon: <BsInstagram size={32} color="white" />,
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/company/symcompimeusp',
      icon: <BsLinkedin size={32} color="white" />,
    },
    {
      label: 'Email',
      url: 'mailto:symcomp@ime.usp.br',
      icon: <SiGmail size={32} color="white" />,
    },
  ]

  return (
    <div className="p-6 flex flex-col items-center justify-center gap-2 bg-background">
      <h2 className="text-2xl font-bold text-white">OFERECIMENTO</h2>
      <div className="flex flex-row gap-[64px] w-full items-center justify-center">
        <Image
          width={200}
          height={200}
          src="/logo/usp.png"
          alt="Logo da USP"
          className="invert w-[100px]"
        />
        <Image
          width={100}
          height={100}
          src="/logo/ime.svg"
          alt="Logo do Instituto de Matemática e Estatística"
          className="invert size-[150px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="text-2xl font-bold text-white">REDES SOCIAIS</h2>
        <div className="flex flex-row gap-8">
          {socialMedias.map((sc) => (
            <a
              key={sc.label}
              href={sc.url}
              className="flex flex-col items-center justify-center gap-2"
            >
              {sc.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
