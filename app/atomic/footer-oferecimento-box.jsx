import React from "react";

export default function FooterOferecimentoBox(props) {
    return (
        <div className="symcomp-signature__container">
            <div className="oferecimento__titles">{props.TitleText}:</div>
            <a href={props.ImgLink}>
                <div id="symcomp-signature__logo"><img src={props.ImgPath} alt={props.ImgAlt}/></div>
            </a>
        </div>
    )
}