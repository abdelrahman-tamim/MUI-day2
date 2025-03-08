import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React from "react";

const UNav = () => {
  return (
    <>
    <Box
      sx={{
        display: "flex",
        width: "100%",
        borderTop: "1px solid grey",
        backgroundColor: "white",
        justifyContent: "space-between",
      }}
    >
      <ul style={{ listStyle: "none", display: "flex", gap: "30px" }}>
        <li>
          <Typography variant="subtitle1">Living</Typography>
        </li>
        <li>
          <Typography variant="subtitle1">Dining</Typography>
        </li>
        <li>
          <Typography variant="subtitle1">Bedroom</Typography>
        </li>
        <li>
          <Typography variant="subtitle1">Outroom</Typography>
        </li>
        <li>
          <Typography variant="subtitle1">Office</Typography>
        </li>
        <li>
          <Typography variant="subtitle1">Lighting</Typography>
        </li>
        <li>
          <Typography variant="subtitle1">Rugs</Typography>
        </li>
        <li>
          <Typography variant="subtitle1">Accessories</Typography>
        </li>
        <li>
          <Typography variant="subtitle1">Brands</Typography>
        </li>
        <li>
          <Typography variant="subtitle1">Inspration</Typography>
        </li>
        <li>
          <Typography variant="subtitle1">Gifts</Typography>
        </li>
        <li>
          <Typography variant="subtitle1">Sale</Typography>
        </li>
      </ul>
      <TextField
        sx={{ marginRight: "20px",width:"300px",marginTop:"2px"}}
        id="outlined-basic"
        label={
          <>
            <div style={{ display: "flex", alignItems:"center" ,justifyContent:"space-between" ,width:"270px" }}>
              Search <SearchOutlinedIcon />
            </div>
          </>
        }
        variant="outlined"
      />
    </Box>
    <Box sx={{display:"flex",width:"100%",height:"35px",backgroundColor:"orange",justifyContent:"center",alignItems:"center"}}>
        <Typography color="black" variant="subtitle1" fontSize={"19px"}>Labour Day: Enjoy 20% Off QE3</Typography>

    </Box>
    </>
  );
};

export default UNav;
