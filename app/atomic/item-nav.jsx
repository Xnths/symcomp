import React from 'react';

/**
 * Component to display a navigation item given a section it should direct the user to.
 * @param {Object} props - The component's properties.
 * @param {string} props.navigateTo - Name of the section the item should direct the user to.
 * @param {string} props.innerText - Name that will appear inside the item.
 * @returns {JSX.Element} Atomic navigation menu item.
 */
export default function ItemNav (props) {
    return (
        <a className='flex flex-row items-center min-w-2 text-center px-14 py-3 bg-pink text-2xl border-4 border-black shadow-2xl font-semibold text-white ' href={`#${props.navigateTo}`}>
            {props.innerText.toUpperCase()}
        </a>
    )
}