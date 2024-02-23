import React from "react";
import Image from "next/image";
import ItemInstaIcon from "./item-icon-insta";
import ItemIconEmail from "./item-icon-email";
import ItemEventLinkedin from "./item-event-linkedin";

import "../styles/semana.css";

export default function ItemSocialMedia(props) {
    return (
        <div className="presentation__socialmedia">
            <p>REDES SOCIAIS</p>
            <div className="presentation__socialmedia_icons">
                <a href="https://www.instagram.com/symcomp.imeusp?igsh=MTYybmM0eTBicjh3cQ==" target="_blank">
                    <div>
                        <ItemInstaIcon fillColor="#FF006E"/>
                    </div>
                    <p>Instagram</p>
                </a >
                <a href="mailto:semanadacomputacao@ime.usp.br" target="_blank">
                    <div>
                        <ItemIconEmail fillColor="#FF006E"/>
                    </div>
                    <p>E-mail</p>
                </a>
                <a href="https://www.linkedin.com/in/semana-da-computa%C3%A7%C3%A3o-ime-usp-00420828a/" target="_blank">
                    <div>
                        <ItemEventLinkedin fillColor="#FF006E"/>
                    </div>
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    )
}