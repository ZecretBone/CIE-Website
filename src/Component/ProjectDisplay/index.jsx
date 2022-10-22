import * as React from "react";
import { Paper, Button, Box, Typography } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Project(props) {
  const { id } = useParams("id");
  var projects = [
    {
      id: "1",
      name: "AICE",
      description: "Probably the most random thing you have ever seen!",
      link: "",
    },
    {
      id: "2",
      name: "CIE",
      description: "Hello World!",
      link: "",
    },
  ];

  const project = projects.find((project) => project.id === id);
  return (
    <div>
      <Typography>Project: {project.name}</Typography>
      <Typography>Description: {project.description}</Typography>
    </div>
  );
}
