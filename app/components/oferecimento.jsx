import React from "react";
import SymcompSignature from "../atomic/symcomp-signature";
import FooterOferecimentoBox from "../atomic/footer-oferecimento-box";

export default function Oferecimento () {
    return (
        <div className="oferecimento__container">
            <FooterOferecimentoBox ImgPath="/logos/logo_semana_horizontal_rosa.png" ImgAlt="Logotipo horizontal SymComp - Simpósio de Computação" TitleText="OFERECIMENTO"/>

            <FooterOferecimentoBox ImgLink="https://gdg.community.dev/gdg-sao-paulo/" ImgPath="/logos/logo_google_developer_groups.png" ImgAlt="Logotipo horizontal SymComp - Simpósio de Computação" TitleText="QUEM ACREDITA"/>
        </div>
    )
}