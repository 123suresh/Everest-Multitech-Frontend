import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from "@mui/material";

function Shippingsvc() {
  const services = [
    {
      title: "SHIPPING",
      description: "Efficient and reliable shipping services worldwide.",
      image: "https://via.placeholder.com/400"
    },
    {
      title: "LOGISTICS",
      description: "Comprehensive logistics solutions for your business.",
      image: "https://via.placeholder.com/400"
    },
    {
      title: "HIGH QUALITY",
      description: "Commitment to high-quality service and customer satisfaction.",
      image: "https://via.placeholder.com/400"
    },
    {
      title: "AIR CHARTERS",
      description: "Fast and secure air charter services for urgent deliveries.",
      image: "https://via.placeholder.com/400"
    }
  ];

  return (
    <>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          py: 10,
          backgroundImage: 'url("/img/shippingImg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <Box position="relative" zIndex={1}>
          <Typography
            variant="h1"
            sx={{ mb: 6, fontWeight: "bold", fontSize: { xs: "2.5rem", md: "4rem" } }}
          >
            Shipping
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
          >
            Everest Multi Tech specializes in Shipping, ensuring top-notch service and customer satisfaction.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ borderRadius: 2, boxShadow: 3, transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <img src={service.image} alt={service.title} style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
                  <Typography variant="h5" sx={{ mt: 2, fontWeight: 'bold' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
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

export default Shippingsvc;