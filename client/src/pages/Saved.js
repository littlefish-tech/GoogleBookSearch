import React, { Component } from "react";
import Button from "../components/DeleteBtn";
import MyCarousel from "../components/MyCarousel";
// import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import { SearchedBookList,SaveBtn, SearchedBookListItem } from "../components/SearchedBookList";
import Search from "./Search"
import DeleteBtn from "../components/DeleteBtn";
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
  this.loadBooks();
}

loadBooks = () => {
  API.getBook()
  .then(res => this.setState({ saveBookArr: res.data}))
}

deleteBookBtn = id => {
  API.deleteBook(id)
  .then(res => this.loadBooks())
  .catch(err => console.log(err))
}

render() {
  const styleNoBook ={
    paddingTop: 30,
    marginLeft: "40%",
    fontSize: 16,
    color: "#028c6a"
  }
    return (
     
        <Container fluid>
            <Row>
            <Col size="md-12">
             <MyCarousel />
              <Row>
          <Col size="md-12">
          {this.state.saveBookArr.length ? (
          <List>
                {this.state.saveBookArr.map(book => {
                  return(
                  <ListItem key={book._id}>
                      <strong>
                      <img className="bookDetail" src={book.image} className="bookImg"></img>
                      <div className="bookDetail">Book Name:    {book.title}</div>
                     <div className="bookDetail">Author:    {book.authors}</div>
                      <div className="bookDetail">Published Year:    {book.publishedDate}</div>
                      <div className="bookDetail">Description:  </div>
                      <div className="bookDetail">{book.description}</div>
                      <a href={book.bookLink} className="bookDetail"> Read More</a>
                      <div><DeleteBtn onClick={() => this.deleteBookBtn(book._id)} /></div>
                      </strong>          
                  </ListItem>
                  )}     
                )}
              </List>
          ):(
            <p className="NoBook" style={styleNoBook}>No Book to display</p>
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