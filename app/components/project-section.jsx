import ProjectCard from "./project-card";

export default function ProjectSection() {
    return (
        <div className="flex flex-col items-center w-full gap-5">
            <div className="flex justify-center w-full py-3 bg-pink-600 border-t-2 border-b-4 border-black">
                <h1 className="text-2xl font-semibold text-center text-white md:text-5xl">CONHEÇA NOSSOS PROJETOS:</h1>
            </div>


            <div className="grid grid-flow-col auto-cols-max overflow-x-auto gap-10 p-5 w-full max-w-[1200px] justify-between">
                <ProjectCard buttonText="Semana da Computação" srcImage="/semana-logo.png">
                    Lorem Ipsum is simply dummy text of the the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </ProjectCard>
                
                
                <ProjectCard buttonText="ByteCafé" srcImage="/bytecafe-logo.png">
                    Lorem Ipsum is simply dummy text of the the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </ProjectCard>

                <ProjectCard buttonText="ByteCafé" srcImage="/bytecafe-logo.png">
                    Lorem Ipsum is simply dummy text of the the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </ProjectCard>
            </div>
        </div>
    )
}