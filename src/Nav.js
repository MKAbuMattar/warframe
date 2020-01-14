import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="header">
      <nav>
        <ul className="nav">
          <li className="nav-item slam-left logo">
            <Link to="/">Warframe</Link>
          </li>

          <li className="nav-item">
            <Link to="/warframe">Frame</Link>
          </li>

          <li className="nav-item">
            <Link to="/primary">Primary Weapons</Link>
          </li>

          <li className="nav-item">
            <Link to="/secondary">Secondary Weapons</Link>
          </li>

          <li className="nav-item">
            <Link to="/melee">Melee Weapons</Link>
          </li>

          <li className="nav-item">
            <Link to="/arch-gun">Arch Gun</Link>
          </li>

          <li className="nav-item">
            <Link to="/sentinel">Sentinel</Link>
          </li>

          <li className="nav-item">
            <Link to="/archwing">Archwing</Link>
          </li>

          <li className="nav-item">
            <Link to="/arch-melee">Arch Melee</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
