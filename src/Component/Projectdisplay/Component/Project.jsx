import * as React from "react";
import { Paper, Button, Box, Typography } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Project(props) {
  const params = props.match.params;
  var items = [
    {
      id: 1,
      name: "AICE",
      description: "Probably the most random thing you have ever seen!",
      link: "",
      img: ""
    },
    {
      id: 2,
      name: "CIE",
      description: "Hello World!",
      link: "",
      img: ""
    },
  ];

  return (
    <Typography> Project ID: {params.id} </Typography>
  );
}

