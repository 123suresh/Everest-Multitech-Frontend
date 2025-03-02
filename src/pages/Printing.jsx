import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from "@mui/material";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InboxIcon from '@mui/icons-material/Inbox';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';

function Printing() {
  const services = [
    {
      title: "Custom Canvas Prints",
      description: "Turn your favorite photos into stunning, high-quality canvas art.",
      image: "/img/canvaspring.png",
      icon: <DirectionsBoatIcon color="info" sx={{ fontSize: "50px" }} />
    },
    {
      title: "One-Way Vision (Graphics)",
      description: "Enhance your windows with stunning, high-quality one-way vision graphics.",
      image: "/img/graphicprinting.jpeg",
      icon: <InboxIcon color="info" sx={{ fontSize: "50px" }} />
    },
    {
      title: "Business Cards & Stickers",
      description: "Make a lasting impression with high-quality business cards and stickers.",
      image: "/img/cardprint.png",
      icon: <LocalShippingIcon color="info" sx={{ fontSize: "50px" }} />
    },
    {
      title: "Invitations for Events",
      description: "Create unforgettable moments with beautifully designed event invitations.",
      image: "/img/eventprint.jpg",
      icon: <AirplanemodeActiveIcon color="info" sx={{ fontSize: "50px" }} />
    },
    {
      title: "Embroidery Services",
      description: "Add a personalized touch with high-quality embroidery services.",
      image: "/img/serviceprint.jpg",
      icon: <InboxIcon color="info" sx={{ fontSize: "50px" }} />
    },
    {
      title: "Outdoor Banners ",
      description: "Stand out with durable, high-quality outdoor banners for any occasion.",
      image: "/img/bannerprint.jpg",
      icon: <LocalShippingIcon color="info" sx={{ fontSize: "50px" }} />
    },
    {
      title: "Photo Frames",
      description: "Showcase your cherished memories with elegant, high-quality photo frames.",
      image: "/img/frame.jpg",
      icon: <AirplanemodeActiveIcon color="info" sx={{ fontSize: "50px" }} />
    },
    {
      title: "Personalized T-Shirts & Apparel",
      description: "Express your style with custom-designed, high-quality personalized T-shirts & apparel.",
      image: "/img/tshirtprint.jpg",
      icon: <AirplanemodeActiveIcon color="info" sx={{ fontSize: "50px" }} />
    }
  ];

  return (
    <>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          py: 14,
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/img/printmain.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <Box position="relative" zIndex={1}>
          <Typography
            variant="h1"
            sx={{ mb: 6, fontWeight: "bold", fontSize: { xs: "2.5rem", md: "4rem" }, color:"#fff" }}
          >
            Printing
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, color:"#fff" }}
          >
            Everest Multi Tech specializes in Printing, delivering high-quality results and complete customer satisfaction.
          </Typography>
        </Box>
      </Box>

<Box sx={{ flexGrow: 1, p: 4 }}>
  <Grid container spacing={4}>
    {services.map((service, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Card 
          sx={{ 
            borderRadius: 2, 
            boxShadow: 3, 
            transition: '0.3s', 
            '&:hover': { boxShadow: 6 },
            display: "flex", 
            flexDirection: "column", 
            height: "100%"
          }}
        >
          <CardContent 
            sx={{ 
              textAlign: 'center', 
              display: "flex", 
              flexDirection: "column", 
              flexGrow: 1 
            }}
          >
            <Box 
              sx={{ 
                borderRadius: "50%", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                textAlign: "center" 
              }}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                style={{ width: '50%', height: 'auto', borderRadius: "50%" }} 
              />
            </Box>

            <Typography variant="h5" sx={{ mt: 2, fontWeight: 'bold' }}>
              {service.title}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, flexGrow: 1 }}>
              {service.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>


    </>
  );
}

export default Printing;