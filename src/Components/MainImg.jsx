import { Box, Typography } from "@mui/material";
import React from "react";
import mainImg from "../../public/Marcel-Walnut-Bedroom-Lifestyle.jpg_ORIGINAL.jpg";

const MainImg = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        position: "relative",
        flexDirection: "column",
        borderBottom:"8px solid black",
        paddingBottom:"25px"
      }}
    >
      <img
        style={{ width: "98%", marginTop: "10px", height: "750px" }}
        src={mainImg}
        alt=""
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          bottom:"50px"
        }}
      >
        <Typography color="White" variant="h3">
          Labour Day: Enjoy 20% Off QE3
        </Typography>
        <Typography color="White" variant="body1" fontSize={17}>
          save on Designs Made With longivety in mind. now until December 4th.
        </Typography>
      </Box>
    </Box>
  
  );
};

export default MainImg;
