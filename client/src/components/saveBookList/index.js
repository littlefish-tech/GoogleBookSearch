import React from "react";
import { Container, Row, Col } from "../Grid";
import { PromiseProvider } from "mongoose";
import "./style.css";


const SavedBookList = (props) => {
  return (
    <div className="SavedBook">
      <a className="navbar-brand btn-outline-info clickBut" onClick={() => props.handleDisplayBooks(props.id)} href="/Saved" />
    </div>
  );
}

export default SavedBookList;
