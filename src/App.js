import React from "react";
//import { Link } from react-dom-router;
import AppNavBar from "./components/layout/AppNavBar";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <AppNavBar />
        <h1>
          Building the app <i className="fas fa-arrow-up" />
        </h1>
      </React.Fragment>
    </div>
  );
}

export default App;
