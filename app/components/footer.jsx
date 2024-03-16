import ImeLogo from "../atomic/ime-logo";
import SymCompLogo from "../atomic/symcomp-logo";
import UspLogo from "../atomic/usp-logo";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center w-full pt-10 pb-2 bg-gray-800 md:pt-20">
            <div className="flex flex-col items-center w-full max-w-[1200px] text-white gap-10">
                <h1 className="text-xl font-bold">
                    OFERECIMENTO
                </h1>
                
                <div className="flex items-center justify-between w-full px-8 max-w-[800px]">
                    <UspLogo className="h-10 w-fit md:h-20"/>
                    <SymCompLogo className="h-10 w-fit md:h-20"/>
                    <ImeLogo className="h-10 w-fit md:h-20"/>
                </div>

                <p className="text-gray-400">
                    &copy; 2024 Symcomp
                </p>
            </div>
        </footer>
    )
}