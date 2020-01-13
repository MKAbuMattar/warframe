import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <Link className="nav-logo" to="/">
        <h3>Warframe</h3>
      </Link>
      <ul className="nav-links">
        <Link className="nav-link" to="/warframe">
          <li>Frame</li>
        </Link>
        <Link className="nav-link" to="/sentinel">
          <li>Sentinel</li>
        </Link>
        <Link className="nav-link" to="/archwing">
          <li>Archwing</li>
        </Link>
        <Link className="nav-link" to="/primary">
          <li>Primary Weapons</li>
        </Link>
        <Link className="nav-link" to="/secondary">
          <li>Secondary Weapons</li>
        </Link>
        <Link className="nav-link" to="/melee">
          <li>Melee Weapons</li>
        </Link>
        <Link className="nav-link" to="/arch-gun">
          <li>Arch Gun</li>
        </Link>
        <Link className="nav-link" to="/arch-melee">
          <li>Arch Melee</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
