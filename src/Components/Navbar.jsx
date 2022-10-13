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
              <span className={navOpen? 'lineTop span': 'lineTop'}></span>
              <span className={navOpen? 'lineBottom span': 'lineBottom'}></span>
            </div>
          </div>
        </div>
        <div className="nav-overlay" style={{top: navOpen? '0' : '-100%', transitionDelay: navOpen? '0s': '0s'}} ></div>
      </div>
    </section>
  );
}

export default Navbar;
