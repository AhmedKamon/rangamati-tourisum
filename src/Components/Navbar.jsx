import React from "react";
import { useState } from "react";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <section className="nav-section">
      <div className="nav_container">
        <div className="navbar">
          <div className="navbar-logo">RGT-ISM</div>
          <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
              <span className={navOpen ? "lineTop span" : "lineTop"}></span>
              <span
                className={navOpen ? "lineBottom span" : "lineBottom"}
              ></span>
            </div>
          </div>
        </div>
        <div
          className="nav-overlay"
          style={{
            top: navOpen ? "0" : "-150%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          {/*//TODO: create links  */}
          <ul className="nav-links">
            <li className="nav-item">
              <a href="/"
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "0.8s" : "0s",
              }}
              onClick={() => setNavOpen(!navOpen)}>
                Home
              </a>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <a
                href="/"
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.9s" : "0s",
                }}
                onClick={() => setNavOpen(!navOpen)}
              >
                About
              </a>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <a href="/"
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "1s" : "0s",
              }}
              onClick={() => setNavOpen(!navOpen)}>
                Booking
              </a>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <a href="/" 
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "1.1s" : "0s",
              }}
              onClick={() => setNavOpen(!navOpen)}>
                Locations
              </a>
              <div className="nav-item-wrapper"></div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
