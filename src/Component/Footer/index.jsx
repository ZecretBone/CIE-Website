import * as React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { createTheme, responsiveFontSizes,styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import Stack from '@mui/material/Stack';
import FaxIcon from '@mui/icons-material/Fax';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import { lime } from '@mui/material/colors';



const Typ = styled(Typography)(({ theme }) => ({
  textDecoration: 'none',
         '&:hover': {
          opacity: '50%'
     
     }
}));

const TypL = styled(Typography)(({ theme }) => ({
  
         '&:hover': {
          textDecoration: 'underline'
     
     }
}));

export default function Pagefooter() {

  //const classes = useStyles

  const newtab =(w)=>{
    if(w == 'cf'){
        window.open("https://www.facebook.com/CIEatKMITL")
    }else if(w == 'ci'){
        window.open("https://www.instagram.com/cie.kmitlofficial/?hl=en")
    }else if(w == 'ce'){
        window.open("mailto:cie@kmitl.ac.th")
    }else if(w == 'ct'){
        window.open("tel:0902920977")
    }else if(w == 'at'){
        window.open("https://www.instagram.com/cie.kmitlofficial/?hl=en")
    }else if(w == 'ae'){
        window.open("https://www.instagram.com/cie.kmitlofficial/?hl=en")
    }else if(w == 'cfax'){
        window.open("fax:658785000")
    }
}


  
  return (
    <Grid
    alignItems="center"
      justifyContent="center "
      container
      sx={{ color: "white", backgroundColor: "black", py: "2rem" , bottom: 0, left: 0, right: 0,mt:20 }}
      // sx={{ position: 'fixed'}}
    >
      <Stack spacing={6} direction="row">

      
      <Grid item xs={2}></Grid>
      <Grid item xs={1.5} container>
        <Typography variant="h6" width="100%">
          CONTACT US
        </Typography>
        <Grid item xs={12}>
          <Grid container direction="column" >
            <Typ  sx={{maxWidth:'max-content'}} style={{ cursor:"pointer"}} onClick={()=>newtab('ce')} variant="p"> <EmailIcon  sx={{ px:"0.1rem" }}></EmailIcon> cie@kmitl.ac.th</Typ>
            <Typ sx={{maxWidth:'max-content'}} style={{ cursor:"pointer"}} onClick={()=>newtab('ct')} variant="p"><CallIcon  sx={{ px:"0.1rem" }}></CallIcon> +66 902920977</Typ>
            <Typ sx={{maxWidth:'max-content'}} style={{ cursor:"pointer"}} onClick={()=>newtab('cfax')} variant="p"><FaxIcon  sx={{ px:"0.1rem" }}></FaxIcon> +66 658785000</Typ>     
            <Typ><IconButton onClick={()=>newtab('ci')} sx={{ color: 'white' }}><InstagramIcon  /></IconButton>  <IconButton onClick={()=>newtab('cf')} sx={{ color: 'white' }}><FacebookIcon  /></IconButton> </Typ>   
            
      {/* <IconButton onClick={()=>newtab('cf')} aria-label="facebook"> */}
          
        {/* </IconButton> */}
            
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={2} container>
        <Typography variant="h6" width="100%">
          LOCATION
        </Typography>
        <Grid item xs={12}>
          <Grid container direction="column">
            <Typography variant="p">Computer Innovation Engineering
Faculty of Engineering, KMITL</Typography>
            <Typography variant="p">1 Soi Chalongkrung 1
Ladkrabang, Bangkok 10520</Typography>
            <Typography variant="p">Thailand</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={4} container>
        <Typography variant="h6" width="100%">
          QUICK LINKS
        </Typography>
        <Grid item xs={6}>
          <Grid container direction="column">
            <a style={{maxWidth:"max-content"}} href="/programguide" ><TypL sx={{color:"white"}} variant="p">Program Guide</TypL></a>
            <a style={{maxWidth:"max-content"}} href="/" ><TypL sx={{color:"white"}} variant="p">Home</TypL></a>
            <a style={{maxWidth:"max-content"}} href="/gallery" ><TypL sx={{color:"white"}} variant="p">Gallery</TypL></a>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column">
            <Typography variant="h6"></Typography>
            <Typography variant="p">Department of Computer Engineering</Typography>
            <Typography variant="p">Faculty of Engineering</Typography>
            <Typography variant="p">King Mongkut's Institute of Technology Ladkrabang</Typography>
          </Grid>
        </Grid>
      </Grid>
      </Stack>
    </Grid>
  );
}
