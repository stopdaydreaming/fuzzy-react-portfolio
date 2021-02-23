import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">stopdaydreaming</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <Link className="nav-link nav-menu" to="/">
              home
            </Link>
            <Link className="nav-link nav-menu" to="/about">
              about
            </Link>
            <Link className="nav-link nav-menu" to="/portfolio">
              projects
            </Link>
            <Link className="nav-link nav-menu" to="/contact">
              contact
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
