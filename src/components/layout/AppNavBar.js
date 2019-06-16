import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

class AppNavBar extends Component {
  state = {
    isAuthenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    const { auth } = props;
    if (auth.uid) {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  }

  onLogout = e => {
    e.preventDefault();
    //handle logout
    const { email, password } = this.props.auth;
    const { firebase } = this.props;

    firebase
      .auth()
      .signOut()
      .then(signout => this.props.history.push("/"))
      .catch(error => "Something went wrong...");

    return { isAuthenticated: false };
  };

  render() {
    const { auth } = this.props;
    const { isAuthenticated } = this.state;
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
              {isAuthenticated ? (
                <ul className="navbar-nav d-flex justify-content-around">
                  <li className="nav-item text-white nav-link">{auth.email}</li>
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
                  <li className="nav-item">
                    <a
                      href="!#"
                      className="nav-link text-light"
                      role="button"
                      onClick={this.onLogout}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/login" className="nav-link text-light">
                      Login Now
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link text-light">
                      Register
                    </Link>
                  </li>
                </ul>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

AppNavBar.propTypes = {
  auth: PropTypes.object.isRequired
};

export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth
  }))
)(AppNavBar);
