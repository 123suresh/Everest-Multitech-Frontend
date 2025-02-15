import React from "react";
import { Typography, Box, useTheme, useMediaQuery, Grid } from "@mui/material";
import VerticalTabs from "@/components/verticaltab/VerticalTab";
import { RepairData } from "../everestdata/RepairData";
import { FeatureCard } from "@/widgets/cards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import { RepairSlidingImg } from "../everestdata/RepairData";

export function Printing() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box sx={{ px: "4px", backgroundColor: "#f0f0f0", minHeight: "100vh", py: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item md={6} sm={12}>
            <Typography
              variant="h1"
              sx={{ mb: 4, fontWeight: "bold", fontSize: { xs: "2.5rem", md: "3.5rem" }, color: "#333" }}
            >
              Printing Service
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, color: "#555", lineHeight: 1.6 }}
            >
              Custom Canvas Prints
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, color: "#555", lineHeight: 1.6 }}
            >
              Turn your favorite photos into stunning, high-quality canvas art.
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, color: "#555", lineHeight: 1.6 }}
            >
              One-Way Vision (Window Graphics) 
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, color: "#555", lineHeight: 1.6 }}
            >
              Enhance privacy and branding with perforated window decals.
            </Typography>

            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, color: "#555", lineHeight: 1.6 }}
            >
              Business Cards & Stickers 
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, color: "#555", lineHeight: 1.6 }}
            >
              Make a lasting impression with professionally designed prints.
            </Typography>

            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, color: "#555", lineHeight: 1.6 }}
            >
              Invitations for Events 
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, color: "#555", lineHeight: 1.6 }}
            >
              Stylish and customized invites for any special occasion.
            </Typography>

            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, color: "#555", lineHeight: 1.6 }}
            >
              Embroidery Services  
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, color: "#555", lineHeight: 1.6 }}
            >
              Premium stitching for logos, apparel, and personalized designs.
            </Typography>

            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, color: "#555", lineHeight: 1.6 }}
            >
              Outdoor Banners 
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, color: "#555", lineHeight: 1.6 }}
            >
              Durable, weather-resistant banners for bold outdoor advertising.
            </Typography>

            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, color: "#555", lineHeight: 1.6 }}
            >
              Photo Frames 
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, color: "#555", lineHeight: 1.6 }}
            >
               Elegant and custom frames to showcase your cherished memories.
            </Typography>

          </Grid>
          
          <Grid item md={6} sm={12}>
            <img
              src="https://www.chrysels.com/blog/wp-content/uploads/2023/10/digital-printing.png"
              alt="Printing Service"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Printing;