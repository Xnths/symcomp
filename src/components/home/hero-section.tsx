import { ArrowBigDownDash, CoffeeIcon, HandshakeIcon, SpeechIcon } from "lucide-react"

export const HeroSection = () => {
    const highlights = [
        {
            label: 'Palestras',
            icon: <SpeechIcon size={64} color="black" />
        },
        {
            label: 'Encontros',
            icon: <HandshakeIcon size={64} color="black" />
        },
        {
            label: 'Coffee Breaks',
            icon: <CoffeeIcon size={64} color="black" />
        }
    ]

    return (
        <div className="px-4 bg-background h-[calc(100vh-100px)]">
            <div className="flex flex-col justify-between items-center h-full py-[100px]">
                <div className="flex flex-col gap-4">
                    <h1 className="font-extrabold text-black text-4xl px-8 py-2 bg-secondary shadow-solid w-fit border-4 border-black">SIMPÓSIO DA COMPUTAÇÃO</h1>
                    <p className="text-white text-2xl w-2/5">Organizando e realizando eventos sobre computação para a comunidade <strong>interna</strong> e <strong>externa</strong> à USP</p>
                </div>
                <div className="flex flex-row w-full justify-center gap-10">
                    {highlights.map(highlight => (
                        <div key={highlight.label} className="flex flex-col justify-center items-center gap-4 border-4 border-black shadow-solid bg-secondary p-10">
                            <span className="text-black font-extrabold">
                                {highlight.label.toUpperCase()}
                            </span>
                                {highlight.icon}
                        </div>
                    ))}
                </div>
                <ArrowBigDownDash color="white" className="animate-bounce" size={64} />
            </div>
        </div>
    )
}