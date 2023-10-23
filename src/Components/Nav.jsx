import React, { useState } from "react";
import Switcher from "./Switcher";
import { Link } from "react-router-dom";


const Nav = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  return (
    <nav className="z-10 flex justify-between items-center max-w-full w-full text-dark-purple-1 rounded-sm shadow-md fixed px-12 py-4 bg-light-purple-1 dark:bg-dark-purple-1 dark:text-light-purple-1">
      <h4>Rhanna Coopman</h4>
      <div className="flex items-center">
        <Switcher />
        <nav className="hidden sm:flex ml-20 gap-4 items-center list-none">
          {/* <progress max="100" value="0" className=""></progress> */}
          {/* <p>My skills</p>
          <p>Projects</p>
          <p>About me</p>
          <p>Internship</p>
          <p>Contact</p> */}
          {/* <ul>
            <li>
              <Link activeClass="bg-light-purple-1" smooth spy to="#skills">
                My skills
              </Link>
            </li>
            <li>
              <Link activeClass="bg-light-purple-1" smooth spy to="#projects">
                Projects
              </Link>
            </li>
            <li>
              <Link activeClass="bg-light-purple-1" smooth spy to="#about">
                About me
              </Link>
            </li>
            <li>
              <Link activeClass="bg-light-purple-1" smooth spy to="#internship">
                Internship
              </Link>
            </li>
            <li>
              <Link activeClass="bg-light-purple-1" smooth spy to="contact">
                Contact
              </Link>
            </li>
          </ul> */}
        </nav>
      </div>
    </nav>
  );
};

export default Nav;
