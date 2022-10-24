import Intro from "../../components/intro/Intro";
import Contact from "../../components/contact/Contact";
import Greetings from "../../components/greetings/Greetings";

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
    component: Greetings,
  },
  {
    pathName: "Introduction",
    route: "/intro",
    component: Intro,
  },
  {
    pathName: "Contact",
    route: "/contact",
    component: Contact,
  },
];

export const LANDING_NAV_ROUTES = [
  {
    pathName: "Introduction",
    route: "/intro",
    component: Intro,
  },
  {
    pathName: "Contact",
    route: "/contact",
    component: Contact,
  },
];
