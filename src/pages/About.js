import React from "react";
import photo from '../assets/photo_01.jpg'

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <h1 className="huge-text">About</h1>

          <hr className="featurette-divider" />

          <div className="row featurette mt-5">
            <div className="col-md-12">
            <img
                className="img-thumb m-3"
                src={photo}
                alt="profile photo"
              />
            </div>

          </div>

          <div className="row featurette mb-5">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                Find me online
                <span className="text-muted m-3">
                  <br />
                  Here are a few links for contacting me.
                </span>
              </h2>
      
              <a
                href="https://github.com/stopdaydreaming"
                class="fa-icons text-light m-3"
                ><i class="fab fa-lg fa-github"></i
              ></a>&nbsp;
              <a
                href="https://www.linkedin.com/in/lisa-copeland-598404153/"
                class="fa-icons text-light m-3"
                ><i class="fab fa-lg fa-linkedin-in"></i
              ></a>&nbsp;
              <a
                href="mailto:hello@stopdaydreaming.com"
                class="fa-icons text-light m-3"
                ><i class="fas fa-lg fa-envelope-square"></i
              ></a>&nbsp;
              <a href="tel:6782354961" class="fa-icons text-light"
                ><i class="fas fa-lg fa-phone m-3"></i
              ></a>

            </div>
          </div>

          <hr className="featurette-divider" />
        </div>
      </div>
    </div>

  );
};

export default About;
