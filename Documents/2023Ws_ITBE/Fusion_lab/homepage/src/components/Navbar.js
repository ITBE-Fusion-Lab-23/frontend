import React, { useState, useEffect } from "react";
import pretzelLogo from "../images/pretzel.png";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav className={`${sticky ? "sticky" : ""}`}>
      <div className="nav-inner d-flex justify-content-between align-items-center">
        <div className="links">
          <a
            href="#home"
            className="logo-container d-flex flex-column align-items-center"
          >
            <img src={pretzelLogo} alt="Pretzel Logo" className="navbar-logo" />
            <span className="logo-text">Group A</span>
          </a>
        </div>
        <div className="links">
          <a href="#home" className="menu-item">
            Main
          </a>
          <a href="#introduction" className="menu-item">
            {" "}
            Introduction
          </a>
          <a href="#model-viewer" className="menu-item">
            Model Viewer
          </a>
          <a href="#vote" className="menu-item">
            Vote
          </a>
          <a href="#" className="menu-item">
            Contacts
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
