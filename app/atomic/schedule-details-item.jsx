import React from "react";

/**
 * Component to display a navigation item given a section it should direct the user to.
 * @param {Object} props - The component's properties.
 * @param {boolean} props.onAir - Attribute true if the presenatation is happening right now or false otherwise.
 * @param {string} props.time - Presentation's time in the format "hh:mm - hh:mm".
 * @returns {JSX.Element} Atomic schedule item containing the presentation briefs.
 */
export default function ScheduleDetailsItem () {
    return (
        <div>
            <div>
                MACHINE LEARNING
            </div>
            <div>
                <div>
                    <img />
                </div>
                <div>
                    <span>Alinhando Grandes Modelos de Linguagem (LLMs) a Valores e Políticas: Tecnologias e Desafios</span>
                    <span>BEYONCÉ</span>
                </div>
            </div>
            <div>
                14:00 - 15:00
            </div>
        </div>
    )
}