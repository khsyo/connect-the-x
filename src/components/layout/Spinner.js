import React from "react";
import spinner from "../spinner.gif";

function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ margin: "auto", display: "block", width: "70px" }}
      />
    </div>
  );
}

export default Spinner;
