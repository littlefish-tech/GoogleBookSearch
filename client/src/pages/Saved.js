import React, { Component } from "react";
import Button from "../components/Button";
import Jumbotron from "../components/Jumbotron";
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
  .catch(err => console.log(err));
  console.log("test");
}
    
render() {
    return (
    
        <Container fluid>
            <Row>
            <Col size="sm-12">
              <Jumbotron>
                <h1>Books On My List</h1>
              </Jumbotron>
              <Row>
          <Col size="md-12">
          {this.state.saveBookArr.length ? (
          <List>
                {this.state.saveBookArr.map(book => {
                  return(
                  <ListItem key={book._id}>
                    <Link to={"/saved"}>
                      <strong>
                      <div>{book.title}</div>
                     <div>{book.authors}</div>
                      <div>{book.publishedDate}</div>
                      </strong>
                    </Link>
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