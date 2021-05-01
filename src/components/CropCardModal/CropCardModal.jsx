import React from 'react';
import './CropCardModal.scss';

function CropCardModal({ data, click, setClick, enableScroll }) {
    const mapStyle = {
        backgroundImage: `url(${data.map_url})`
    }

    document.addEventListener('keydown', e => {
        if(click && e.key === 'Escape'){
            setClick(false);
            enableScroll();
        }
    });

    return (
        <>
            <div className={`modal ${click ? 'active' : ''}`}>
                <div className="map_view">
                    <img src={data.map_url} alt={`${data.name} Map`} />
                </div>
                <div className="modal_container">
                    <div className="modal_header">
                        <div></div>
                        <div className="modal_title">{data.name}</div>
                        <button className="close-button" onClick={() => {
                            setClick(false);
                            enableScroll();
                        }}>
                        </button>
                    </div>
                    <div className="modal_body">
                        <div className="stats">
                            <div className="typeofcrop"><span>Type:</span> {data.type}</div>
                            <div className="seasonofcrop"><span>Season:</span> {data.season}</div>
                            <div className="states"><span>States:</span> {data.states}</div>
                            <div className="soiltype"><span>Soil Type:</span> {data.soil_type}</div>
                            <div className="temp"><span>Temperature:</span> {data.temp}</div>
                            <div className="rainfall"><span>Rainfall:</span> {data.rainfall}
                            </div>
                        </div>

                        <div className="about_crop">
                            {data.desc}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`overlay ${click ? 'active' : ''}`}></div>
        </>
    )
}

export default CropCardModal;
