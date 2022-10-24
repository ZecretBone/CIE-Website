import * as React from "react";
import { Typography } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import capstoneProject from "../../Data/capstoneProj.json";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Project(props) {
  const params = useParams();

  let items
  if (params.type === "capstone"){
    items = capstoneProject["capstoneProject"]
  }else if (params.type === "project"){
    items = {}
  }

  let item = items.find( (item) => item.id === params.id)

  return (
    // <Typography> Project Name: {item.name} </Typography>
    <Grid
    alignItems="center"
      justifyContent="center "
     container spacing={2}>
       <Grid item xs={4}>
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.members}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Report</Button>
      </CardActions>
    </Card>
  </Grid>
  <Grid item xs={8}>
    
  </Grid>
    </Grid>
  );
}

