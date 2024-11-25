import { Button, Grid, Hidden, Typography } from "@mui/material";
import {
  Box,
  Container,
  borderRadius,
  color,
  display,
  fontSize,
  fontStyle,
  fontWeight,
  height,
  padding,
  styled,
  textTransform,
  width,
} from "@mui/system";
import React from "react";
import BasicMenu from "./appbar";

const logourl =
  "https://html.designingmedia.com/folioflix/assets/image/logo-img.png";
const Navbar = () => {
  return (
    <>
      <MainStyle>
      
        <Grid container className="mainContainer">
          <Grid item >
            <img src={logourl} alt="logourl" className="logourl" />
          </Grid>
          <Grid item  className="menuBar">
            <Hidden smDown xsDown>
              <Typography className="menuList">Home</Typography>
              <Typography className="menuList">Services</Typography>
              <Typography className="menuList">About</Typography>
              <Typography className="menuList">Portfolio</Typography>
              <Typography className="menuList">Testimonials</Typography>
              <Typography className="menuList">Blog</Typography>
              <Button className="contactBtn">Contact</Button>
            </Hidden>
            </Grid>
                 </Grid>
        
      </MainStyle>
    </>
  );
};
const MainStyle = styled(Box)({
  background: "#EFF5FF",
  padding: "26px 60px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  "& .contactBtn": {
    background: "#fca61f",
    color: "#ffffff",
    padding: "8px 43px",
    borderRadius: "45px",
    fontSize: "20px",
    fontWeight: 500,
    textTransform: "none",
    transitionDuration: "0.3s",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-out",
    "@media(max-width: 660px)": {
      display: "none",
    },
    "&:hover": {
      background: "#6f34fe",
      transform: "translateY(-8px)",
    },
  },
  "& .mainContainer": {
    padding: "0 55px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  "& .menuList": {
    color: "#07003b",
    fontSize: "20px",
    "&:hover": {
      color: "#fca61f",
    },
  },
  "& .menuBar": {
    display: "flex",
    alignItems: "center",
    gap: 27,
    "@media(max-width: 830px)": {
      gap: 20,
    },
    "@media(max-width: 660px)": {
      display: "none",
      //  marginLeft:'500px',
    },
  },

  "& .logourl": {
  
  },
});

export default Navbar;
