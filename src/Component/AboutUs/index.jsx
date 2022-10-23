import * as React from "react";
import {Typography, Grid} from "@mui/material";

export default function Us() {
  return (
    <div>
      <Grid container direction="row" justify="center">
        <Grid item xs={8}>
      <Typography
        alignItems="center"
        justifyContent="left"
        mt="2rem"
        px="10vw"
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
      <Grid item xs={4}>
      </Grid>
      </Grid>
    </div>
  );
}
