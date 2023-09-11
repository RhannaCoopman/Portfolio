import React, { useState } from "react";
import Switcher from "./Switcher";

const Nav = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  return (
    <nav className="flex justify-between items-center w-full bg-red-100 fixed px-12 py-4">
      <h4>Logo</h4>
      <div className="flex items-center">
        <Switcher />
        <nav className="ml-20 flex sm:gap-4 items-center flex-col sm:flex-row">
          <progress max="100" value="0" className=""></progress>
          <p>My skills</p>
          <p>Projects</p>
          <p>About me</p>
          <p>Internship</p>
          <p>Contact</p>
        </nav>
      </div>
    </nav>
  );
};

export default Nav;
