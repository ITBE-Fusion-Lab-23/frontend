import React, { useState, useEffect } from "react";
import pretzelLogo from "../images/pretzel.png";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

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
