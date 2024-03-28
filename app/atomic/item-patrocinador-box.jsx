import React from 'react';

const ItemPatrocinadorBox = (props) => {
    return (
        <div>
            <a href={props.patrocinadorSite} target="_blank"><div className="patrocinadores_patrocinadorbox">
            <div className="patrocinadores_patrocinadorbox_label"
            style={{ backgroundColor: props.backgroundColor }}>
            <p>{props.cotaPatrocinio}</p>
            </div>
            <img src={props.imgPath}className="patrocinadores_patrocinadorbox_img"/>
            </div></a>
            <p className='patrocinadores_patrocinadorname'>{props.patrocinadorName}</p>
        </div>
    );
};

export default ItemPatrocinadorBox;
