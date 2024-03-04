import React, { useState } from 'react';
import "../styles/semana.css"

/**
 * Component to display a navigation item given a section it should direct the user to.
 * @param {Object} props - The component's properties.
 * @param {boolean} props.selected - Attribute true if it is the selected nav Item or false otherwise.
 * @param {funciton} props.onClick - Function that manages the clicks.
 * @param {string} props.navigateTo - Name of the section the item should direct the user to.
 * @param {string} props.innerText - Name that will appear inside the item.
 * @returns {JSX.Element} Atomic navigation menu item.
 */
export default function ItemNav (props) {
    const handleClick = () => {
        if (props.onClick) {
            props.onClick();
        }
    }

    return (
        <a 
            className={props.selected ? 'nav__item nav__item-selected' : 'nav__item'}
            href={`#${props.navigateTo}`}
            onClick={handleClick}
        >
            {props.innerText.toUpperCase()}
        </a>
    )
}