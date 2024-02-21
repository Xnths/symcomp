import React from 'react';
import "../styles/semana.css";

export default function ItemEventInfo (props) {
    return (
        <div className='presentation__eventinfos'>
            <span className='presentation__eventinfos_date'>22 A 26 DE ABRIL</span>
            <span className='presentation__eventinfos_location'>
                <p id="presentation__eventinfos_local_name">AUDITÓRIO JACY MONTEIRO </p>
                <p id="presentation__eventinfos_local_adress">R. do Matão, 1010 - BUtantã, São Paulo - SP, 05508-090</p>
            </span>
        </div>
    )
}