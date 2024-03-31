import "../styles/semana.css";
import ItemPatrocinadorBox from "../atomic/item-patrocinador-box";

export default function Patrocinadores () {
    const sendEmail = () => {
        const sendTo = "semanadacomputacao@ime.usp.br";
        const subject = "[PATROCÍNIO] - ";
    
        const mailtoLink = `mailto:${sendTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        window.location.href = mailtoLink;
    }    

    return (
        <div className="patrocinadores">
            <p id="patrocinadores_title" className="titles">PATROCINADORES</p>
            <p id="patrocinadores_text">Conheça os patrocinadores da XIV Semana de Computação IME USP:</p>
            <div className="patrocinadores_button">
                <a target="_blank" onClick={sendEmail}>
                    <button>QUERO PATROCINAR!</button>
                </a>    
            </div>
            <div className="patrocinadores_cota">
                <ItemPatrocinadorBox  patrocinadorSite="https://www.incognia.com/pt/" backgroundColor="var(--bg-gold)" cotaPatrocinio="OURO" patrocinadorName="Incognia" imgPath="/logos/patrocinadores/logo_incognia.png"/>

                <ItemPatrocinadorBox patrocinadorSite="https://www.opus-software.com.br/" backgroundColor="var(--bg-gold)" cotaPatrocinio="OURO" patrocinadorName="Opus Software" imgPath="/logos/patrocinadores/logo_opus.png"/>

                <ItemPatrocinadorBox patrocinadorSite="https://www.iryasolutions.com.br/" backgroundColor="var(--bg-gold)" cotaPatrocinio="OURO" patrocinadorName="Irya Solutions" imgPath="/logos/patrocinadores/logo_irya.png"/>

                <ItemPatrocinadorBox patrocinadorSite="https://brickseguros.com.br/" backgroundColor="var(--bg-gold)" cotaPatrocinio="OURO" patrocinadorName="brick" imgPath="/logos/patrocinadores/logo_brick.png"/>
                {/**/}
            </div>
        </div>
    )
}
            