import React from "react";
import { Container, Row, Col } from "../Grid";
import { PromiseProvider } from "mongoose";
import "./style.css";
import Card from 'react-bootstrap/Card'
// export function SaveBtn(props) {
//   return (
//   <button className = "save-btn" role = "button">{props.children}</button>
//   )
// }

export function SaveBtn(props) {
  return (
    <button {...props} className="btn btn-success saveBtnName">
      {props.children}
    </button>
  );
}
// BookList renders a bootstrap list item
export function SearchedBookList({ children }) {
  return <ul className="searchBookDisplay" >{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the book api call
export function SearchedBookListItem({
  // thumbnail = "https://placehold.it/300x300",
  image,
  title,
  publishedDate,
  authors,
  bookLink,
  description
})
// function handleClickSave() {
//   console.log(this)
// }
{
  
  return (
    <Card>
      <Container>
        <Row>
          {/* <Col size="xs-4 sm-2"> */}
          <Col size="md-12">
            <img className="bookDetail" src={image} className="bookImg"></img>
            <h5 className="bookDetail">Book Name:  {title}</h5>
            <h5 className="bookDetail">Authors:  {authors}</h5>
            <h5 className="bookDetail">Year:  {publishedDate}</h5>
            <h5 className="bookDetail"><div>Description: </div>
            <div>{description}</div></h5>
            <a href={bookLink} className="bookDetail"> Read More</a>
            {/* <div>{thumbnail}</div> */}
        {/* <SaveBtn>Save</SaveBtn> */}
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
