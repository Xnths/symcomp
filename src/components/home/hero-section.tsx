import { ArrowBigDownDash } from "lucide-react"

export const HeroSection = () => {
    return (
        <div className="px-4 bg-background h-[calc(100vh-100px)]">
            <div className="flex flex-col justify-between items-center h-full py-[100px]">
                <div className="flex flex-col gap-4">
                    <h1 className="font-extrabold text-white text-4xl">SIMPÓSIO DA COMPUTAÇÃO</h1>
                    <p className="text-white text-2xl">Organizando e realizando eventos sobre computação para a comunidade <strong>interna</strong> e <strong>externa</strong> à USP</p>
                </div>
                <ArrowBigDownDash color="white" className="animate-bounce" size={64} />
            </div>
        </div>
    )
}