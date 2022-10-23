import {
  Home,
  Progguide,
  Studentwork,
  Courses,
  Aboutus,
  Project,
  Contactus,
  Faqs,
} from "../../Pages";
import React from "react";
// import {
//   LoginPage,
//   RegisterPage,
//   ForgetPage,
// } from "../../Pages/Authentication/childPage";

export const routePath = [
  {
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
    name: "courses",
    path: "/courses",
    component: () => {
      return <Courses />;
    },
    Icon: React.lazy(() => import("@mui/icons-material/HomeOutlined")),
    show: {
      header: true,
      footer: true,
    },
    childPage: null,
  },
  {
    name: "about-us",
    path: "/about-us",
    component: () => {
      return <Aboutus />;
    },
    Icon: React.lazy(() => import("@mui/icons-material/HomeOutlined")),
    show: {
      header: true,
      footer: true,
    },
    childPage: null,
  },
  {
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
    name: "student-work",
    path: "/student-work/:id",
    component: () => {
      return <Project />;
    },
    loader: async ({ request, params }) => {
      return fetch(`/fake/api/teams/${params.teamId}.json`, {
        signal: request.signal,
      });
    },
    Icon: React.lazy(() => import("@mui/icons-material/HomeOutlined")),
    show: {
      header: true,
      footer: true,
    },
    childPage: null,
  },
  {
    name: "faqs",
    path: "/faqs",
    component: () => {
      return <Faqs />;
    },
    Icon: React.lazy(() => import("@mui/icons-material/HomeOutlined")),
    show: {
      header: true,
      footer: true,
    },
    childPage: null,
  },
  {
    name: "contact-us",
    path: "/contact-us",
    component: () => {
      return <Contactus />;
    },
    Icon: React.lazy(() => import("@mui/icons-material/HomeOutlined")),
    show: {
      header: true,
      footer: true,
    },
    childPage: null,
  },
];
