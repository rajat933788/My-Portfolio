import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="container mx-auto md:flex justify-between items-center py-4 px-6 bg-white/10 backdrop-blur-md shadow-lg text-white fixed top-0 left-0 right-0 z-50"
      style={{
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)", 
      }}
    >
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xl font-bold">Rajat Bagh</h1>
        
        {/* Hamburger Icon */}
        <div onClick={toggleClass} className="cursor-pointer md:hidden">
          <svg
            className="stroke-white"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`${
          !isOpen ? "hidden" : "block"
        } md:flex md:items-center md:space-x-8 text-center transition-all duration-300`}
      >
        <ul className="font-medium md:flex items-center space-y-4 md:space-y-0 md:space-x-6">
          <li>
            <NavLink
              to="/"
              onClick={toggleClass}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={toggleClass}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technologies"
              onClick={toggleClass}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={toggleClass}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={toggleClass}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
