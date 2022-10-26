import * as React from "react";
import { Card, Grid, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import allitems from "../../../Data/studentProj.json";
import { CardActionArea } from "@mui/material";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Studentproject(props) {
  const [failure, setFail] = React.useState(false);

  const viewnewtab = (link) => {
    if (link) {
      setFail(false);
      window.open(link);
    } else {
      setFail(true);
    }
  };

  var items = [
    {
      id: "1",
      name: "Babylicious",
      description: "UXUI design application for new mom",
      link: "",
      img: "/stdproj/01.png",
    },
    {
      id: "2",
      name: "SOL",
      description: "Self Organizing Library",
      link: "",
      img: "/stdproj/02.png",
    },
    {
      id: "3",
      name: "K-Rider",
      description: "Mobile application for transporting around KMITL",
      link: "",
      img: "/stdproj/03.png",
    },
    {
      id: "4",
      name: "Canvasky",
      description: "Painting application",
      link: "",
      img: "/stdproj/04.jpg",
    },
    {
      id: "5",
      name: "In Your Place",
      description: "Mobile AR game",
      link: "",
      img: "/stdproj/05.jpg",
    },
    {
      id: "6",
      name: "Pentest Project",
      description: "pentest project for computer system course",
      link: "",
      img: "/stdproj/06.jpg",
    },
    {
      id: "7",
      name: "Musiege",
      description: "You can listen to the music together with Musiege",
      link: "",
      img: "/stdproj/07.jpg",
    },
  ];

  items = allitems["studentProj"];

  return (
    <div>
      <CardMedia
        component="img"
        image="contact/01homecontact.png"
        sx={{ position: "absolute", zIndex: -1, filter: "brightness(50%)" }}
      ></CardMedia>

      <Typography sx={{ px: "10vh" }}>
        <Typography
          sx={{
            color: "white",
            fontSize: "3vw",
            fontWeight: "700",
            pt: "8rem",
          }}
        >
          Student Project
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: "1.5vw",
            fontWeight: "500",
            pt: "3rem",
            pb: "5rem",
          }}
        >
          {" "}
          Students will work on open-ended engineering design and/or research
          that incorporates fundamental and advanced concepts in Computer
          Innovation Engineering. Students will learn to build innovation,
          identify the opportunities, propose ideas, design and implement
          innovative solutions while being able to apply standards and realistic
          engineering constraints.
        </Typography>
      </Typography>

      <Collapse in={failure}>
        <Alert
          variant="filled"
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setFail(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Sorry, This project have no external link
        </Alert>
      </Collapse>

      <Grid
        container
        spacing={3}
        columns={{ xs: 6, sm: 12, md: 12 }}
        direction="row"
        alignItems="center"
        justifyContent="left "
        sx={{ px: "10vw" }}
      >
        {items.map((item) => (
          <Grid item xs={6} sx={{ p: 0, m: 0 }}>
            <div onClick={() => viewnewtab(item.link)}>
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: "20vh",
                }}
              >
                <Typography sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto", pl: "1rem" }}>
                    <Typography
                      component="div"
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.5vw",
                        color: "#3C3C3C",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      sx={{fontSize:"1vw"}}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                  <Typography sx={{ display: "flex", pl: "1rem", pb: "1rem" }}>
                    <Button
                      sx={{
                        backgroundColor: "#F3791D",
                        borderRadius: "2rem",
                        color: "white",
                        fontWeight: "500",
                        px: "1.5rem",
                      }}
                    >
                      View more
                    </Button>
                  </Typography>
                </Typography>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={item.img}
                />
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
