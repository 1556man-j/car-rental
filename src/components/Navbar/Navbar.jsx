import React, { useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
function Navbar({ theme, setTheme }) {
  const [showMenu, SetShowMenu] = useState(false);
  const toggleMenu = () => {
    SetShowMenu(!showMenu);
  };
  return (
    <div className="duration-300 bg-white dark:bg-dark dark:text-white">
      <nav className="shadow-md">
        <div className="container p-4">
          <div className="flex justify-between">
            <div>
              <h1 className="font-serif text-2xl font-bold">Car Rental</h1>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-8 text-center">
                <li>
                  <a
                    className="py-2 text-lg font-medium transition-colors duration-500 hover:text-primary hover:border-b-2 hover:border-primary"
                    href="/"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    className="py-2 text-lg font-medium transition-colors duration-500 hover:text-primary hover:border-b-2 hover:border-primary"
                    href="/"
                  >
                    CARS
                  </a>
                </li>
                <li>
                  <a
                    className="py-2 text-lg font-medium transition-colors duration-500 hover:text-primary hover:border-b-2 hover:border-primary"
                    href="/"
                  >
                    ABOUT
                  </a>
                </li>
                <li>
                  <a
                    className="py-2 text-lg font-medium transition-colors duration-500 hover:text-primary hover:border-b-2 hover:border-primary"
                    href="/"
                  >
                    BOOKING
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex gap-5">
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl cursor-pointer"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl cursor-pointer"
                />
              )}
              {showMenu ? (
                <HiMenuAlt1
                  className="transition-all cursor-pointer md:hidden"
                  onClick={toggleMenu}
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  className="transition-all cursor-pointer md:hidden"
                  onClick={toggleMenu}
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} />
      </nav>
    </div>
  );
}

export default Navbar;
