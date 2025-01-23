import { BcHeader } from "@/components/bytecafe/header";
import { BCHome } from "@/components/bytecafe/home";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ByteCafé | Um Projeto SymComp",
    description: "O ByteCafé é um projeto organizado pelo grupo de extensão do IME USP SymComp - Simpósio de Computação, com o objetivo de atrair mais alunos para o curso de computação e para USP, proporcionando aos visitantes experiências da vida universitária imeana."
};


export default function ByteCafe() {
    return (
        <div className="flex flex-col justify-center items-center bg-bc-white font-mont">
            <BcHeader />
            <BCHome />
        </div>
    );
}
