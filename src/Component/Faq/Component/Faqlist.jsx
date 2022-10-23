import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function Faqlist() {
  const content = (
    <div>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
    </div>
  );

  const allfaqs = [
    {
      id:0,
      q:'dasdasdasdasdasdsa ?',
      a:'adasdasds  dassdsadasdsad'
    },
    {
      id:1,
      q:'dasdasdasdasdasdsa ?',
      a:'adasdasds  dassdsadasdsad'
    },
    {
      id:2,
      q:'dasdasdasdasdasdsa ?',
      a:'adasdasds  dassdsadasdsad'
    },
    {
      id:3,
      q:'dasdasdasdasdasdsa ?',
      a:'adasdasds  dassdsadasdsad'
    },
    {
      id:4,
      q:'dasdasdasdasdasdsa ?',
      a:'adasdasds  dassdsadasdsad'
    },
  ]

  const tocontact =()=>{
    window.location.href= '/contact-us'
  }


  return (
    
    <Grid
    container
      
      alignItems="center"
      justifyContent="center "
    >
      
      <Stack>
      <Typography sx={{mt:3.5}} variant="h3">FREQUENTLY ASKED QUESTIONS</Typography>


      <Card elevation={0} sx={{ minWidth: 275 }}>
      <CardContent>
      <Grid container>
      <Grid item xs>
        dasdsadsad?
      </Grid>
      
      <Grid item xs>
        dsadasidjsakjdh
      </Grid>
    </Grid>
      </CardContent>
      
    </Card>

    <Divider/>

    <Card elevation={0} sx={{ minWidth: 275 }}>
      <CardContent>
      <Grid container>
      <Grid item xs>
        fdsfdsfdsfdsf
      </Grid>
      
      <Grid item xs>
        fsdfdsfdsfs
      </Grid>
    </Grid>
      </CardContent>
      
    </Card>
    <Divider/>

    <Card elevation={0} sx={{ minWidth: 275 }}>
      <CardContent>
      <Grid container>
      <Grid item xs>
        fdsfdsfdsfdsf
      </Grid>
      
      <Grid item xs>
        fsdfdsfdsfs
      </Grid>
    </Grid>
      </CardContent>
      
    </Card>
    <Divider/>

    <Card elevation={0} sx={{ minWidth: 275 }}>
      <CardContent>
      <Grid container>
      <Grid item xs>
        fdsfdsfdsfdsf
      </Grid>
      
      <Grid item xs>
        fsdfdsfdsfs
      </Grid>
    </Grid>
      </CardContent>
      
    </Card>

    <Divider/>

    <Card elevation={0} sx={{ minWidth: 275 }}>
      <CardContent>
      <Grid container>
      <Grid item xs>
        fdsfdsfdsfdsf
      </Grid>
      
      <Grid item xs>
        fsdfdsfdsfs
      </Grid>
    </Grid>
      </CardContent>
      
    </Card>



    <Typography>Can't find what you are looking for?
        <Button onClick={tocontact}>
            Contact Us
        </Button>
      </Typography>
      </Stack>
    </Grid>
    // <Grid container>
    //   <Grid item xs>
    //     {content}
    //   </Grid>
    //   <Divider 
    //   orientation="vertical" 
    //   flexItem>
    //     VERTICAL
    //   </Divider>
    //   <Grid item xs>
    //     {content}
    //   </Grid>
    // </Grid>

//  <List>
//   {allfaqs.map((each) =>(
//     <ListItem>
//       <Card elevation={0} sx={{ minWidth: 275 }}>
//       <CardContent>
//       <Grid container>
//       <Grid item xs>
//         {each.q}
//       </Grid>
//       <Divider 
//       orientation="vertical" 
//       flexItem>
        
//       </Divider>
//       <Grid item xs>
//         {each.a}
//       </Grid>
//     </Grid>
//       </CardContent>
      
//     </Card>
    
    
//     </ListItem>
    
//   ))}

// </List> 




    
  );
}
