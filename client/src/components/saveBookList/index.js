import React from "react";
import { Container, Row, Col } from "../Grid";
import { PromiseProvider } from "mongoose";
import "./style.css";


const SavedBookList = (props) => {
  return (
    <div className="SavedBookList-overflow-container">
      <a className="navbar-brand btn-outline-info clickBut" onClick={() => props.handleDisplayBooks(props.id)} href="/Saved">
        Check saved reading
      </a>
    </div>
  );
}

export default SavedBookList;
