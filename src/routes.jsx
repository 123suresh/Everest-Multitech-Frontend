import { Home, Profile, SignIn, SignUp } from "@/pages";
import Repairs from "./pages/Repairs";
import OnlineStore from "./pages/OnlineStore";
import Contact from "./pages/Contact";
import ITService from "./pages/ITService";
import Microsoldering from "./pages/Microsoldering";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "IT Service",
    path: "/itservice",
    element: <ITService/>,
  },
  {
    name: "Repair",
    path: "/profile",
    element: <Repairs/>,
  },
  // {
  //   name: "CellPhone",
  //   path: "/profile",
  //   element: <Profile />,
  // },
  // {
  //   name: "Laptop",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  {
    name: "Micro-Soldering",
    path: "/microsoldering",
    element: <Microsoldering />,
  },
  {
    name: "Printing",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Phone Carrier Service",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Internet Service",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Money Service",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Shipping Service",
    path: "/sign-up",
    element: <SignUp />,
  },
  // {
  //   name: "Contact",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
  {
    name: "Contact",
    path: "/contact",
    element: <Contact/>,
  },
];

export default routes;
