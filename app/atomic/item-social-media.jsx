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
                <div>
                    <div>
                        <ItemInstaIcon fillColor="#FF006E"/>
                    </div>
                    <p>Instagram</p>
                </div>
                <div>
                    <div>
                        <ItemIconEmail fillColor="#FF006E"/>
                    </div>
                    <p>E-mail</p>
                </div>
                <div>
                    <div>
                        <ItemEventLinkedin fillColor="#FF006E"/>
                    </div>
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>
    )
}