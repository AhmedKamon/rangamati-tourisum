import React from "react";

function Navbar() {
  return (
    <section className="nav-section">
      <div className="nav_container">
        <div className="navbar">
          <div className="navbar-logo">RGT-ISM</div>
          <div className="menu-toggle">
            <div className="hamBox">
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
