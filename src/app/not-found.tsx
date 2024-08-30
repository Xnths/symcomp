export default function NotFoundPage () {
    return (
        <div className="flex flex-row items-center justify-center h-full w-full">
            <div className="flex w-4/5 h-screen flex-col items-center justify-center gap-2">
                    <div className="w-full flex flex-row justify-start">
                        <h2 className="font-extrabold bg-primary border-4 px-8 py-4 border-black shadow-solid w-fit text-2xl sm:text-8xl">QUE EVENTO É ESSE?</h2>
                    </div>
                    <div className="sm:w-full flex flex-row justify-end">
                        <p className="font-extrabold bg-white border-4 px-8 py-4 border-black shadow-solid w-fit text-xm sm:text-2xl">VISH, PARECE QUE ESSA PÁGINA NÃO EXISTE <span className="opacity-45">(AINDA?)</span></p>
                    </div>
            </div>
        </div>
    )
}