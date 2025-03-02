import React from 'react';
import { Typography, Box, Card, CardContent, Grid, Avatar } from "@mui/material";
import { CarrierData } from "../everestdata/CarrierData";

function Carrier() {

  return (
    <>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          py: 14,
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/img/carriersvc.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <Box position="relative" zIndex={1}>
          <Typography
            variant="h1"
            sx={{mb: 6, fontWeight: "bold", fontSize: { xs: "2.5rem", md: "4rem" } }}
          >
            All kinds of Phone Carrier
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{fontSize: { xs: "1.5rem", md: "2rem" } }}
          >
            Everest Multi Tech specializes in Phone Carrier, expertly fixing intricate board-level issues with precision and reliability.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, p: 4 }}>
      <Grid container spacing={4}>
        {CarrierData.map((carrierDesc, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ borderRadius: 2, boxShadow: 3, transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
              <CardContent sx={{ textAlign: 'center' }}>
                {/* Circular Logo using Avatar */}
                <Avatar
                  src={carrierDesc.logo}
                  alt={carrierDesc.title}
                  sx={{
                    width: 100,
                    height: 100,
                    margin: '0 auto',
                    // border: '2px solid #ff6000',
                  }}
                />
                <Typography variant="h5" sx={{ mt: 2, fontWeight: 'bold' }}>
                  {carrierDesc.title}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {carrierDesc.description}
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

export default Carrier;