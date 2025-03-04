import React from 'react'
import { ITServices } from "../everestdata/ITSerices"
import VerticalTabs from '@/components/verticaltab/VerticalTab'
// import { Typography } from "@material-tailwind/react";
import { Typography, Box } from "@mui/material";

function ITService() {
  return (
    <>
                   <Box
        sx={{
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          minHeight: "70vh",
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
              'url("/img/ITService1.png")',
              'url("/img/ITService2.jpg")',
              'url("/img/ITService3.jpg")',
            ],
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
            animation: "changeBackground 6s infinite", // 3 images * 2 seconds each
          },
          "@keyframes changeBackground": {
            "0%": { backgroundImage: 'url("/img/ITService1.png")' },
            "33%": { backgroundImage: 'url("/img/ITService2.jpg")' },
            "66%": { backgroundImage: 'url("/img/ITService3.jpg")' },
            "100%": { backgroundImage: 'url("/img/ITService1.png")' },
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
            We offer IT Services
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, color: "white" }} // Increased font size
          >
            Everest Multitech offers website design, software development, hosting, and more. Let me know if you need help with anything specific!
          </Typography>
        </Box>
      </Box>
      <VerticalTabs RepairDataFromProps={ITServices} />
    </>
  )
}

export default ITService