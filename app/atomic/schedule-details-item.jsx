import React from "react";

/**
 * Component to display a navigation item given a section it should direct the user to.
 * @param {Object} props - The component's properties.
 * @param {boolean} props.onAir - Attribute true if the presenatation is happening right now or false otherwise.
 * @param {string} props.time - Presentation's time in the format "hh:mm - hh:mm".
 * @param {string} props.theme - Presentation's theme.
 * @param {string} props.title - Presentation's title.
 * @param {string} props.lecturer - Presentation's lecturer.
 * @returns {JSX.Element} Atomic schedule item containing the presentation briefs.
 */
export default function ScheduleDetailsItem (props) {
    return (
        <div className="flex flex-col w-full">
            <div>
                Tema: {props.theme}
            </div>
            <div>
                <div>
                    Foto: <img />
                </div>
                <div className="flex flex-col">
                    <span>Título: {props.title}</span>
                    <span>Palestrante: {props.lecturer}</span>
                </div>
            </div>
            <div>
                Horário: {props.time}
            </div>
        </div>
    )
}