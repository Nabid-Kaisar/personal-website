import Intro from "../../components/intro/Intro";
import Contact from "../../components/contact/Contact";
import Greetings from "../../components/greetings/Greetings";
import Error from "../../components/error/Error";

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
    Component: Greetings,
  },
  {
    pathName: "Introduction",
    route: "/intro",
    Component: Intro,
  },
  {
    pathName: "Contact",
    route: "/contact",
    Component: Contact,
  },
  {
    pathName: "404",
    route: "*",
    Component: Error,
  },
];

export const LANDING_NAV_ROUTES = [
  {
    pathName: "Introduction",
    route: "/intro",
    Component: Intro,
  },
  {
    pathName: "Contact",
    route: "/contact",
    Component: Contact,
  },
];
