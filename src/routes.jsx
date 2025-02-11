import { Home, Profile, SignIn, SignUp } from "@/pages";
import Repairs from "./pages/Repairs";
import OnlineStore from "./pages/OnlineStore";
import Contact from "./pages/Contact";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
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
    name: "Online Store",
    path: "/online_store",
    element: <OnlineStore />,
  },
  {
    name: "Printing",
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
