import * as React from "react";
import { Card, Grid, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import allitems from '../../../Data/studentProj.json'
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

let theme = createTheme();
theme = responsiveFontSizes(theme);





export default function Studentproject(props) {

  const [failure,setFail]= React.useState(false)


  const viewnewtab=(link)=>{
    if(link){
      setFail(false)
      window.open(link)
    }else{
      setFail(true)
    }
    
  }
  
  
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

  items = allitems['studentProj']

  

  return (
    <Box >
      <Collapse in={failure}>
        <Alert
        variant="filled"
        severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setFail(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Sorry, This project have no external link
        </Alert>
      </Collapse>
      <Grid
      container
      spacing={3}
      columns={{ xs: 6, sm:12, md:12 }}
      direction="row"
      alignItems="center"
      justifyContent="left "
    >
      {items.map((item) => (
        <Grid item xs={6}>
          <Card sx={{ Width: 345,height:300 }}>
      <CardActionArea onClick={()=>viewnewtab(item.link)}>
      <CardMedia component="img" height="140" image={item.img} />
      <ThemeProvider theme={theme}>
        <CardContent>
          <Typography variant="h4" component="div">
            <strong>{item.name}</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </ThemeProvider>
      </CardActionArea>
    </Card>
        </Grid>
      ))}
    </Grid>
    </Box>
    
  );
}

// function Item(props) {

  
//   return (
    
    
    
//   );
// }
