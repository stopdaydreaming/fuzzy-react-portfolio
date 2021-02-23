import React from "react";
import Project from "../components/Project/Project";

import weather from "../assets/weather-dashboard.png";
import planner from "../assets/day-planner.png";
import quiz from "../assets/coding-quiz.png";
import generator from "../assets/password-generator.png";
import profile from "../assets/team-profile.jpg";
import burger from "../assets/eat-da-burger.png";

const Portfolio = () => {
  const projects = [
    {
      thumbnail: weather,
      title: "Weather Planner",
      source: "https://github.com/stopdaydreaming/unpredictable-weather-dashboard",
      demo: "https://stopdaydreaming.github.io/unpredictable-weather-dashboard/"
    },
    {
      thumbnail: planner,
      title: "Day Planner",
      source: "https://github.com/stopdaydreaming/bossgirl-day-planner",
      demo: "https://stopdaydreaming.github.io/bossgirl-day-planner/"
    },
    {
      thumbnail: quiz,
      title: "Coding Quiz",
      source: "https://github.com/stopdaydreaming/super-coding-quiz",
      demo: "https://stopdaydreaming.github.io/super-coding-quiz/"
    },
    {
      thumbnail: generator,
      title: "Password Generator",
      source: "https://github.com/stopdaydreaming/password-generator",
      demo: "https://stopdaydreaming.github.io/password-generator/"
    },
    {
      thumbnail: profile,
      title: "Team Profile Generator",
      source: "https://github.com/stopdaydreaming/team-profile-generator",
      demo: "https://youtu.be/rpbxTjIoo1c"
    },
    {
      thumbnail: burger,
      title: "Eat-da-Burger",
      source: "https://github.com/stopdaydreaming/mini-octo-burgers",
      demo: "https://mini-octo-burgers.herokuapp.com/"
    }
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <h1 className="page-title">Projects</h1>
          <div className="row">
            {projects.map((project, index) => {
              return <Project {...project} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
