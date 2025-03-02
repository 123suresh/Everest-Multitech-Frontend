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
    name: "HOME",
    path: "/home",
    element: <Home />,
  },
  {
    name: "IT SERVICE",
    path: "/itservice",
    element: <ITService/>,
  },
  {
    name: "REPAIR",
    path: "/repair",
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
    name: "MICRO-SOLDERING",
    path: "/microsoldering",
    element: <Microsoldering />,
  },
  {
    name: "PRINTING",
    path: "/printing",
    element: <Printing />,
  },
  {
    name: "PHONE CARRIER",
    path: "/carrierservice",
    element: <Carrier />,
  },
  // {
  //   name: "Internet Service",
  //   path: "/internetservice",
  //   element: <InternetSvc />,
  // },
  {
    name: "MONEY SERVICE",
    path: "/moneyservice",
    element: <MoneySvc />,
  },
  {
    name: "SHIPPING",
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
    name: "CONTACT",
    path: "/contact",
    element: <Contact/>,
  },
];

export default routes;
