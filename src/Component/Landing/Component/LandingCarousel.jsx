import * as React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box, Typography } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { ThemeProvider } from "styled-components";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function LandingCarousel(props) {
  var items = [
    {
      name: "AICE",
      description: "Probably the most random thing you have ever seen!",
      link: ""
    },
    {
      name: "CIE",
      description: "Hello World!",
      link: ""
    },
  ];

  return (
    <Carousel NextIcon={<NavigateNextIcon />} PrevIcon={<NavigateBeforeIcon />}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper elevation={0} sx={{ backgroundColor: 'lightgrey' }}>
      <ThemeProvider theme={theme}>
        <Box
          display="flex"
          justifyContent="left"
          pl="20%" 
          alignItems="center"
          minHeight="60vh"
        >
          <div>
            <Typography variant="h2"><strong></strong>{props.item.name}</Typography>
            <Typography variant="h4">{props.item.description}</Typography>
            <Button href={props.item.link} size="large" sx={{ color: "black", backgroundColor: "orange", marginTop:"1.5rem" }}>Check it out!</Button>
          </div>
        </Box>
      </ThemeProvider>
    </Paper>
  );
}

export default LandingCarousel;
