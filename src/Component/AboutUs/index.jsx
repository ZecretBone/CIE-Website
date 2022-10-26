import * as React from "react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import {Typography, Grid, Card, CardMedia} from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function AboutUs() {
  return (
      <Grid container direction="row" justify="center" sx={{ pt:"3rem" }}>
        <Grid item xs={7}>
      <Typography
        alignItems="center"
        justifyContent="left"
        mt="2rem"
        pl="10vw"
        pr="5vw"
      >
      <Typography sx={{fontWeight:700, fontSize:'2vw',color:'#3C3C3C'}} variant="h4" pb="1.5rem" >ABOUT US</Typography>
      
      <Typography sx={{fontFamily:'"Mukta", sans-serif',fontWeight:500,color:'#3C3C3C', fontSize:'1vw'}} paragraph>
        <Typography sx={{fontFamily:'"Mukta", sans-serif',fontWeight:500, fontSize:'1vw'}}  color="#F3791D" display="inline">
          <strong>The Computer Innovation Engineering Program (CIE)</strong>
        </Typography >{" "}
        is the platform for academic advancement of the 21st century. By
        combining theoretical foundations with hands-on experience and
        project-based learning, the students will learn the computing skills
        required for today’s workforce. The program offers state-of-the-art
        knowledge in computing technologies; including Internet of Things, Cloud
        Computing, Cyber-Physical System, Cyber Security and Data Analytics. Our
        engineering curriculum also deeply integrates with the study of
        innovation process to help students transform their explored ideas into
        startups that will drive our future.
      </Typography>
      </Typography>
      </Grid>
      <Grid item display="flex" xs={5} sx={{ alignItems:"center", pt:"2rem", maxWidth:"60%" }}>
        <Card  sx={{ maxWidth: "80%", }}>
          <CardMedia component="img" alt="HM building" image="/homepage/03aboutus.png">
          </CardMedia>
        </Card>
      </Grid>
      </Grid>
  );
}
