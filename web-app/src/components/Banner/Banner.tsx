import React from "react";
import "./Banner.css";
import { Container, Typography } from "@mui/material";
import Carousel from "./Carousel";

//styling using sx styles instead of css
const bannerContentStyles = {
  height: 500,
  display: "flex",
  flexDirection: "column",
  paddingTop: 10,
  justifyContent: "space-around",
  with: "100vw",
};

const bannerTextH2Styles = {
  fontWeight: "bold",
  marginBottom: 5,
  fontFamily: "Montserrat",
};

const bannerTextSubtitleStyles = {
  color: "lightgray",
  fontWeight: "light",
  fontFamily: "Montserrat",
  marginBottom: 15,
};

const Banner = () => {
  return (
    <div className="banner">
      <Container sx={bannerContentStyles}>
        <div className="tag-line">
          <Typography variant="h2" sx={bannerTextH2Styles}>
            KoinFynder
          </Typography>
          <Typography variant="subtitle2" sx={bannerTextSubtitleStyles}>
            All information regarding your favourite crypto currencies.
          </Typography>
        </div>
        <Carousel></Carousel>
      </Container>
    </div>
  );
};

export default Banner;
