import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="logo">
      IMDB
    </Link>
    <ul>
      <li>
        <a
          href="https://github.com/LuisRojas92"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/luis-rojas-126819164"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
