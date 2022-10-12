import React from "react";
import { useState } from "react";

function Navbar() {
  const [navOpen,setNavOpen] = useState(false)
  return (

    <section className="nav-section">
      <div className="nav_container">
        <div className="navbar">
          <div className="navbar-logo">RGT-ISM</div>
          <div className="menu-toggle" onClick={()=> setNavOpen(!navOpen)}>
            <div className={navOpen ? 'hamBox hamBoxOpen': 'hamBox'}>
              <span className="lineTop"></span>
              <span className="lineBottom"></span>
            </div>
          </div>
        </div>
        <div className="nav-overlay"></div>
      </div>
    </section>
  );
}

export default Navbar;
