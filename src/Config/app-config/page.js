import { Home, Progguide } from "../../Pages";
import React from "react";
// import {
//   LoginPage,
//   RegisterPage,
//   ForgetPage,
// } from "../../Pages/Authentication/childPage";

export const routePath = [
  {
    id: 0,
    name: "home",
    path: "/",
    component: () => {
      return <Home />;
    },
    Icon: React.lazy(() => import("@mui/icons-material/HomeOutlined")),
    show: {
      header: true,
      footer: true,
    },
    childPage: null,
  },
  {
    id: 1,
    name: "programguide",
    path: "/programguide",
    component: () => {
      return <Progguide />;
    },
    Icon: React.lazy(() => import("@mui/icons-material/HomeOutlined")),
    show: {
      header: true,
      footer: true,
    },
    childPage: null,
  },
];
