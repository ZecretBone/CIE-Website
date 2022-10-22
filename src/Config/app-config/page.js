import { Home, Progguide, Studentwork } from "../../Pages";
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
  {
    id: 2,
    name: "courses",
    path: "/courses",
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
    id: 3,
    name: "about-us",
    path: "/about-us",
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
    id: 4,
    name: "student-work",
    path: "/student-work",
    component: () => {
      return <Studentwork />;
    },
    Icon: React.lazy(() => import("@mui/icons-material/HomeOutlined")),
    show: {
      header: true,
      footer: true,
    },
    childPage: null,
  },
  {
    id: 5,
    name: "faqs",
    path: "/faqs",
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
    id: 6,
    name: "contact-us",
    path: "/contact-us",
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
];
