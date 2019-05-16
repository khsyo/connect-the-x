import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import AppNavBar from "./components/layout/AppNavBar";
import Job from "./components/layout/Job";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppNavBar />
          <div className="container">
            <h1>
              Job Listings <i className="fas fa-arrow-up" />
            </h1>
            <Job />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
