import * as React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { createTheme, responsiveFontSizes, styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import Stack from "@mui/material/Stack";
import FaxIcon from "@mui/icons-material/Fax";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import { lime } from "@mui/material/colors";

const Typ = styled(Typography)(({ theme }) => ({
  textDecoration: "none",
  "&:hover": {
    opacity: "75%",
  },
}));

const TypL = styled(Typography)(({ theme }) => ({
  "&:hover": {
    textDecoration: "underline",
  },
}));

export default function Pagefooter() {
  //const classes = useStyles

  const newtab = (w) => {
    if (w == "cf") {
      window.open("https://www.facebook.com/CIEatKMITL");
    } else if (w == "ci") {
      window.open("https://www.instagram.com/cie.kmitlofficial/?hl=en");
    } else if (w == "ce") {
      window.open("mailto:cie@kmitl.ac.th");
    } else if (w == "ct") {
      window.open("tel:0902920977");
    } else if (w == "at") {
      window.open("https://www.instagram.com/cie.kmitlofficial/?hl=en");
    } else if (w == "ae") {
      window.open("https://www.instagram.com/cie.kmitlofficial/?hl=en");
    } else if (w == "cfax") {
      window.open("fax:658785000");
    }
  };

  return (
    <Grid
      sx={{
        color: "white",
        backgroundColor: "black",
        py: "2rem",
        bottom: 0,
        left: 0,
        right: 0,
        mt: 20,
      }}
    >
      <Grid container direction="row" columns={12} sx={{ px: "10vw" }}>
        <Grid item container xs={6} direction="row">
          <Grid item xs={6} container>
            <Grid item>
              <Typography variant="h6">
                <strong>CONTACT US</strong>
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Typ
                display="flex"
                sx={{ maxWidth: "max-content", justifyContent: "center" }}
                style={{ cursor: "pointer" }}
                onClick={() => newtab("ce")}
                variant="p"
              >
                {" "}
                <EmailIcon sx={{ px: "0.1rem" }}></EmailIcon> cie@kmitl.ac.th
              </Typ>
              <Typ
                display="flex"
                sx={{ maxWidth: "max-content", justifyContent: "center" }}
                style={{ cursor: "pointer" }}
                onClick={() => newtab("ct")}
                variant="p"
              >
                <CallIcon sx={{ px: "0.1rem" }}></CallIcon> +66 902920977
              </Typ>
              <Typ
                display="flex"
                sx={{ maxWidth: "max-content", justifyContent: "center" }}
                style={{ cursor: "pointer" }}
                onClick={() => newtab("cfax")}
                variant="p"
              >
                <FaxIcon sx={{ px: "0.1rem" }}></FaxIcon> +66 658785000
              </Typ>
              <Typography>
                <IconButton
                  onClick={() => newtab("ci")}
                  sx={{ color: "white", p: "0" }}
                >
                  <InstagramIcon />
                </IconButton>{" "}
                <IconButton
                  onClick={() => newtab("cf")}
                  sx={{ color: "white", p: "0" }}
                >
                  <FacebookIcon />
                </IconButton>{" "}
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={6} container>
            <Typography variant="h6" width="100%">
              <strong>LOCATION</strong>
            </Typography>
            <Grid
              item
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography variant="p">
                Computer Innovation Engineering Faculty of Engineering, KMITL
              </Typography>
              <Typography variant="p">
                1 Soi Chalongkrung 1 Ladkrabang, Bangkok 10520
              </Typography>
              <Typography variant="p">Thailand</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} container direction="row">
          <Typography variant="h6" width="100%" sx={{ p: "0", m: "0" }}>
            <strong>QUICK LINKS</strong>
          </Typography>
          <Grid
            item
            container
            xs={3}
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <a style={{ maxWidth: "max-content" }} href="/programguide">
              <TypL sx={{ color: "white" }} variant="p">
                Program Guide
              </TypL>
            </a>
            <a style={{ maxWidth: "max-content" }} href="/">
              <TypL sx={{ color: "white" }} variant="p">
                Home
              </TypL>
            </a>
            <a style={{ maxWidth: "max-content" }} href="/gallery">
              <TypL sx={{ color: "white" }} variant="p">
                Gallery
              </TypL>
            </a>
          </Grid>
          <Grid
            item
            container
            xs={9}
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Typography variant="p">
              Department of Computer Engineering
            </Typography>
            <Typography variant="p">Faculty of Engineering</Typography>
            <Typography variant="p">
              King Mongkut's Institute of Technology Ladkrabang
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
