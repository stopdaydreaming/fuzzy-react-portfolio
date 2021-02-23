import React from "react";

const Project = (props) => {
  return (
    <div className="col-md-6 mb-5 mt-5">
      <div className="card">
        <img
          src={props.thumbnail}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="text-muted">{props.title}</h5>

          <a
            href={props.source}
            className="text-dark"
            target="_blank"
          >
            <button className="btn btn-dark mb-2 mr-3">Source Code</button>
          </a>
          <a
            href={props.demo}
            className="text-dark"
            target="_blank"
          >
            <button className="btn btn-dark mb-2">Live Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
