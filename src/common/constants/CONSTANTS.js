import React from "react";

const Contact = React.lazy(()=> import("../../components/contact/Contact"));
const Greetings = React.lazy(()=> import("../../components/greetings/Greetings"));
const Intro = React.lazy(()=> import("../../components/intro/Intro"));
const Error = React.lazy(()=> import("../../components/error/Error"));


export const EXPERIENCE_DETAILS = {
  sync: { skill: "react, js, vanilla js, node.js" },
  kona: { skill: "react, ts, js, vanilla js, next js, java" },
};

export const CONTACT = {
  phone: "+8801625035458",
  email: "himelkaisar023@gmail.com",
};

export const ROUTES = [
  {
    pathName: "home",
    route: "/",
    component: <Greetings />,
  },
  {
    pathName: "Introduction",
    route: "/intro",
    component: <Intro />,
  },
  {
    pathName: "Contact",
    route: "/contact",
    component: <Contact />,
  },
  {
    pathName: "404",
    route: "*",
    component: <Error />,
  },
];

export const LANDING_NAV_ROUTES = [
  {
    pathName: "Introduction",
    route: "/intro",
    component: <Intro />,
  },
  {
    pathName: "Contact",
    route: "/contact",
    component: <Contact />,
  },
];
