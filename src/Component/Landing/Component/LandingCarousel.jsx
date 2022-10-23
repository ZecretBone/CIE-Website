import * as React from "react";
import Carousel from "react-material-ui-carousel";
import { Card, CardMedia, CardActionArea } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { ThemeProvider } from "styled-components";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function LandingCarousel(props) {
  return (
    <Carousel NextIcon={<NavigateNextIcon />} PrevIcon={<NavigateBeforeIcon />}>
      <Card sx={{ maxWidth: "100%" }}>
        <CardActionArea href="https://www.cmkl.ac.th/aice/graduate/overview">
        <CardMedia
          component="img"
          alt="AICEBanner"
          image="/homepage/01AICEBanner.png"
        />
        </CardActionArea>
      </Card>
      
      <Card sx={{ maxWidth: "100%" }}>
        
        <CardMedia
          component="img"
          alt="CIEBanner"
          image="/homepage/02CIEBanner.png"
        />
        
      </Card>
    </Carousel>
  );
}

export default LandingCarousel;
