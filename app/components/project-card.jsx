import Image from "next/image";

export default function ProjectCard({ children, buttonText, srcImage }) {
    return (
        <div className="flex flex-col items-center max-w-[300px] gap-5">
            <div className="flex items-center justify-center h-32 p-8 bg-yellow-500 rounded-full md:h-64 aspect-square">
                <Image className="h-auto"
                    src={srcImage} height={120} width={120}
                />
            </div>
            <p className="hidden text-2xl md:contents">
                {children}
            </p>
            <a className="w-full px-1 py-2 font-semibold text-center text-white bg-pink-600 border-2 border-black max-w-32 md:max-w-none text-md shadow-black button-shadow md:text-2xl" href="#">
                {buttonText}
            </a>
        </div>
    )
}