import React from 'react';
import "../styles/semana.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ItemEventInfo (props) {
    return (
        <div className='presentation__eventinfos'>
            <div className='presentation__eventinfos_date'>
                <CalendarMonthIcon id="presentation__eventinfos_calendaricon" className='presentation__icons'/>

                <span id="presentation__eventinfos_datenumber">22 A 26 DE ABRIL</span>
            </div>
            <div className='presentation__eventinfos_location'>
                <LocationOnIcon id="presentation__eventinfos_locationicon" className='presentation__icons'/>
                <div className='presentation__eventinfos_text'>
                    <span id="presentation__eventinfos_local_name">AUDITÓRIO JACY MONTEIRO </span>
                    <span id="presentation__eventinfos_local_adress">R. do Matão, 1010 - Butantã, São Paulo - SP, 05508-090</span>
                </div>
            </div>
        </div>
    )
}