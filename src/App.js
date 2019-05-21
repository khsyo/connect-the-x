import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import AppNavBar from "./components/layout/AppNavBar";
import Job from "./components/layout/Job";
import JobDetail from "./components/layout/JobDetail";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppNavBar />
          <Switch>
            <Route exact path="/" component={Job} />
            <Route exact path="/job/:id" component={JobDetail} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
