import React from "react";

const Header = () => {
  return (
    <header>
      <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-md-7 py-4">
              <h4 class="text-white">stopdaydreaming</h4>
              <p class="text-muted">
                I re-created my developer portfolio using ReactJS and Bootstrap.
                Take a peak at some of my recent projects and learn a bit more about me.
              </p>
            </div>
            <div class="col-sm-4 offset-md-1 py-4">
              <h4 class="text-white">MENU</h4>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-white">
                    About ME
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    Contact ME
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container">
          <a href="#" class="navbar-brand d-flex align-items-center">
            <strong>stopdaydreaming</strong>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
