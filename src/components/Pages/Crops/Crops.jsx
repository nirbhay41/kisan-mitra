import React from 'react';
import CropCard from '../../CropCard/CropCard';
import Navbar from '../../Navbar/Navbar';
import './Crops.scss';
import Data from "./Crops_Data.json";

function Crops() {
    return (
        <>
            <Navbar backgroundStyle='bg-grey' />
            <div className='crops'>
                {Data.map((item,index) => (
                    <CropCard key={index} data={item}/>
                ))}
            </div>
        </>
    )
}

export default Crops;
