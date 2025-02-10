import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "CellPhone",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Laptop",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Printing",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Docs",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;
