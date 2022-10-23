import * as React from "react";
import { Paper, Button, Box, Typography } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import capstoneProject from "../../../Data/capstoneProj.json";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Project(props) {
  const params = props.match.params;

  let items
  if (params.type === "capstone"){
    items = capstoneProject["capstoneProject"]
  }else if (params.type === "project"){
    items = {}
  }

  let item = items.find( (item) => item.id === params.id)

  return (
    <Typography> Project ID: {item.name} </Typography>
  );
}

