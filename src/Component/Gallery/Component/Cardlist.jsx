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
      img: "https://scontent.fbkk29-2.fna.fbcdn.net/v/t1.6435-9/80680786_1002989343396254_6343259322838941696_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=i7Cql_M5n9QAX-P1sYT&tn=dQ7t3ulJgTAnff6a&_nc_ht=scontent.fbkk29-2.fna&oh=00_AT8KUmhVIsIZnX1KQ3oUjbLNtw_g5RIOSTEDONc3ZXxfow&oe=637B6703",
    },
    {
      name: "Prep up CIE",
      description: "CIE workshop on 14-15 November 2020",
      link: "",
      img: "https://scontent.fbkk29-2.fna.fbcdn.net/v/t1.6435-9/125871024_1264664550562064_7460038681971425677_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=Rt_mevGtz8AAX8cqEFh&_nc_ht=scontent.fbkk29-2.fna&oh=00_AT_rJaK232BaBBX9t3ct6oIMsQusC9tn7XqG_L27NA9dqA&oe=637B4F34",
    },
    {
      name: "Singapore field trip 2022 @Singapore",
      description: "CIE Singapore Academic Field Trip on 28-31 July 2022",
      link: "",
      img: "https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/297835547_1703938743301307_8087234048809158683_n.jpg?stp=dst-jpg_p720x720&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=DP5118ViyHMAX9EMa9A&tn=dQ7t3ulJgTAnff6a&_nc_ht=scontent.fbkk29-1.fna&oh=00_AT9lmR4WwFuu6HQSoXWuCJnbou6vPoCFZfKhWxQ5lu5Xsg&oe=635B261B",
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
