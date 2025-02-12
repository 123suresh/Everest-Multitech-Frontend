import { Box, Typography } from '@mui/material'; // Use MUI's Typography
import React from 'react';


function RepairDetails({category, desc}) {

  return (
    <>
      <Box>
        <Typography
          sx={{
            color: "black",
            padding:"3px",
            borderRadius:"30px"
          }}
          variant="h4" gutterBottom
        >
          {category}
        </Typography>
        <Typography sx={{fontSize:"18px"}} variant="subtitle1">{desc}</Typography>
      </Box>
    </>
  );
}

export default RepairDetails;