import * as React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Pagefooter() {
  return (
    <Grid
      container
      sx={{ color: "white", backgroundColor: "black", py: "2rem" }}
    >
      <Grid item xs={2}></Grid>
      <Grid item xs={2} container>
        <Typography variant="h6" width="100%">
          Contact us
        </Typography>
        <Grid item xs={12}>
          <Grid container direction="column" >
            <Typography variant="p">Mail</Typography>
            <Typography variant="p">Phone1</Typography>
            <Typography variant="p">Phone2</Typography>
            <Typography variant="p">Phone2</Typography>
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
            <Typography variant="p">Mail</Typography>
            <Typography variant="p">Phone1</Typography>
            <Typography variant="p">Phone2</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={4} container>
        <Typography variant="h6" width="100%">
          Quick links
        </Typography>
        <Grid item xs={6}>
          <Grid container direction="column">
            <Typography variant="p">Mail</Typography>
            <Typography variant="p">Phone1</Typography>
            <Typography variant="p">Phone2</Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column">
            <Typography variant="h6"></Typography>
            <Typography variant="p">Mail</Typography>
            <Typography variant="p">Phone1</Typography>
            <Typography variant="p">Phone2</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
