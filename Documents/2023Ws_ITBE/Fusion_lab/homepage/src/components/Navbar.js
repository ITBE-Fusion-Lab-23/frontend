import React, { useState, useEffect } from "react";

import pretzelLogo from "../images/blackpretzel.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault();

    // If we're not on the home page, navigate there first
    if (window.location.pathname !== "/") {
      navigate("/");
    }

    // Wait for the navigation to complete, then scroll to the section
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <nav className={`${sticky ? "sticky" : ""}`}>
      <div className="nav-inner d-flex justify-content-between align-items-center">
        <div className="links">
          <a
            href="#home"
            onClick={(e) => handleNavLinkClick(e, "home")}
            className="logo-container d-flex flex-column align-items-center"
          >
            <img src={pretzelLogo} alt="Pretzel Logo" className="navbar-logo" />
            <span className="logo-text">Group A</span>
          </a>
        </div>
        <div className="links">
          <a
            href="#home"
            onClick={(e) => handleNavLinkClick(e, "home")}
            className="menu-item"
          >
            Main
          </a>
          <a
            href="#introduction"
            onClick={(e) => handleNavLinkClick(e, "introduction")}
            className="menu-item"
          >
            Introduction
          </a>
          <a
            href="#model-viewer"
            onClick={(e) => handleNavLinkClick(e, "model-viewer")}
            className="menu-item"
          >
            Model Viewer
          </a>
          <a
            href="#vote"
            onClick={(e) => handleNavLinkClick(e, "vote")}
            className="menu-item"
          >
            Vote
          </a>
          <NavLink to="/about-us" className="menu-item">
            About us
          </NavLink>
          {isAuthenticated ? (
            <button
              className="menu-item"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </button>
          ) : (
            <button className="menu-item" onClick={() => loginWithRedirect()}>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
