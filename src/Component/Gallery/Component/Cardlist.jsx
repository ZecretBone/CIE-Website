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
      name: "Field Trip 2019 @Tokyo",
      description: "This CIE field trip was from 14th – 19th December 2019 in Tokyo, Japan. We visited various laboratories and a company including Tokyo Institute of Technology, Waseda University, Tokai University, and Panasonic Co.",
      link: "",
      img: "/gallery/01google",
    },
    {
      name: "Prep up CIE",
      description: "CIE workshop on 14-15 November 2020",
      link: "",
      img: ""    
    },
    {
      name: "Singapore field trip 2022 @Singapore",
      description: "CIE Singapore Academic Field Trip on 28-31 July 2022",
      link: "",
      img: "",
    },
  ];

  return (
    <Grid
      container
      spacing={3}
      columns={{ xs: 6, sm:12, md:12 }}
      direction="row"
      alignItems="center"
      justifyContent="left "
      mt = "2rem"
      px = "15vw"
      
    >
      {items.map((item, i) => (
        <Grid item xs={6} >
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
