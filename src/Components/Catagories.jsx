import { Box, Typography } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import React from "react";

const Catagories = () => {
  const itemData = [
    {
      img: "https://images.eq3.com/homepage/US_EN/featured-category/a3ef7912-bdbf-4f02-a572-7a41d5fea05d.png",
      title: "Upholstary",
      author: "@bkristastucchio",
    },
    {
      img: "https://images.eq3.com/homepage/US_EN/featured-category/6b288bb2-3fa4-456a-80bc-fbb672e04ea3.png",
      title: "Dining",
      author: "@rollelflex_graphy726",
    },
    {
      img: "https://images.eq3.com/homepage/US_EN/featured-category/c0872078-79fe-4675-81dd-0ddcdbe743d4.png",
      title: "Lightning",
      author: "@helloimnik",
    },
    {
      img: "https://images.eq3.com/homepage/US_EN/featured-category/707538ba-84a4-4968-95d4-31a4604c5796.png",
      title: "Tables",
      author: "@nolanissac",
    },
    {
      img: "https://images.eq3.com/homepage/US_EN/featured-category/a6730147-277e-47d0-8be2-bb9a517da317.png",
      title: "Rugs",
      author: "@hjrc33",
    },
    {
      img: "https://images.eq3.com/homepage/US_EN/featured-category/70131eb9-8bc1-496c-94b7-6e1a8b14b78a.png",
      title: "Bar & Counter Stools",
      author: "@arwinneil",
    },
    {
      img: "https://images.eq3.com/homepage/US_EN/featured-category/cedee41a-26ee-45c2-9fb0-cc564753dc7c.png",
      title: "Ancient Stools",
      author: "@tjdragotta",
    },
    {
      img: "https://images.eq3.com/homepage/US_EN/featured-category/398e4550-abb1-4722-8975-3678b3200f48.png",
      title: "Accessories",
      author: "@katie_wasserman",
    },
    {
      img: "https://images.eq3.com/homepage/US_EN/featured-category/b3fa3943-25fb-4d32-b895-16c1b1a14c22.png",
      title: "Accent Chairs",
      author: "@silverdalex",
    },
    {
      img: "https://images.eq3.com/homepage/US_EN/featured-category/8ff511dc-4791-423a-acf7-b42fa222f2d7.png",
      title: "Outdoor",
      author: "@shelleypauls",
    },
    {
      img: "https://images.eq3.com/homepage/US_EN/featured-category/b0add484-52bf-40ea-b320-a1e5c4ffadd3.png",
      title: "Storage",
      author: "@peterlaster",
    }
  ];
  return (
    <>
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          marginTop: "15px",

        }}
      >
        <Typography sx={{marginBottom:"10px"}} variant="h4" color="black">
          Shop By Catagories
        </Typography>

        <ImageList cols={4} gap={100}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box sx={{width:"100%", height:"8px",backgroundColor:"black"}}>

      </Box>
    </>
  );
};

export default Catagories;
