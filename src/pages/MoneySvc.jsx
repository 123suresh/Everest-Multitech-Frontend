import React from 'react';
import { Typography, Box, Card, CardContent, Grid, Avatar } from "@mui/material";
import { CarrierData } from "../everestdata/CarrierData";

function MoneySvc() {

  const moneyServiceData = [
    {
        title:"Ria",
        logo:"/img/ria.jpeg",
        description:"Ria by IMEI at Everest Multi Tech offers a fast and secure way to send money worldwide. With quick processing and reliable service, your money reaches its destination safely and efficiently. Trust us for seamless international transactions."
    },
    {
        title:"vigo",
        logo:"/img/vigo.png",
        description:"Vigo by Western Union at Everest Multi Tech is the best choice for sending money anywhere in the world. Your money is available as quickly as you send it, making it a reliable and secure place for hassle-free transactions."
    }]

  return (
    <>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          py: 14,
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/img/money.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",          
        }}
      >
        <Box position="relative" zIndex={1}>
          <Typography
            variant="h1"
            sx={{ color:"#fff", mb: 6, fontWeight: "bold", fontSize: { xs: "2.5rem", md: "4rem" } }}
          >
            Money Service
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color:"#fff", fontSize: { xs: "1.5rem", md: "2rem" } }}
          >
            Everest Multi Tech specializes in Money Service, providing secure and reliable financial transactions with precision and efficiency.
          </Typography>
        </Box>
      </Box>


      <Box sx={{ flexGrow: 1, p: 4 }}>
  <Grid container spacing={4}>
    {moneyServiceData.map((carrierDesc, index) => (
      <Grid item xs={12} sm={6} md={6} key={index}>
        <Card 
          sx={{ 
            borderRadius: 2, 
            boxShadow: 3, 
            transition: '0.3s', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%', // Ensures equal height
            '&:hover': { boxShadow: 6 } 
          }}
        >
          <CardContent 
            sx={{ 
              textAlign: 'center', 
              flex: '1',
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center'
            }}
          >
            <img 
              src={carrierDesc.logo} 
              alt={carrierDesc.title} 
              style={{ 
                width: '120px', // Set max width
                height: 'auto', 
                // maxHeight: '80px', 
                objectFit: 'contain', // Prevent distortion
                marginBottom: '16px' // Space below image
              }} 
            />
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
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

export default MoneySvc;