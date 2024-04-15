import React from 'react';

const NewScheduleBox = (props) => {
    return (
        <div id='newschedule__container'>
            <div id='newschedule__schedulebox'>
                {props.ImgPath && <img src={`palestrantes/${props.ImgPath}`} alt={`Foto de´ ${props.lecturer}`} />}
                <div id='newschedule__fulltitle'>
                    <div id="newschedule__title">{props.title}</div>
                    <div id='newschedule__lecturer'>{props.lecturer}</div>
                </div>
                <div className='newschedule__buttons' id='newschedule__saibamais'>SAIBA MAIS</div>
                <div className='newschedule__buttons' id='newschedule__time'>{props.time}</div>
            </div>
        </div>
    );
};

export default NewScheduleBox;
