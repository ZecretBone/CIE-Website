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
      name: "Babylicious",
      description: "UXUI design application for new mom",
      link: "",
      img: "/stdproj/01.png",
    },
    {
      id: "2",
      name: "SOL",
      description: "Self Organizing Library",
      link: "",
      img: "/stdproj/02.png",
    },
    {
      id: "3",
      name: "K-Rider",
      description: "Mobile application for transporting around KMITL",
      link: "",
      img: "/stdproj/03.png",
    },{
      id: "4",
      name: "Canvasky",
      description: "Painting application",
      link: "",
      img: "/stdproj/04.jpg",
    },
    {
      id: "5",
      name: "In Your Place",
      description: "Mobile AR game",
      link: "",
      img: "/stdproj/05.jpg",
    },
    {
      id: "6",
      name: "Pentest Project",
      description: "pentest project for computer system course",
      link: "",
      img: "/stdproj/06.jpg",
    },
    {
      id: "7",
      name: "Musiege",
      description: "You can listen to the music together with Musiege",
      link: "",
      img: "/stdproj/07.jpg",
    }
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
