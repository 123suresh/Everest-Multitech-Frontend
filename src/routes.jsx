import { Home, Profile, SignIn, SignUp } from "@/pages";
import Repairs from "./pages/Repairs";
import OnlineStore from "./pages/OnlineStore";
import Contact from "./pages/Contact";
import ITService from "./pages/ITService";
import Microsoldering from "./pages/Microsoldering";
import Carrier from "./pages/Carrier";
import Printing from "./pages/Printing";
import InternetSvc from "./pages/InternetSvc";
import MoneySvc from "./pages/MoneySvc";
import Shippingsvc from "./pages/Shippingsvc";

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
    path: "/printing",
    element: <Printing />,
  },
  {
    name: "Phone Carrier Service",
    path: "/carrierservice",
    element: <Carrier />,
  },
  {
    name: "Internet Service",
    path: "/internetservice",
    element: <InternetSvc />,
  },
  {
    name: "Money Service",
    path: "/moneyservice",
    element: <MoneySvc />,
  },
  {
    name: "Shipping Service",
    path: "/shipping",
    element: <Shippingsvc />,
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
