import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import CIEicon from "./image2vector.svg";
import AICEicon from "./Aicelogo2.svg";
import AICEicon2 from "./Aicelogo.png";
import contactbanner from "./01homecontact.png";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function Contactlist() {
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
      window.open("tel:0658785000");
    } else if (w == "ae") {
      window.open("mailto:info@cmkl.ac.th");
    }
  };
  return (
    <div sx={{ zIndex: 1 }}>
      <Box display="flex" sx={{ px: "10vw" }}>
        <Stack spacing={1.5}>
          <Typography
            variant="h4"
            color="white"
            sx={{ mt: "15rem", pb: "3rem" }}
          >
            <strong>CONTACT US</strong>
          </Typography>
          <Stack direction="row" spacing={1.5}>
            <Card
              elevation={7}
              sx={{ maxWidth: "15vw", py: "0.5rem", px: "1rem" }}
            >
              <CardContent>
                <Grid
                  container
                  direction="row"
                  columns={12}
                  display="flex"
                  sx={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Grid item xs={4}>
                    <CardMedia
                      component="img"
                      image={CIEicon}
                      sx={{Height:"6rem"}}
                    ></CardMedia>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      sx={{ ml: 2 }}
                      variant="h5"
                    >
                      Contact Info
                    </Typography>
                  </Grid>
                </Grid>

                <Divider sx={{ mt: 3, mb: 3 }} variant="middle"></Divider>
                <Typography variant="body2" color="text.secondary">
                  Computer Innovation Engineering Faculty of Engineering, KMITL
                  <div>1 Soi Chalongkrung 1 </div>
                  <div>Ladkrabang, Bangkok 10520 </div>Thailand
                </Typography>
              </CardContent>

              <CardActions>
                <Grid container alignItems="left" justifyContent="left ">
                  <Stack spacing={1.5}>
                    <Button
                      onClick={() => newtab("ct")}
                      startIcon={<CallIcon />}
                      sx={{ fontSize: 10, maxWidth: "max-content" }}
                    >
                      +66 902920977
                    </Button>
                    <Button
                      onClick={() => newtab("ce")}
                      startIcon={<EmailIcon />}
                      sx={{ fontSize: 10, maxWidth: "max-content" }}
                    >
                      cie@kmitl.ac.th
                    </Button>
                    <Button
                      onClick={() => newtab("ci")}
                      startIcon={<InstagramIcon />}
                      sx={{ fontSize: 10, maxWidth: "max-content" }}
                    >
                      cie.kmitlofficial
                    </Button>
                    <Button
                      onClick={() => newtab("cf")}
                      startIcon={<FacebookIcon />}
                      sx={{ fontSize: 10, maxWidth: "max-content" }}
                    >
                      Computer Innovation Engineering, KMITL
                    </Button>
                  </Stack>
                </Grid>
              </CardActions>
            </Card>

            <Card
              elevation={7}
              sx={{ maxWidth: "15vw", py: "0.5rem", px: "1rem" }}
            >
              <CardContent>
                <Grid
                  container
                  direction="row"
                  columns={12}
                  display="flex"
                  sx={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Grid item xs={4}>
                    <CardMedia
                      component="img"
                      image={AICEicon2}
                      sx={{Height:"6rem"}}
                    ></CardMedia>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      sx={{ ml: 2 }}
                      variant="h5"
                    >
                      Contact Info
                    </Typography>
                  </Grid>
                </Grid>

                <Divider sx={{ mt: 3, mb: 3 }} variant="middle"></Divider>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ pb: "1rem" }}
                >
                  <div>CMKL University</div>
                  <div>1 Soi Chalongkrung 1</div>
                  <div>Ladkrabang, Bangkok 10520</div> Thailand
                </Typography>
              </CardContent>

              <CardActions>
                <Grid container alignItems="left" justifyContent="left ">
                  <Stack spacing={1.5}>
                    <Button
                      onClick={() => newtab("at")}
                      startIcon={<CallIcon />}
                      sx={{ fontSize: 10, maxWidth: "max-content" }}
                    >
                      +66 658785000
                    </Button>
                    <Button
                      onClick={() => newtab("ae")}
                      startIcon={<EmailIcon />}
                      sx={{ fontSize: 10, maxWidth: "max-content" }}
                    >
                      info@cmkl.ac.th
                    </Button>
                  </Stack>
                </Grid>
              </CardActions>
            </Card>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8572674509473!2d100.77248521495883!3d13.727090001563658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d664a6229ce87%3A0xe18798804c647947!2sKMITL%20School%20of%20Engineering!5e0!3m2!1sen!2sth!4v1651039451571!5m2!1sen!2sth"
              title="A youtube video on React hooks"
              width={700}
            ></iframe>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}
