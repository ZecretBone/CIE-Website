import * as React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box, Typography, Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { ThemeProvider } from "styled-components";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function LandingCarousel(props) {
  return (
    <Carousel NextIcon={<NavigateNextIcon />} PrevIcon={<NavigateBeforeIcon />}>
      {/* {items.map((item, i) => (
        <Item key={i} item={item} />
      ))} */}
      <Card sx={{ maxWidth: "100%" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          image="/homepage/01AICEBanner.png"
        />
      </Card>

      <Card sx={{ maxWidth: "100%" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          image="/homepage/02CIEBanner.png"
        />
      </Card>

    </Carousel>
  );
}

export default LandingCarousel;
