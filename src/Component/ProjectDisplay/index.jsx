import * as React from "react";
import { Typography } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import capstoneProject from "../../Data/capstoneProj.json";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { fontFamily } from "@mui/system";
import studentProject from "../../Data/studentProj.json";
import Divider from "@mui/material/Divider";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Project(props) {
  const params = useParams();

  let items;
  if (params.type === "capstone") {
    items = capstoneProject["capstoneProject"];
  } else if (params.type === "project") {
    items = studentProject["studentProj"];
  }

  let item = items.find((item) => item.id === params.id);

  const viewer = (link) => {
    window.open(link);
  };

  return (
    // <Typography> Project Name: {item.name} </Typography>
    <Grid
      alignItems="flex-start"
      justifyContent="flex-start"
      container
      sx={{ px: "10vw", py: "8rem" }}
    >
      <Grid item xs={2.5}>
        <Card sx={{ p: "0.5rem" }}>
          <CardMedia component="img" sx={{ maxHeight: 200 }} image={item.img} />
          <CardContent sx={{ px: "1.5rem" }}>
            <Typography variant="subtitle2" gutterBottom>
              Members
            </Typography>
            <Stack spacing={0.5}>
              {item.members.map((each) => (
                <Typography variant="subtile1" color="text.secondary">
                  {each}
                </Typography>
              ))}
            </Stack>
          </CardContent>
          <CardActions>
            <Stack sx={{ px: "0.5rem" }}>
              {item.report ? (
                <Button
                  disableElevation
                  variant="text"
                  onClick={() => viewer(item.report)}
                  size="small"
                >
                  View Report
                </Button>
              ) : (
                  <Button
                    disabled
                    disableElevation
                    variant="contained"
                    onClick={() => viewer(item.report)}
                    size="small"
                  >
                    View Report
                  </Button>
                )}
              {item.yt ? (
                <Button
                  disableElevation
                  variant="text"
                  sx={{ maxWidth: "max-content" }}
                  onClick={() => viewer(item.yt)}
                  size="small"
                >
                  View Video
                </Button>
              ) : (
                  <Button
                    disabled
                    disableElevation
                    variant="contained"
                    onClick={() => viewer(item.yt)}
                    size="small"
                  >
                    View Video
                  </Button>
                )}
              {item.git ? (
                <Button
                  disableElevation
                  variant="text"
                  sx={{ maxWidth: "max-content" }}
                  onClick={() => viewer(item.git)}
                  size="small"
                >
                  View Github
                </Button>
              ) : (
                  <Button
                    disabled
                    disableElevation
                    variant="contained"
                    onClick={() => viewer(item.git)}
                    size="small"
                  >
                    View Github
                  </Button>
                )}
            </Stack>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs>
        <Stack sx={{ maxWidth: 1000 }}>
          <Typography sx={{ mb: "5vh" }} variant="h3">
            {item.name}
          </Typography>
          <Typography sx={{ mb: "2vh" }} variant="h4">
            Project Description
          </Typography>
          <Divider sx={{ mb: "2vh" }} variant="middle"></Divider>
          <Typography sx={{ mb: "2vh" }} style={{ fontSize: 25 }} variant="h4">
            Abstract
          </Typography>
          <Typography sx={{ mb: "2vh" }} style={{ fontSize: 17 }} variant="h6">
            {item.abstract}
          </Typography>
          <Typography
            sx={{ mb: "2vh", visibility: item.bg ? "visible" : "hidden" }}
            style={{ fontSize: 25 }}
            variant="h4"
          >
            Background
          </Typography>
          <Typography
            sx={{ mb: "2vh", visibility: item.bg ? "visible" : "hidden" }}
            style={{ fontSize: 17 }}
            variant="h6"
          >
            {item.bg}
          </Typography>
          <Typography
            sx={{
              mb: "2vh",
              visibility: item.objective ? "visible" : "hidden",
            }}
            style={{ fontSize: 25 }}
            variant="h4"
          >
            Objectives
          </Typography>
          <Typography
            sx={{
              mb: "2vh",
              visibility: item.objective ? "visible" : "hidden",
            }}
            style={{ fontSize: 17 }}
            variant="h6"
          >
            {item.objective}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
