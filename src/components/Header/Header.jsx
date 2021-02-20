import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="indigo lighten-2">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            stopdaydreaming
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
