import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <main>
      <div className="border-b-2 flex justify-between items-center px-10 py-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Portfolio</h2>
        <nav className="list-none font-semibold text-gray-200">
          <ul className="sm:flex hidden items-center gap-10  ">
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <GiHamburgerMenu className="sm:hidden block" />
        </nav>
      </div>
    </main>
  );
};

export default Navbar;
