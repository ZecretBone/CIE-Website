import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import RouterPath from "./Router/Router";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
//import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/mukta";
import "@fontsource/inter";

const THEME = createTheme({
  fontFamily: '"Inter", sans-serif',
  typography: {
    fontFamily: '"Inter", sans-serif',
    //  "fontSize": 14,
    //  "fontWeightLight": 300,
    //  "fontWeightRegular": 400,
    //  "fontWeightMedium": 500
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
        <RouterPath />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
