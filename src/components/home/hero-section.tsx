import { ArrowBigDownDash, CoffeeIcon, HandshakeIcon, SpeechIcon } from "lucide-react"

export const HeroSection = () => {
    const highlights = [
        {
            label: 'Palestras',
            icon: <SpeechIcon size={64} color="black" />
        },
        {
            label: 'Networking',
            icon: <HandshakeIcon size={64} color="black" />
        },
        {
            label: 'Coffee Breaks',
            icon: <CoffeeIcon size={64} color="black" />
        }
    ]

    return (
        <div id="home" className="bg-background h-[calc(100vh-100px)]">
            <div className="flex flex-col justify-between items-center h-full py-[100px]">
                <div className="px-4 flex flex-col gap-4 sm:w-2/3">
                    <h1 className="font-extrabold text-black text-xl sm:text-4xl px-4 sm:px-8 py-2 bg-secondary shadow-solid w-fit border-4 border-black">SIMPÓSIO DA COMPUTAÇÃO</h1>
                    <p className="text-white text-lg sm:text-2xl sm:w-2/5 hyphens-auto ">Organizando eventos sobre computação, aproximando a comunidade <strong>interna</strong> e <strong>externa</strong> do curso de Bacharelado em Ciência da Computação da USP Butantã.</p>
                </div>
                <div className="w-full overflow-auto flex flex-row items-center justify-center">
                    <div className="flex flex-row w-fit justify-center gap-4 sm:gap-10 px-4 py-[20px]">
                        {highlights.map(highlight => (
                            <div key={highlight.label} className="flex flex-col justify-center items-center gap-4 border-4 border-black shadow-solid bg-secondary p-4 sm:p-10">
                                <span className="text-black font-extrabold text-xs sm:text-lg text-center">
                                    {highlight.label.toUpperCase()}
                                </span>
                                    {highlight.icon}
                            </div>
                        ))}
                    </div>
                </div>
                <ArrowBigDownDash color="white" className="animate-bounce" size={64} />
            </div>
        </div>
    )
}