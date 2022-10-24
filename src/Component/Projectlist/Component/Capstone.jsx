import * as React from "react";
import { Card, Grid, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import projects from "../../../Data/capstoneProj.json";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Capstone(props) {
  let items = projects;
  console.log(items);
items["capstoneProject"].map((item, i) => (
  console.log(item)
))

  return (
    <Grid
      container
      spacing={3}
      columns={{ xs: 6, sm:12, md:12 }}
      direction="row"
      alignItems="center"
      justifyContent="left "
    >
      {items["capstoneProject"].map((item, i) => (
        <Grid item xs={6}>
          <Item key={i} item={item} />
        </Grid>
      ))}

    </Grid>
  );
}

function Item(props) {
  return (
    <Link to= {`/student-work/capstone/${ props.item.id }`} >
    <Card sx={{ Width: 345,height:200 }}>
      <CardMedia component="img" height="140" image={props.item.img} />
      <ThemeProvider theme={theme}>
        <CardContent>
          <Typography variant="h6" component="div">
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

