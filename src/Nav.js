import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <nav id="menu">
        <label for="tm" id="toggle-menu">
          Menu
          <span className="drop-icon">▾</span>
        </label>
        <input type="checkbox" id="tm" />
        <ul className="main-menu cf">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href>
              Warframe
              <span className="drop-icon">▾</span>
              <label title="Toggle Drop-down" className="drop-icon" for="sm0">
                ▾
              </label>
            </a>
            <input type="checkbox" id="sm0" />
            <ul className="sub-menu">
              <li>
                <Link to="/warframe">Warframe</Link>
              </li>
              <li>
                <a href>
                  Weapons
                  <span className="drop-icon">▸</span>
                  <label
                    title="Toggle Drop-down"
                    className="drop-icon"
                    for="sm1"
                  >
                    ▾
                  </label>
                </a>
                <input type="checkbox" id="sm1" />
                <ul class="sub-menu">
                  <li>
                    <Link to="/primary">Primary</Link>
                  </li>

                  <li>
                    <Link to="/secondary">Secondary</Link>
                  </li>

                  <li>
                    <Link to="/melee">Melee</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/sentinel">Sentinel</Link>
              </li>
              <li className="nav-item">
                <Link to="/pet">Pet</Link>
              </li>
            </ul>
          </li>
          <li>
            <a href>
              Archwing
              <span className="drop-icon">▾</span>
              <label title="Toggle Drop-down" className="drop-icon" for="sm2">
                ▾
              </label>
            </a>
            <input type="checkbox" id="sm2" />
            <ul className="sub-menu">
              <li className="nav-item">
                <Link to="/archwing">Archwing</Link>
              </li>
              <li>
                <a href>
                  Weapons
                  <span className="drop-icon">▸</span>
                  <label
                    title="Toggle Drop-down"
                    className="drop-icon"
                    for="sm3"
                  >
                    ▾
                  </label>
                </a>
                <input type="checkbox" id="sm3" />
                <ul className="sub-menu">
                  <li className="nav-item">
                    <Link to="/arch-gun">Arch Gun</Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/arch-melee">Arch Melee</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/mod">Mods</Link>
          </li>
          <li className="nav-item">
            <Link to="/quest">Quests</Link>
          </li>
          <li className="nav-item">
            <Link to="/enemy">Enemy</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
