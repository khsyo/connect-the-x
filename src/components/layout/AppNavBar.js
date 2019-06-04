import React from "react";
import { Link } from "react-router-dom";

function AppNavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-info mb-4">
      <div className="container">
        <h3>
          <Link to="/" className="nav-brand text-light">
            CanaanJobs
          </Link>
          {"      "}
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMain"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse" id="navbarMain">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="!#" className="nav-link text-light">
                Post a job
              </a>
            </li>
            <li className="nav-item">
              <a href="!#" className="nav-link text-light">
                Find a job
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AppNavBar;
