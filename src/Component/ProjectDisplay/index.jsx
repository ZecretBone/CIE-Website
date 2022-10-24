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
import { fontFamily } from "@mui/system";

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

  const viewer=(link)=>{
    window.open(link);
  }

  return (
    // <Typography> Project Name: {item.name} </Typography>
    <Grid
    alignItems="center"
      justifyContent="center "
     container >
      
       <Grid 
       sx={{pl:'13vw'}}
       item xs={4}>
       <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        sx={{maxHeight:200}}
        image={item.img}
      />
      <CardContent>
      {/* <Typography sx={{mb:2}} style={{fontSize:20}} gutterBottom variant="h4" component="div">
          Main Information
        </Typography> */}
        <Typography style={{fontSize:17}} gutterBottom variant="h5" component="div">
          Members
        </Typography>
        <Stack spacing={0.5}>
          {item.members.map((each) => (
            <Typography style={{fontSize:17}} variant="body2" color="text.secondary">
            {each}
          </Typography>
          ))}
        </Stack>
        
      </CardContent>
      <CardActions>
        <Stack sx={{ml:1}} spacing={1}>
        
        {item.report? <Button   disableElevation variant="contained" onClick={()=>viewer(item.report)} size="small">View Report</Button>  : <Button disabled   disableElevation variant="contained" onClick={()=>viewer(item.report)} size="small">View Report</Button>  }
        {item.yt? <Button  disableElevation variant="contained"  onClick={()=>viewer(item.yt)} size="small">View Video</Button> : <Button disabled  disableElevation variant="contained"  onClick={()=>viewer(item.yt)} size="small">View Video</Button> }
        {item.git? <Button disableElevation variant="contained" onClick={()=>viewer(item.git)} size="small">View Github</Button> : <Button disabled disableElevation variant="contained" onClick={()=>viewer(item.git)} size="small">View Github</Button>}
        </Stack>
        
      </CardActions>
    </Card>
  </Grid>
  <Grid  item xs={8}>
    <Stack sx={{maxWidth:1000}}>
      <Typography sx={{mt:'7vh',mb:'5vh'}} variant="h3" >{item.name}</Typography>
      <Typography sx={{mb:'2vh'}} variant="h4" >Project Description</Typography>
      <Typography sx={{mb:'2vh'}} style={{fontSize:25}} variant="h4" >Abstract</Typography>
      <Typography  sx={{mb:'2vh'}} style={{fontSize:17}}variant="h6" >{item.abstract}</Typography>
      <Typography  sx={{mb:'2vh'}} style={{fontSize:25}}variant="h4" >Background</Typography>
      <Typography sx={{mb:'2vh'}}  style={{fontSize:17}}variant="h6" >{item.bg}</Typography>
      <Typography  sx={{mb:'2vh'}} style={{fontSize:25}}variant="h4" >Objectives</Typography>
      <Typography sx={{mb:'2vh'}}  style={{fontSize:17}}variant="h6" >{item.objective}</Typography>
    </Stack> 
  </Grid>
    </Grid>
  );
}

