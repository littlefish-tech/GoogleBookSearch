import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand btn-outline-info clickBut" href="/Saved">
        Saved Reading
      </a>
      <a className="navbar-brand btn-outline-info clickBut" href="/Search">
       Back to Search
      </a>
    </nav>
  );
}

export default Nav;
