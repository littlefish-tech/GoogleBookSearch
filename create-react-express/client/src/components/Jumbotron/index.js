import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{clear: "both", paddingTop: 120, textAlign: "center", fontSize: 38 }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
