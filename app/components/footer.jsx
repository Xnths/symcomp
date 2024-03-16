import ImeLogo from "../atomic/ime-logo";
import ItemIconEmail from "../atomic/item-icon-email";
import ItemInstaIcon from "../atomic/item-icon-insta";
import ItemIconLikedin from "../atomic/item-icon-linkedin";
import ItemSocialMedia from "../atomic/item-social-media";
import SymCompLogo from "../atomic/symcomp-logo";
import UspLogo from "../atomic/usp-logo";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center w-full px-5 pt-10 pb-2 bg-gray-800 md:pt-20">
            <div className="flex flex-col items-center w-full max-w-[1200px] text-white gap-10">
                <h1 className="text-xl font-bold">
                    OFERECIMENTO
                </h1>
                
                <div className="flex items-center justify-between w-full px-8 max-w-[800px]">
                    <UspLogo className="h-10 w-fit md:h-20"/>
                    <SymCompLogo className="h-10 w-fit md:h-20"/>
                    <ImeLogo className="h-10 w-fit md:h-20"/>
                </div>

                <div className="flex flex-col self-center w-full gap-5">
                    <p className="md:text-xl">Siga-nos em</p>

                    <div className="flex items-center justify-start gap-5">
                        <a href="https://instagram.com/symcomp.imeusp" target="_blank">
                            <ItemInstaIcon fillColor="#fff" className="w-8 h-8 md:h-11 md:w-11"/>
                        </a>
                        <a href="https://www.linkedin.com/company/symcompimeusp" target="_blank">
                            <ItemIconLikedin fillColor="#fff" className="w-8 h-8 md:h-11 md:w-11"/>
                        </a>
                    </div>
                </div>

                <p className="text-sm text-center text-gray-400">
                    &copy; 2024 Simpósio de Computação - SymComp <br/>
                    Todos os direitos reservados
                </p>
            </div>
        </footer>
    )
}