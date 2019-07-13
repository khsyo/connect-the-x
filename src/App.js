import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import { UserIsAuthenticated, UserIsNotAuthenticated } from "./helpers/auth";

import AppNavBar from "./components/layout/AppNavBar";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";
import JobDetail from "./components/layout/JobDetail";
import AddJob from "./components/layout/AddJob";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import css from "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppNavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/job/:id" component={JobDetail} />
            <Route
              exact
              path="/register"
              component={UserIsNotAuthenticated(Register)}
            />
            <Route
              exact
              path="/login"
              component={UserIsNotAuthenticated(Login)}
            />
            <Route exact path="/add" component={UserIsAuthenticated(AddJob)} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
