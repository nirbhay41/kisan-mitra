import React from 'react';
import { Link } from 'react-router-dom';
import './InfoCard.scss';

function InfoCard({ title, type, about }) {
    return (
        <div className='infocard'>
            <div className={`infocard__card ${type}`}>
                <div className="infocard__content">
                    <h2 className="title">{title}</h2>
                    <p className="copy">{about}</p>
                    <Link to={title === 'Crops' ? '/info/crops' : '/info/soils'}>
                        <button className="infocard__btn">Go</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;
