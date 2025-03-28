import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar({ brandName, routes }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleNavClick = () => {
    setOpenNav(false);
  };

  const navList = (
    <ul className="flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize"
          onClick={handleNavClick}
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </a>
          ) : (
            <NavLink
              to={path}
              target={target}
              className="flex items-center gap-1 p-1 font-medium transition-colors duration-200"
              style={({ isActive }) => ({
                fontSize: "12px",
                color: isActive ? "#ff6000" : "black",
              })}
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </NavLink>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="p-2 w-full max-w-full">
      <div className="flex items-center justify-between w-full">
        <Link to="/">
          <Typography>
            <img src="/img/everest_logo1.png" width="40px" height="auto" alt="Everest Logo" />
          </Typography>
        </Link>
        <div className="hidden lg:flex justify-center flex-grow">{navList}</div>
        <IconButton
          variant="text"
          size="sm"
          className="ml-auto bg-black text-white hover:bg-gray-800 focus:bg-gray-900 active:bg-gray-700 lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>

      </div>
      <MobileNav
        className="rounded-xl px-4 text-blue-gray-900"
        open={openNav}
      >
        <div className="container mx-auto">
          {navList}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: "Everest Multitech Logo",
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
