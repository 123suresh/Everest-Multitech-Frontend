import React from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export function Repairs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Repair Header Section */}
      <div className="text-center py-10 px-4">
        <Typography variant="h1" className="mb-6 font-black text-blue-900 text-4xl md:text-5xl">
          Repairs
        </Typography>
        <Typography variant="lead" className="opacity-80 text-gray-700 text-lg md:text-xl">
          Everest Multi Tech specializes in the repair of a wide range of electronic devices, ensuring top-notch service and customer satisfaction.
        </Typography>
      </div>

      {/* Grid Layout for Repair Services */}
      <Box sx={{ flexGrow: 1, padding: 4 }}>
        <Grid container spacing={6} justifyContent="center">
          {/* First Row: Cell Phone Repair */}
          <Grid item xs={12} md={5}>
            <Typography variant="h4" className="mb-4 text-blue-800 font-bold text-2xl md:text-3xl">
              Cell Phone Repair
            </Typography>
            <Typography variant="body1" className="text-gray-600 text-lg md:text-xl">
              At Everest Multi Tech, we provide expert cell phone repair services. Whether it's a cracked screen, battery replacement, or software issues, our skilled technicians ensure your device is restored to its optimal condition.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} className="flex justify-center">
            <img
              src="https://img1.wsimg.com/isteam/ip/7fe5675c-56c8-4e1d-baba-1474b5263ce5/3.jpg/:/cr=t:0%25,l:16.75%25,w:66.5%25,h:100%25/rs=w:600,h:600,cg:true"
              alt="Cell Phone Repair"
              className="rounded-lg shadow-lg w-full md:w-4/5"
            />
          </Grid>

          {/* Second Row: Laptop Repair */}
          <Grid item xs={12} md={5} className="flex justify-center">
            <img
              src="https://img1.wsimg.com/isteam/ip/7fe5675c-56c8-4e1d-baba-1474b5263ce5/1200x0.jpg/:/cr=t:0%25,l:16.67%25,w:66.67%25,h:100%25/rs=w:600,h:600,cg:true"
              alt="Laptop Repair"
              className="rounded-lg shadow-lg w-full md:w-4/5"
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="h4" className="mb-4 text-blue-800 font-bold text-2xl md:text-3xl">
              Laptop Repair
            </Typography>
            <Typography variant="body1" className="text-gray-600 text-lg md:text-xl">
              Our laptop repair services cover everything from hardware fixes to software troubleshooting. Whether it's a broken keyboard, overheating issues, or performance optimization, Everest Multi Tech has you covered.
            </Typography>
          </Grid>

          {/* Third Row: Printing Services */}
          <Grid item xs={12} md={5}>
            <Typography variant="h4" className="mb-4 text-blue-800 font-bold text-2xl md:text-3xl">
              Printing Services
            </Typography>
            <Typography variant="body1" className="text-gray-600 text-lg md:text-xl">
              Everest Multi Tech offers reliable printing services for both personal and business needs. From document printing to high-quality photo prints, we ensure your printing needs are met with precision and efficiency.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} className="flex justify-center">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.RHPUVr8iLeY4gEMTsTw7tgHaFf&pid=Api&P=0&h=180"
              alt="Printing Services"
              className="rounded-lg shadow-lg w-full md:w-4/5"
            />
          </Grid>
        </Grid>
      </Box>

      {/* Footer Section */}
      <div className="bg-white mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default Repairs;
