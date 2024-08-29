import Image from "next/image"

import { Button } from "../ui/button"
import { Title } from "../ui/title"

export const Projects = () => {
    const projects = [
        {
            label: 'Semana da Computação',
            href: 'semana',
            imageUrl: null,
            description: 'Anualmente reunimos alunos da graduação e visitantes para participar de uma semana de palestras, competições, brindes, networking e coffee breaks.'
        },
        {
            label: 'ByteCafé',
            href: 'byte-cafe',
            imageUrl: null,
            description: 'Duas vezes por semestre convidamos alunos do Ensino Médio para conhecer a USP e o curso de Ciência da Computação.'
        }
    ]
    
    return (
        <div className=" flex flex-col gap-6">
            <Title color="pink">CONHEÇA NOSSOS PROJETOS</Title>
            <div className="flex flex-row gap-8 items-center justify-center">
                {projects.map(project => (
                    <div key={project.href} className="flex flex-col gap-4">
                        <div className="size-[256px] rounded-full bg-secondary">
                            {project.href !== null ??
                                <Image alt={`Logo da ${project.label}`} src={project.href} />
                            }
                        </div>
                        <p className="w-[256px]">{project.description}</p>
                        <Button disabled className="font-extrabold py-2 shadow-solid mb-[5px] border-4 border-black">{project.label.toUpperCase()}</Button>
                    </div>
                ))}
            </div>
        </div>
    )
}