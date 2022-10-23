import * as React from "react";
import { Card, Grid, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Studentproject(props) {
  var items = [
    {
      id: "1",
      name: "AICE",
      description: "Probably the most random thing you have ever seen!",
      link: "",
      img: "",
    },
    {
      id: "2",
      name: "CIE",
      description: "Hello World!",
      link: "",
      img: "",
    },
    {
      id: "2",
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
      columns={{ xs: 6, sm:12, md:12 }}
      direction="row"
      alignItems="center"
      justifyContent="left "
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
    <Link to= {`/student-work/project/${ props.item.id }`} >
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
    </Link>
  );
}
