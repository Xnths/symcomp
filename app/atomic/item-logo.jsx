import React from 'react';
import "../styles/semana.css"

export default function ItemLogo (props) {
    return (
        <div className='presentation__logo'>
            <div className='presentation__logo_ball'></div>
            <div className='presentation__logo_rectangle'></div>
            <div className='presentation__logo_title'>
                <span id="presentation_logo_title_semana">
                    SEMANA <span id='presentation_logo_title_edition'>XIV</span>
                </span>
                <span id="presentation_logo_title_dacomp">DA COMPUTAÇÃO</span>
            </div>
        </div>
    )
}