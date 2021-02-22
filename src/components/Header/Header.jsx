import React from "react";
import './Header.css';

const Header = () => {
  return (
    <>
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">stopdaydreaming</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a className="nav-link nav-menu" href="/">
              about
            </a>
            <a className="nav-link nav-menu" href="/portfolio">
              portfolio
            </a>
            <a className="nav-link nav-menu" href="/contact">
              contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
