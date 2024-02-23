import React from 'react';

const ItemPatrocinadorBox = (props) => {
    return (
        <div>
            <div className="patrocinadores_patrocinadorbox">
                    <div className="patrocinadores_patrocinadorbox_label"
                    style={{ backgroundColor: props.backgroundColor }}>
                        <p>{props.cotaPatrocinio}</p>
                    </div>
                    <img src={props.imgPath}className="patrocinadores_patrocinadorbox_img"/>
            </div>
            <p className='patrocinadores_patrocinadorname'>{props.patrocinadorName}</p>
        </div>
    );
};

export default ItemPatrocinadorBox;
