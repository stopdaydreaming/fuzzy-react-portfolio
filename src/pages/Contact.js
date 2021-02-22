import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <h1>Contact Page</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="name"
                className="form-control"
                id="fullName"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label" autoComplete="current-password">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-outline-light">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
