import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

export default function Contactlist() {

    const address1 = 'Computer Innovation Engineering Faculty of Engineering, KMITL 1 Soi Chalongkrung 1 Ladkrabang, Bangkok 10520 Thailand'
    const address2 = 'CMKL University 1 Soi Chalongkrung 1 Ladkrabang, Bangkok 10520 Thailand'
  return (
    <Grid container
      
    alignItems="center"
    justifyContent="center ">
        <Stack sx={{mt:3.5}}  spacing={1.5}>

        
        <Typography variant="h3">
            CONTACT US
        </Typography>
    <Stack direction="row" spacing={1.5}>

<Card elevation={7} sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Contact Info
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address1}
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton aria-label="instagram">
          <InstagramIcon />
        </IconButton>
      <IconButton aria-label="facebook">
          <FacebookIcon />
        </IconButton>
        
      </CardActions>
    </Card>

    <Card elevation={7} sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Contact Info
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address2}
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton aria-label="instagram">
          <InstagramIcon />
        </IconButton>
      <IconButton aria-label="facebook">
          <FacebookIcon />
        </IconButton>
        
      </CardActions>
    </Card>


<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8572674509473!2d100.77248521495883!3d13.727090001563658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d664a6229ce87%3A0xe18798804c647947!2sKMITL%20School%20of%20Engineering!5e0!3m2!1sen!2sth!4v1651039451571!5m2!1sen!2sth" 
width={600} height={400} title='A youtube video on React hooks'></iframe>

    </Stack>
    </Stack>
    </Grid>
    
  );
}