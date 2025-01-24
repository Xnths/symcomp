import { BcHeader } from "@/components/bytecafe/header";
import { BCHome } from "@/components/bytecafe/home";
import { BCPresentation } from "@/components/bytecafe/presentation";
import { BCContent } from "@/components/bytecafe/content";
import { BCParticipation } from "@/components/bytecafe/participation";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ByteCafé | Um Projeto SymComp",
    description: "O ByteCafé é um projeto organizado pelo grupo de extensão do IME USP SymComp - Simpósio de Computação, com o objetivo de atrair mais alunos para o curso de computação e para USP, proporcionando aos visitantes experiências da vida universitária imeana."
};


export default function ByteCafe() {
    return (
        <main className="flex flex-col justify-start items-center bg-bc-white font-mont h-[100vh]">
            <BcHeader />
            <div className="flex flex-col justify-start items-center w-full">
                <BCHome />
                <BCPresentation />
                <BCContent />
                <BCParticipation />
            </div>
        </main>
    );
}
