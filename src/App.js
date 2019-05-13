import React from "react";
//import { Link } from react-dom-router;
import AppNavBar from "./components/layout/AppNavBar";
import Job from "./components/layout/Job";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <AppNavBar />
        <div className="container">
          <h1>
            Job Listings <i className="fas fa-arrow-up" />
          </h1>
          <Job />
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
