import "../styles/semana.css";
import ItemPatrocinadorBox from "../atomic/item-patrocinador-box";

export default function Patrocinadores () {
    return (
        <div className="patrocinadores">
            <p id="patrocinadores_title">PATROCINADORES</p>
            <p id="patrocinadores_text">Conheça os patrocinadores da XIV Semana de Computação IME USP:</p>
            <div className="patrocinadores_button">
                <a href="#" target="_blank">
                    <button>QUERO PATROCINAR!</button>
                </a>    
            </div>
            <div className="patrocinadores_cota">
                {/* <ItemPatrocinadorBox backgroundColor="var(--bg-gold)" cotaPatrocinio="OURO" patrocinadorName="Panda" imgPath="../../public/logo_ime_preta.png"/>


                <ItemPatrocinadorBox backgroundColor="var(--bg-gold)" cotaPatrocinio="OURO" patrocinadorName="Polar"/>
                
                <ItemPatrocinadorBox backgroundColor="var(--bg-gold)" cotaPatrocinio="OURO" patrocinadorName="Pardo"/>

                <ItemPatrocinadorBox backgroundColor="var(--bg-silver)" cotaPatrocinio="PRATA" patrocinadorName="Google"/>

                <ItemPatrocinadorBox backgroundColor="var(--bg-bronze)" cotaPatrocinio="BRONZE" patrocinadorName="16 CARRIAGES"/> */}
            </div>
        </div>
    )
}
            