import React from "react";
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import VerticalTabs from "@/components/verticaltab/VerticalTab";
import { RepairData } from "../everestdata/RepairData";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export function Repairs() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          py: 10,
          // px: 4,
          // mx: 4,
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
              'url("/img/repairImg1.jpg")',
              'url("/img/repairImg2.png")',
              'url("/img/repairimg3.jpg")',
            ],
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
            animation: "changeBackground 6s infinite",
          },
          "@keyframes changeBackground": {
            "0%": { backgroundImage: 'url("/img/repairImg1.jpg")' },
            "33%": { backgroundImage: 'url("/img/repairImg2.png")' },
            "66%": { backgroundImage: 'url("/img/repairimg3.jpg")' },
            "100%": { backgroundImage: 'url("/img/repairImg1.jpg")' },
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: -1,
          }}
        />

        <Box position="relative" zIndex={1}>
          <Typography
            variant="h1"
            sx={{ mb: 6, fontWeight: "bold", fontSize: { xs: "2.5rem", md: "4rem" }, color: "white" }} // Increased font size
          >
            Repairs
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, color: "white" }} // Increased font size
          >
            Everest Multi Tech specializes in the repair of a wide range of electronic devices, ensuring top-notch service and customer satisfaction.
          </Typography>
        </Box>
      </Box>
      <VerticalTabs RepairDataFromProps={RepairData} />
    </>
  );
}

export default Repairs;