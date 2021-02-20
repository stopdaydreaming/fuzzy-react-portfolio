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
              <a href="#">About ME</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact ME</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
