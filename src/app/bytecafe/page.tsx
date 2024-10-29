import { AboutUs } from "@/components/home/about-us";
import { Footer } from "@/components/home/footer";
import { HomeHeader } from "@/components/home/header";
import { HeroSection } from "@/components/home/hero-section";
import { Projects } from "@/components/home/projects";
import { Title } from "@/components/ui/title";


import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ByteCafé | Um Projeto SymComp",
    description: "O ByteCafé é um projeto organizado pelo grupo de extensão do IME USP SymComp - Simpósio de Computação, com o objetivo de atrair mais alunos para o curso de computação e para USP, proporcionando aos visitantes experiências da vida universitária imeana."
};


export default function ByteCafe() {
    return (
        <div>
            ByteCafé
        </div>
    );
}
