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
      {/* Header Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 5,
          px: 4,
          mx: 4,
          // color: theme.palette.primary.main, 
        }}
      >
        <Typography variant="h1" sx={{ mb: 6, fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }}>
          Repairs
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}>
          Everest Multi Tech specializes in the repair of a wide range of electronic devices, ensuring top-notch service and customer satisfaction.
        </Typography>
      </Box>

      {/* Swiper Section */}
      <Box sx={{ px: 4, mb: 6 }}>
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
      </Box>

      {/* Vertical Tabs Section */}
      <VerticalTabs RepairDataFromProps={RepairData} />
    </>
  );
}

export default Repairs;