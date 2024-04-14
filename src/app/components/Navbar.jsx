import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const navdata = [
  {
    name:"Home",
    path:"#",
  },
  {
    name:"About",
    path:"#about",
  },
  {
    name:"Projects",
    path:"#projects",
  },
  {
    name:"Contact",
    path:"#contact",
  },
]

const Navbar = () => {
  return (
    <main>
      <div className="border-b-2 flex justify-between items-center px-10 py-4 ">
        <h2 className="text-2xl sm:text-3xl font-bold">Portfolio</h2>
        <nav className="list-none font-semibold text-gray-200">
          <ul className="sm:flex hidden items-center gap-10 ">
         {navdata.map((navdata,index) => (
            <Link key={index} href={navdata.path} className="hover:text-red-500">{navdata.name}</Link>
          ))}
          </ul>
          <GiHamburgerMenu className="sm:hidden block" />
        </nav>
      </div>
    </main>
  );
};

export default Navbar;
