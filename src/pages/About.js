import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <h1 className="huge-text">PORTFOLIO</h1>
          <h2>Lisa Copeland: UI Engineer</h2>

          <hr className="featurette-divider" />

          <div className="row featurette mt-5">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                FrontEnd Developer{" "}
                <span className="text-muted">
                  <br />I design and develop easy to use, user-friendly,
                  optimized and responsive websites and applications
                </span>
              </h2>
              <p className="lead">
                I have hands-on experience efficiently coding websites and
                applications using modern HTML, CSS, and JavaScript.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="img-thumb"
                src="../assets/photo_01.jpg"
                alt="profile photo"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-6 order-md-2">
              <h2 className="featurette-heading">
                Full Stack Developer{" "}
                <span className="text-muted">
                  <br />
                  Georgia Tech Bootcamp
                </span>
              </h2>
              <p className="lead">
                I am currently attending the Georgia Tech Fullstack Bootcamp,
                where I will earn a certificate in full stack development,
                specifically the MERN stack.
              </p>
            </div>
            <div className="col-md-6 order-md-1">
              <img
                className="img-thumb"
                src="../assets/photo_02.jpg"
                alt="profile photo"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette mb-5">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                Soft Skills
                <span className="text-muted">
                  <br />
                  Team Player and life long learner
                </span>
              </h2>
              <p className="lead">
                I have excellent verbal and written communication, time
                management with attention to detail skills. A creative with the
                ability to work in high-pressure work environments and meet
                tight deadlines. I also enjoy collaboration.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="img-thumb"
                src="../assets/photo_03.jpg"
                alt="profile photo"
              />
            </div>
          </div>

          <hr className="featurette-divider" />
        </div>
      </div>
    </div>
  );
};

export default About;
