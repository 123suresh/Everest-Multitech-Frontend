import React from "react";
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import VerticalTabs from "@/components/verticaltab/VerticalTab";
import { RepairData } from "../everestdata/RepairData";
import { FeatureCard } from "@/widgets/cards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import { RepairSlidingImg } from "../everestdata/RepairData";

export function Repairs() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {/* Header Section with Background Images */}
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
              'url("/img/repairImg1.jpg")',
              'url("/img/repairImg2.png")',
              'url("/img/repairimg3.jpg")',
            ],
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
            animation: "changeBackground 6s infinite", // 3 images * 2 seconds each
          },
          "@keyframes changeBackground": {
            "0%": { backgroundImage: 'url("/img/repairImg1.jpg")' },
            "33%": { backgroundImage: 'url("/img/repairImg2.png")' },
            "66%": { backgroundImage: 'url("/img/repairimg3.jpg")' },
            "100%": { backgroundImage: 'url("/img/repairImg1.jpg")' },
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

      {/* Swiper Section */}
      {/* <Box sx={{ px: 4, mb: 6 }}>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ width: "100%", height: "100%" }}
        >
          {RepairSlidingImg.map(({ title, description, image }) => (
            <SwiperSlide key={title}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <FeatureCard title={title} description={description} image={image} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box> */}

      {/* Vertical Tabs Section */}
      <VerticalTabs RepairDataFromProps={RepairData} />
    </>
  );
}

export default Repairs;