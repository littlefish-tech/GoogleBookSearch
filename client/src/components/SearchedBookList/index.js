import React from "react";
import { Container, Row, Col } from "../Grid";
import { PromiseProvider } from "mongoose";


// export function SaveBtn(props) {
//   return (
//   <button className = "save-btn" role = "button">{props.children}</button>
//   )
// }

export function SaveBtn(props) {
  return (
    <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
// BookList renders a bootstrap list item
export function SearchedBookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the book api call
export function SearchedBookListItem({
  // thumbnail = "https://placehold.it/300x300",
  title,
  publishedDate,
  authors
}) 
// function handleClickSave() {
//   console.log(this)
// }
{
  
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          {/* <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col> */}
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <h5>Authors: {authors}</h5>
            <h5>Year: {publishedDate}</h5>
            {/* <div>{thumbnail}</div> */}
        {/* <SaveBtn>Save</SaveBtn> */}
          </Col>
        </Row>
      </Container>
    </li>
  );
}
