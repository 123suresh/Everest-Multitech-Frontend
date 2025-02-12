import React from 'react'
import { Typography } from "@material-tailwind/react";
import {MicrosolderingData} from "../everestdata/MicroSoldering";
import VerticalTabs from '@/components/verticaltab/VerticalTab';


function Microsoldering() {
  return (
    <>
       <div className="text-center py-10 px-4 mx-4" style={{color: "#ff6000 !important" }}>
         <Typography variant="h4" className="mb-6 font-black text-4xl md:text-5xl">
          All kinds of Microsoldering
         </Typography>
         <Typography variant="lead" className="text-2xl md:text-xl">
            Everest Multi Tech specializes in micro-soldering repairs, expertly fixing intricate board-level issues with precision and reliability.
         </Typography>
       </div>
       <VerticalTabs RepairDataFromProps={MicrosolderingData}  />
    </>
  )
}

export default Microsoldering