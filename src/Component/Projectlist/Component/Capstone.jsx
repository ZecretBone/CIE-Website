import * as React from "react";
import { Card, Grid, Typography, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import projects from "../../../Data/capstoneProj.json";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Capstone(props) {
  let items = projects;
  console.log(items);
  items["capstoneProject"].map((item, i) => console.log(item));

  return (
    <div sx={{ p: 0 }}>
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
            pt: "10vw",
          }}
        >
          Capstone Project
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: "1.5vw",
            fontWeight: "500",
            pt: "2vw",
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

      <Grid
        container
        spacing={3}
        columns={{ xs: 6, sm: 12, md: 12 }}
        direction="row"
        alignItems="center"
        justifyContent="left "
        sx={{ px: "10vw" }}
      >
        {items["capstoneProject"].map((item, i) => (
          <Grid item xs={6} sx={{ p: 0, m: 0 }}>
            <Item key={i} item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

function Item(props) {
  return (
    <Link to={`/student-work/capstone/${props.item.id}`}>
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
              sx={{ fontWeight: 700, fontSize: "1.5vw", color: "#3C3C3C" }}
            >
              {props.item.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {props.item.description}
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
        <CardMedia component="img" sx={{ width: "40%" }} image={props.item.img} />
      </Card>
    </Link>
  );
}
