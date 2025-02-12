import React from 'react'
import { ITServices } from "../everestdata/ITSerices"
import VerticalTabs from '@/components/verticaltab/VerticalTab'
import { Typography } from "@material-tailwind/react";

function ITService() {
  return (
    <>
      <div className="text-center py-10 px-4 mx-4" style={{ color: "#ff6000 !important" }}>
        <Typography variant="h4" className="mb-6 font-black text-4xl md:text-5xl">
          We offer IT Services
        </Typography>
        <Typography variant="lead" className="text-2xl md:text-xl">
          Everest Multitech offers website design, software development, hosting, and more. Let me know if you need help with anything specific!
        </Typography>
      </div>
      <VerticalTabs RepairDataFromProps={ITServices} />
    </>
  )
}

export default ITService