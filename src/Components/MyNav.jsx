import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function MyNav() {
  return (
    <AppBar color="white" position="static" >
      <Toolbar variant="dense">
        <Box sx={{ display: "flex", alignItems: "center",justifyContent:"space-between",width:"99%",padding:"3px" }}>
          <Box>
            <Typography sx={{ padding: "7px" }} variant="h4" color="inherit">
              EQ3
            </Typography>
          </Box>
          <Box >
            <Breadcrumbs aria-label="breadcrumb">
              <LocationOnOutlinedIcon sx={{ color: "black" }} />
              <HelpOutlineOutlinedIcon sx={{ color: "black" }} />
              <FavoriteBorderOutlinedIcon sx={{ color: "black" }} />
              <Box display={"flex"} gap={1} sx={{color:"black"}}>
                <Person2OutlinedIcon sx={{ color: "black" }} />
                <Typography variant="body1">Join EQ3/Login </Typography>
              </Box>
              <Box display={"flex"} gap={1} sx={{color:"black"}}>
                <LanguageOutlinedIcon sx={{ color: "black" }} />
                <Typography variant="body1">Eg/Ar </Typography>
              </Box>
              <Button variant="outlined" color="black" sx={{marginLeft:"15px",color:"black"}}><ShoppingCartOutlinedIcon/> Cart</Button>
            </Breadcrumbs>
           
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
