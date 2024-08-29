import Image from "next/image"
import Link from "next/link"

import { Button } from "../ui/button"
import { CustomButton } from "../ui/custom-button"
import { Title } from "../ui/title"

export const Projects = () => {
    const projects = [
        {
            label: 'Semana da Computação',
            href: 'semana',
            imageUrl: '/logo/sc.png',
            description: 'Anualmente reunimos alunos da graduação e visitantes para participar de uma semana de palestras, competições, brindes, networking e coffee breaks.'
        },
        {
            label: 'ByteCafé',
            href: 'byte-cafe',
            imageUrl: '/logo/bc.png',
            description: 'Duas vezes por semestre convidamos alunos do Ensino Médio para conhecer a USP e o curso de Ciência da Computação.'
        }
    ]
    
    return (
        <div id="projects" className="py-6 flex flex-col gap-6">
            <Title color="pink">CONHEÇA NOSSOS PROJETOS</Title>
            <div className="flex flex-row gap-8 items-center justify-center">
                {projects.map(project => (
                    <div key={project.href} className="flex flex-col gap-4">
                        <div className="size-[256px] rounded-full bg-secondary flex flex-row items-center justify-center">
                            <Image height={100} width={100} alt={`Logo da ${project.label}`} src={project.imageUrl} />
                        </div>
                        <p className="w-[256px]">{project.description}</p>
                        <CustomButton color="pink">
                            <Link href={project.href}>
                                {project.label.toUpperCase()}
                            </Link>
                        </CustomButton>
                    </div>
                ))}
            </div>
        </div>
    )
}