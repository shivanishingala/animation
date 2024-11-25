import {
  Button,
  Grid,
  IconButton,
  Typography,

} from "@mui/material";
import {
  Box,
  Container,
  styled,
} from "@mui/system";
import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import React from "react";
import curnImg from "./accects/curn-icon.png";
import tringle from "./accects/triangle-icon.png";
const logoImg =
  "https://html.designingmedia.com/folioflix/assets/image/banner-right-img.png";
const halfCircle =
  "https://html.designingmedia.com/folioflix/assets/image/half-circle.png";

const Home = () => {
  return (
    <>
      <MainStyle>
        <Container>
          <Grid container xs={12} className="mainCotainer">
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box className="mainBox">
                <Box className="btnBox">
                  <IconButton className="iconBtn1">
                    <FaBehance />
                  </IconButton>
                  <IconButton className="iconBtn2">
                    <FaDribbble />
                  </IconButton>
                  <IconButton className="iconBtn3">
                    <FaLinkedinIn />
                  </IconButton>
                </Box>
                <Box className="contentBox">
                  <Typography className="heading">
                    Hello,I Am <br />
                    <span className="span">Alina Parker</span>
                  </Typography>
                  <Typography className="paragraph">
                    Duis aute irure dolor in reprehenderit in voluptareu dolore
                    eu fugiat nulla pariatur.
                  </Typography>
                  <Box className="lastBox">
                    <Button className="hireBtn">Hire Me</Button>
                    <Typography className="span2">See My Work</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} className="imgBox">
              <img src={logoImg} alt="logoImg" className="logoImg" />
              <img src={halfCircle} alt="halfCircle" className="halfCircle" />
              <img src={curnImg} alt="curnImg" className="curnImg" />
              <img src={tringle} alt="tringle" className="tringle" />
            </Grid>
          </Grid>
        </Container>
      </MainStyle>
    </>
  );
};
const MainStyle = styled(Box)({
  padding: "15px 60px",
  background: "#EFF5FF",
  "& .imgBox":{
     position:'relative',
  },

  "& .tringle": {
    position: "absolute",
    bottom: 120,
    right:-221,
     animation: "mymove3 1s ease-in-out infinite alternate",
    "@keyframes mymove3": {
      "0%": { transform: "translateY(0px)" },
      "100%": { transform: "translateY(-20px)" },
    },
  },
  "& .curnImg": {
    position: "absolute",
    top: "25%",
    left: "70px",
    animation: "mymove3 1s ease-in-out infinite alternate",
    "@keyframes mymove3": {
      "0%": { transform: "translateY(5px)" },
      "100%": { transform: "translateY(-5px)" },
    },
  },
  "& .halfCircle": {
    position: "absolute",
    top:21,
  right:-121, 
    animation: "mymove2 1s ease-in-out infinite alternate",
    "@keyframes mymove2": {
      "0%": { transform: "translateY(5px)" },
      "100%": { transform: "translateY(-5px)" },
    },
  },
  "& .span2": {
    color: "#6f34fe",
    fontSize:'18px',
    borderBottom: "1px solid #6f34fe",
    "&:hover": {
      color: "#fca61f",
      borderBottom: "1px solid #fca61f",
    },
  },
  "& .hireBtn": {
    marginTop: 10,
    background: "#fca61f",
    color: "#ffffff",
    padding: "14px 54px",
    borderRadius: "45px",
    fontSize: "18px",
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
  "& .lastBox": {
    display: "flex",
    alignItems: "baseline",
    gap: 15,
    marginTop: "10px",
  },

  "& .paragraph": {
    width: "88%",
    color: "#7d7789",
    fontSize: "22px",
    fontFamily: "Lato, sans-serif",
  },
  "& .heading": {
    color: "#3f396d",
    fontWeight: 600,
    fontSize: 42,
    lineHeight: "54px",
  },
  "& .span": {
    color: "#6f34fe",
    fontSize: 74,
    fontWeight: 700,
    overflow: "hidden",
    borderRight: ".1em solid orange",
    whiteSpace: "nowrap",
    margin: "0 auto",
    animation:
      "typing 2s steps(20, end) forwards,\n    blink-caret 0.75s step-end infinite",
    "@keyframes typing": { from: { width: "0" }, to: { width: "100%" } },
    "@keyframes blink-caret": {
      "from, to": { borderColor: "transparent" },
      "50%": { borderColor: "orange" },
    },
  },
  "& .iconBtn1": {
    background: "#fff",
    color: "#255afc",
    fontWeight: 400,
    fontSize: "25px",
    padding:'14px',
    transitionDuration: "0.3s",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      background: "#255afc",
      color: "#fff",
      transform: "translateY(-8px)",
    },
  },
  "& .iconBtn2": {
    background: "#fff",
    fontSize: "25px",
    fontWeight: 400,
    color: "#f33a7e",
    padding:'14px',
    transitionDuration: "0.3s",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      background: "#f33a7e",
      color: "#fff",
      transform: "translateY(-8px)",
    },
  },
  "& .iconBtn3": {
    background: "#fff",
    fontSize: "25px",
    fontWeight: 400,
    color: "#2076b2",
    padding:'14px',
    transitionDuration: "0.3s",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      background: "#2076b2",
      color: "#fff",
      transform: "translateY(-8px)",
    },
  },

  "& .logoImg": {
    marginLeft: 70,
    animation: "mymove 1s ease-in-out infinite alternate",
    "@keyframes mymove": {
      "0%": { transform: "translateX(5px)" },
      "100%": { transform: "translateX(-5px)" },
    },
  },
  "& .mainBox": {
    display: "flex",
    gap: 50,
  },
  "& .mainCotainer": {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  "& .btnBox": {
    display: "flex",
    gap: 14,
    flexDirection: "column",
  
  },
});

export default Home;
