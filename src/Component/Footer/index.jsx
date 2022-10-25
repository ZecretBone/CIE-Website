import * as React from "react";
import { Typography, Grid } from "@mui/material";
import { createTheme, responsiveFontSizes, styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import FaxIcon from "@mui/icons-material/Fax";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";

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
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      sx={{ px: "10vw", backgroundColor: "black", color: "white", py: "2rem" ,mt:10}}
    >
      <Grid item container direction="column" xs={3}>
        <Typography variant="h6" sx={{pb:"0.5rem"}}>
          <strong>CONTACT US</strong>
        </Typography>
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
      <Grid item container direction="column" xs={3}>
        <Typography variant="h6" width="100%" sx={{pb:"0.5rem"}}>
          <strong>LOCATION</strong>
        </Typography>
        <Typography variant="p">
          Computer Innovation Engineering Faculty of Engineering, KMITL
        </Typography>
        <Typography variant="p">
          1 Soi Chalongkrung 1 Ladkrabang, Bangkok 10520
        </Typography>
        <Typography variant="p">Thailand</Typography>
      </Grid>
      <Grid item container direction="column" xs={6}>
        <Grid item xs>
          <Typography variant="h6" width="100%" sx={{pb:"0.5rem"}}>
            <strong>QUICK LINKS</strong>
          </Typography>
        </Grid>
        <Grid item container direction="row">
          <Grid item container direction="column" xs={6}>
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
          <Grid item container direction="column" xs={6}>
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
