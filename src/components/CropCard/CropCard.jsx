import React, { useState } from 'react';
import CropCardModal from '../CropCardModal/CropCardModal';
import "./CropCard.scss";

function CropCard({ data }) {
    const [click, setClick] = useState(false);

    const bannerStyle = {
        backgroundImage: `url(${data.image_url})`
    }

    const disableScroll = () => {
        document.body.style = `overflow: hidden !important;position: relative !important;padding-left: 0px;padding-top: 0px;padding-right: 0px;margin-left: 0;margin-top: 0;margin-right: 0px !important;`;
    }

    const enableScroll = () => {
        document.body.style = "";
    }

    return (
        <div className='cropcard'>
            <div className="cropcard__banner" style={bannerStyle}></div>
            <h2 className="cropcard__name">{data.name}</h2>
            <div className="cropcard__typeofcrop">{data.type}</div>
            <div className="cropcard__desc">{data.desc}</div>
            <button className="cropcard__toknowmore__btn" onClick={() => {
                setClick(true);
                disableScroll();
            }}>Click to know more</button>
            <CropCardModal data={data} click={click} setClick={setClick} enableScroll={enableScroll} />
        </div>
    )
}

export default CropCard;
