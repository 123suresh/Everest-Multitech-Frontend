// import React from 'react';
// import { Typography, Box, Divider } from "@mui/material";
// import { CarrierData } from "../everestdata/CarrierData";

// function Carrier() {
//   return (
//     <>
//       {/* Header Section */}
//       <div className="text-center py-10 px-4 mx-4" style={{ color: "#ff6000 !important" }}>
//         <Typography
//           variant="h4"
//           sx={{ fontWeight: "bold" }}
//         >
//           All kinds of Phone Carrier
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           sx={{ fontSize: "22px" }}
//         >
//           Everest Multi Tech specializes in Phone Carrier, expertly fixing intricate board-level issues with precision and reliability.
//         </Typography>
//       </div>

//       {/* Carrier Details Section */}
//       <Box sx={{ px: 4, mx: 4, mb: 6 }}>

//         {
//           CarrierData.map((carrierDesc, index) =>
//             <Box
//               sx={{
//                 mb: 4,
//                 p: 3,
//                 border: "1px solid #e0e0e0",
//                 borderRadius: "8px",
//                 transition: "box-shadow 0.3s ease-in-out",
//                 "&:hover": {
//                   boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
//                 },
//               }}
//             >
//               <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
//                 {carrierDesc.title}
//               </Typography>
//               <Divider sx={{ mb: 2 }} /> {/* Divider after the header */}
//               <Typography>
//                 {carrierDesc.description}
//               </Typography>
//             </Box>

//           )
//         }
//       </Box>
//     </>
//   );
// }

// export default Carrier;

import React from 'react';
import { Typography, Box, Card, CardContent, Grid, Avatar } from "@mui/material";
import { CarrierData } from "../everestdata/CarrierData";

function Carrier() {
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
          backgroundImage: 'url("/img/carriersvc.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <Box position="relative" zIndex={1}>
          <Typography
            variant="h1"
            sx={{ color:"#211515", mb: 6, fontWeight: "bold", fontSize: { xs: "2.5rem", md: "4rem" } }}
          >
            All kinds of Phone Carrier
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color:"#211515", fontSize: { xs: "1.5rem", md: "2rem" } }}
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