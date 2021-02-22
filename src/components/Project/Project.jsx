import React from "react";

const Project = () => {
  return (
    <div class="col-md-6 mb-5 mt-5">
      <div class="card">
        <img
          src="https://via.placeholder.com/150"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="text-muted">Project title</h5>

          <a
            href="https://github.com/stopdaydreaming/mini-octo-burgers"
            class="text-dark"
            target="_blank"
          >
            <button class="btn btn-dark mb-2 mr-3">Source Code</button>
          </a>
          <a
            href="https://mini-octo-burgers.herokuapp.com/"
            class="text-dark"
            target="_blank"
          >
            <button class="btn btn-dark mb-2">Live Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
