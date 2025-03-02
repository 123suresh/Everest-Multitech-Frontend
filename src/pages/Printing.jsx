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
      image: "https://printme.online/wp-content/uploads/2020/06/canvas-landscape-1.png",
      icon: <DirectionsBoatIcon color="info" sx={{ fontSize: "50px" }} />
    },
    {
      title: "One-Way Vision (Graphics)",
      description: "Enhance your windows with stunning, high-quality one-way vision graphics.",
      image: "https://tododesigns.com/wp-content/uploads/2023/02/image0-4.jpeg",
      icon: <InboxIcon color="info" sx={{ fontSize: "50px" }} />
    },
    {
      title: "Business Cards & Stickers",
      description: "Make a lasting impression with high-quality business cards and stickers.",
      image: "https://www.thestickerprinting.com/wp-content/uploads/2013/07/business-cards-stickers.png",
      icon: <LocalShippingIcon color="info" sx={{ fontSize: "50px" }} />
    },
    {
      title: "Invitations for Events",
      description: "Create unforgettable moments with beautifully designed event invitations.",
      image: "https://amyrenkenwrites.com/wp-content/uploads/2019/07/elegant-youre-invited-invitation-template-special-event-etsy-intended-for-proportions-3000-x-2400.jpg",
      icon: <AirplanemodeActiveIcon color="info" sx={{ fontSize: "50px" }} />
    },
    {
      title: "Embroidery Services",
      description: "Add a personalized touch with high-quality embroidery services.",
      image: "https://www.customplanet.co.uk/storage/images/pages/5oZb4t0dwuM7EYzKsdRLR30vLo6pK7VElWRNV7I6.jpg",
      icon: <InboxIcon color="info" sx={{ fontSize: "50px" }} />
    },
    {
      title: "Outdoor Banners ",
      description: "Stand out with durable, high-quality outdoor banners for any occasion.",
      image: "https://unblast.com/wp-content/uploads/2019/11/Vertical-Banner-Mockup-1.jpg",
      icon: <LocalShippingIcon color="info" sx={{ fontSize: "50px" }} />
    },
    {
      title: "Photo Frames",
      description: "Showcase your cherished memories with elegant, high-quality photo frames.",
      image: "https://homafy.com/wp-content/uploads/2023/03/heart-collage-frame.jpg",
      icon: <AirplanemodeActiveIcon color="info" sx={{ fontSize: "50px" }} />
    },
    {
      title: "Personalized T-Shirts & Apparel",
      description: "Express your style with custom-designed, high-quality personalized T-shirts & apparel.",
      image: "https://craftyinkbd.com/wp-content/uploads/2020/12/yourdesignT-scaled.jpg",
      icon: <AirplanemodeActiveIcon color="info" sx={{ fontSize: "50px" }} />
    }
  ];

  return (
    <>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          py: 10,
          backgroundImage: 'url("https://advancedphotocopy.com/wp-content/uploads/2020/05/Digital-Printing-Advanced-Photocopy.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <Box position="relative" zIndex={1}>
          <Typography
            variant="h1"
            sx={{ mb: 6, fontWeight: "bold", fontSize: { xs: "2.5rem", md: "4rem" }, color:"#000" }}
          >
            Printing
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, color:"#000" }}
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
            height: "100%"  // Ensures all cards have the same height
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