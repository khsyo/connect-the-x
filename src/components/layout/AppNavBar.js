import React from "react";
//import { Link } from react-dom-router;

function AppNavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-info mb-4">
      <div className="container">
        <h3>
          <a className="nav-brand text-light" href="!#">
            ConnectX
          </a>
          {"      "}
          <i className="fas fa-grip-lines-vertical text-light" />
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
