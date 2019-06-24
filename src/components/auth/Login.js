import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { firebaseConnect } from "react-redux-firebase";
import { notifyUser } from "../actions/notifyActions";
//import Alert from "../layout/Alert";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  // componentWillMount() {
  //   const { allowRegistration } = this.props.settings;

  //   // Check if allow registration in settings
  //   if (!allowRegistration) {
  //     this.props.history.push("/");
  //   }
  // }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const { firebase, notifyUser } = this.props;

    // Register with firebase
    firebase
      .login({ email, password })
      .then(login => this.props.history.push("/"))
      .catch(err => notifyUser("Incorrect login credentials", "error"));
  };

  handleForgotPassword = e => {
    e.preventDefault();
  };

  render() {
    const { message, messageType } = this.props.notify;
    return (
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card">
            <div className="card-body">
              {message ? (
                <h6 className="text-danger">{`${messageType}: ${message}`}</h6>
              ) : null}
              <h1 className="text-center pb-4 pt-3">
                <span className="text-info">
                  <i className="fas fa-user-ninja" /> Login Now
                </span>
              </h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    required
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-block btn-info"
                />
              </form>
              <div className="mt-2">
                <span>
                  Don't have account?{" "}
                  <Link to="/register"> Register now! </Link>
                </span>
                <br />
                <span>
                  <a href="#!" onClick={this.handleForgotPassword}>
                    Forgot password...
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  firebase: PropTypes.object.isRequired,
  notify: PropTypes.object.isRequired,
  notifyUser: PropTypes.func.isRequired
  //settings: PropTypes.object.isRequired
};

export default compose(
  firebaseConnect(),
  connect(
    (state, props) => ({
      notify: state.notify,
      settings: state.settings
    }),
    { notifyUser }
  )
)(Login);
