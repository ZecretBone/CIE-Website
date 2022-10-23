import * as React from "react";
import { Typography } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import capstoneProject from "../../Data/capstoneProj.json";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Project(props) {
  const params = useParams();

  let items
  if (params.type === "capstone"){
    items = capstoneProject["capstoneProject"]
  }else if (params.type === "project"){
    items = {}
  }

  let item = items.find( (item) => item.id === params.id)

  return (
    <Typography> Project Name: {item.name} </Typography>
  );
}

