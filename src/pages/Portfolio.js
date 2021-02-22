import React from "react";
import Project from "../components/Project/Project";

const Portfolio = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <h1 className="page-title">Projects</h1>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
