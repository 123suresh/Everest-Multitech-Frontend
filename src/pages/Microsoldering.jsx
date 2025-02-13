import React from 'react'
import {MicrosolderingData} from "../everestdata/MicroSoldering";
import VerticalTabs from '@/components/verticaltab/VerticalTab';
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";

function Microsoldering() {
  return (
    <>
       {/* <div className="text-center py-10 px-4 mx-4" style={{color: "#ff6000 !important" }}>
         <Typography variant="h4" className="mb-6 font-black text-4xl md:text-5xl">
          All kinds of Microsoldering
         </Typography>
         <Typography variant="lead" className="text-2xl md:text-xl">
            Everest Multi Tech specializes in micro-soldering repairs, expertly fixing intricate board-level issues with precision and reliability.
         </Typography>
       </div> */}
             <Box
        sx={{
          textAlign: "center",
          py: 10, // Increased padding for height
          px: 4,
          mx: 4,
          position: "relative",
          overflow: "hidden",
          minHeight: "60vh", // Set a minimum height for the section
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: [
              'url("/img/soldering1.jpg")',
              'url("/img/soldering2.jpg")',
              'url("/img/soldering3.jpg")',
            ],
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
            animation: "changeBackground 6s infinite", // 3 images * 2 seconds each
          },
          "@keyframes changeBackground": {
            "0%": { backgroundImage: 'url("/img/soldering1.jpg")' },
            "33%": { backgroundImage: 'url("/img/soldering2.jpg")' },
            "66%": { backgroundImage: 'url("/img/soldering3.jpg")' },
            "100%": { backgroundImage: 'url("/img/soldering1.jpg")' },
          },
        }}
      >
        {/* Overlay to darken the background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed
            zIndex: -1,
          }}
        />

        {/* Content */}
        <Box position="relative" zIndex={1}>
          <Typography
            variant="h1"
            sx={{ mb: 6, fontWeight: "bold", fontSize: { xs: "2.5rem", md: "4rem" }, color: "white" }} // Increased font size
          >
            All kinds of Microsoldering
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, color: "white" }} // Increased font size
          >
            Everest Multi Tech specializes in micro-soldering repairs, expertly fixing intricate board-level issues with precision and reliability.
          </Typography>
        </Box>
      </Box>
       <VerticalTabs RepairDataFromProps={MicrosolderingData}  />
    </>
  )
}

export default Microsoldering