import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1>ARTEMIO Platformio</h1>
      <ul>
        <li>
          <Link to="/courses">Home</Link>
        </li>
        <li>
          <Link to="/add-course">Add Course</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
