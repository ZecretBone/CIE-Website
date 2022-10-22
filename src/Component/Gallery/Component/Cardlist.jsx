import * as React from "react";
import { Card, Grid, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Cardlist(props) {
  var items = [
    {
      name: "AICE",
      description: "Probably the most random thing you have ever seen!",
      link: "",
      img: "",
    },
    {
      name: "CIE",
      description: "Hello World!",
      link: "",
      img: "",
    },
    {
      name: "CIE",
      description: "Hello World!",
      link: "",
      img: "",
    },
  ];

  return (
    <Grid
      container
      spacing={3}
      direction="row"
      alignItems="center"
      justifyContent="left "
      mt = "2rem"
      px = "15vw"
      
    >
      {items.map((item, i) => (
        <Grid item xs={6}>
          <Item key={i} item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

function Item(props) {
  return (
    <Card sx={{ Width: 345 }}>
      <CardMedia component="img" height="140" image={props.item.img} />
      <ThemeProvider theme={theme}>
        <CardContent>
          <Typography variant="h4" component="div">
            <strong>{props.item.name}</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.item.description}
          </Typography>
        </CardContent>
      </ThemeProvider>
    </Card>
  );
}

export default Cardlist;
