import React from "react";
import Image from "next/image";

import "../styles/semana.css";

export default function ItemSocialMedia(props) {
    return (
        <div className="presentation__socialmedia">
            <p>REDES SOCIAIS</p>
            <div className="presentation__socialmedia_icons">
                <div id="instagram">
                    <Image src="/icons/icon_instagram.svg" width={48} height={48} />
                </div>
                <div id="email">
                    <Image src="/icons/icon_email.svg" width={48} height={48} />
                </div>
                <div id="linkedin">
                    <Image src="/icons/icon_linkedin.svg" width={48} height={48} />
                </div>
            </div>
        </div>
    )
}