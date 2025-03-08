import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import first from "../../public/first.jpg";
import second from "../../public/second.jpg";
import third from "../../public/third.jpg";
const TopGrid = () => {
  return (
    <>
      <Box
        sx={{
          width: "97%",
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item size={6}>
            <Box>
              <img style={{ width: "700px" }} src={first} alt="" />
            </Box>
          </Grid>
          <Grid item size={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                justifyContent: "center",
                height: "500px",
                marginLeft: "5px",
              }}
            >
              <Typography color="black" variant="h3">
                As LOW AS 0% ARP FINANCING <br /> UPON APPROVAL WITH AFFIRM
              </Typography>
              <Typography color="grey" variant="body1">
                Affirm Provides Flexable payment Sloutions, Allowing you to buy
                better and pay
                <br /> over time
              </Typography>
              <Box>
                <Button sx={{ backgroundColor: "black" }} variant="contained">
                  Learn More
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item size={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                justifyContent: "center",
                height: "500px",
                marginRight: "30px",
                flexWrap: "wrap",
              }}
            >
              <Typography color="black" variant="h3">
                CHOOSE WITH CONFIDENCE
              </Typography>
              <Typography color="grey" variant="body1">
                Affirm Provides Flexable payment Sloutions, Allowing you to buy
                better and pay
                <br /> over time
              </Typography>
              <Box>
                <Button sx={{ backgroundColor: "black" }} variant="contained">
                  Order Swatches
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item size={6}>
            <Box>
              <img style={{ width: "700px" }} src={second} alt="" />
            </Box>
          </Grid>

          <Grid item size={6}>
            <Box>
              <img style={{ width: "700px" }} src={third} alt="" />
            </Box>
          </Grid>
          <Grid item size={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                justifyContent: "center",
                height: "500px",
                marginLeft: "30px",
                flexWrap: "wrap",
              }}
            >
              <Typography color="black" variant="h3">
                COMPLIMANTRY DESIGN SERVIES
              </Typography>
              <Typography color="grey" variant="body1">
                Affirm Provides Flexable payment Sloutions, Allowing you to buy
                better and pay
                <br /> over time
              </Typography>
              <Box>
                <Button sx={{ backgroundColor: "black" }} variant="contained">
                  Book A Consultaion
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TopGrid;
