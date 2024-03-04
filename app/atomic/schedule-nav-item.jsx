import React, { useState } from 'react';
import "../styles/semana.css"

/**
 * Component to display a navigation item given a section it should direct the user to.
 * @param {Object} props - The component's properties.
 * @param {boolean} props.selected - Attribute true if it is the selected nav Item or false otherwise.
 * @param {funciton} props.onClick - Function that manages the clicks.
 * @param {string} props.date - Date in the format DD/MM.
 * @param {string} props.dayWeek - The first three letter of the day of the week. Example: SEG, TER, QUA...
 * @returns {JSX.Element} Atomic navigation menu item.
 */
export default function ScheduleNavItem (props) {
    const handleClick = () => {
        if (props.onClick) {
            props.onClick();
        }
    }

    return (
        <a 
            className={props.selected ? 'schedule__nav-item schedule__nav-item--active' : 'schedule__nav-item'}
            onClick={handleClick}
        >
            <span className='schedule__nav--day-week'>
                {props.dayWeek.toUpperCase()}
            </span>
            <span className='schedule__nav--date'>
                {props.date.toUpperCase()}
            </span>
        </a>
    )
}