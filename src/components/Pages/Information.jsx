import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import Navbar from "../Navbar/Navbar";
import './Information.scss';

function Information() {
  return (
    <>
      <Navbar backgroundStyle='bg-grey'/>
      <div className="information">
        <main className="page-content">
          <InfoCard title='Crops' type='crop_bgimage' about='To Know More About Crops And Types Of Crops'/>
          <InfoCard title='Soil' type='soil_bgimage' about='To Know More About Soil And Types Of Soils'/>
        </main>
      </div>
    </>
  );
}

export default Information;
