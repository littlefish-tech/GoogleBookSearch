import React, { Component } from "react";
import Button from "../components/Button";
import MyCarousel from "../components/MyCarousel";
// import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import { SearchedBookList,SaveBtn, SearchedBookListItem } from "../components/SearchedBookList";
import Search from "./Search"
// import { Input, TextArea, FormBtn } from "../components/Form";
// import { handleDisplayBooks } from "../components/saveBookList"; 


class Saved extends Component {
    state={
      saveBookArr: []
  }

// handleDisplayBooks = () => {
//   API.getBooks()
//   .then(res => <ChildComponent {...this.setState({ saveBookArr: res.data, title: "", authors: "", publishedDate: ""})}/>)
//   console.log(this.state.saveBookArr)
//   .catch(err => console.log(err));
//   console.log("test");
// }

componentDidMount() {
  API.getBook()
  .then(res => this.setState({ saveBookArr: res.data}))
  console.log(this.state.saveBookArr)
  // .catch(err => console.log(err));
  // console.log("test");
}
    
render() {
    return (
    
        <Container fluid>
            <Row>
            <Col size="sm-12">
             <MyCarousel />
              <Row>
          <Col size="md-12">
          {this.state.saveBookArr.length ? (
          <List>
                {this.state.saveBookArr.map(book => {
                  return(
                  <ListItem key={book._id}>
                    {/* <a href={book.bookLink}> */}
                      <strong>
                      <img src={book.image} className="bookImg"></img>
                      <div>Book Name:    {book.title}</div>
                     <div>Author:    {book.authors}</div>
                      <div>Published Year:    {book.publishedDate}</div>
                      <div>Description:  </div>
                      <div>{book.description}</div>
                      <a href={book.bookLink}> Read More</a>
                      </strong>
                    {/* </a> */}
                  </ListItem>
                  )}     
                )}
              </List>
          ):(
            <h5>No Book to display</h5>
          )}
          </Col>
          </Row>
            </Col>
            </Row>

        </Container>
      
      
    );
}



}
export default Saved;