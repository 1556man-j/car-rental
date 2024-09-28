import React from "react";
import { FaUserCircle } from "react-icons/fa";

function ResponsiveMenu({ showMenu }) {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-full"
      } fixed top-0 z-50 text-black bg-white dark:bg-gray-900 dark:text-white w-[75%] h-[100%] shadow-md md:hidden rounded-r-xl flex-col justify-between px-8 pt-16 pb-7 transition-all duration-300 flex`}
    >
      <div className="card">
        <div className="flex gap-4 pb-10">
          <FaUserCircle size={50} />
          <div className="text-left">
            <p>Hello User</p>
            <p>Premium user</p>
          </div>
        </div>
        <div className="text-xl text-left">
          <ul className="space-y-5 uppercase">
            <li className="cursor-pointer">home</li>
            <li className="cursor-pointer">cars</li>
            <li className="cursor-pointer">about</li>
            <li className="cursor-pointer">booking</li>
          </ul>
        </div>
      </div>
      <div>
        <p>
          Made with ❤{" "}
          <a href="http://www.linkedin.com/in/awosoji-emmanuel-9407222b8">
            by Man J{" "}
          </a>
          @2024
        </p>
      </div>
    </div>
  );
}

export default ResponsiveMenu;
