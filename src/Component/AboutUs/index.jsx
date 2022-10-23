import * as React from "react";
import {Typography, Grid, Card, CardMedia} from "@mui/material";

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
      <Typography variant="h4" pb="1.5rem" ><strong>ABOUT US</strong></Typography>
      
      <Typography paragraph>
        <Typography color="orange" display="inline">
          <strong>The Computer Innovation Engineering Program (CIE)</strong>
        </Typography>{" "}
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
