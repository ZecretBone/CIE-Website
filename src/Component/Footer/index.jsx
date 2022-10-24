import * as React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Pagefooter() {
  return (
    <Grid
      container
      sx={{ color: "white", backgroundColor: "black", py: "2rem" , bottom: 0, left: 0, right: 0,mt:20 }}
      // sx={{ position: 'fixed'}}
    >
      <Grid item xs={2}></Grid>
      <Grid item xs={2} container>
        <Typography variant="h6" width="100%">
          Contact us
        </Typography>
        <Grid item xs={12}>
          <Grid container direction="column" >
            <Typography variant="p">cie@kmitl.ac.th</Typography>
            <Typography variant="p">+66 902920977</Typography>
            <Typography variant="p">+66 658785000</Typography>
            <Typography variant="p"></Typography>
            <FacebookIcon></FacebookIcon>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={2} container>
        <Typography variant="h6" width="100%">
          Location
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
          Quick links
        </Typography>
        <Grid item xs={6}>
          <Grid container direction="column">
            <Typography variant="p">Program Guide</Typography>
            <Typography variant="p">home</Typography>
            <Typography variant="p">gallery</Typography>
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
    </Grid>
  );
}
