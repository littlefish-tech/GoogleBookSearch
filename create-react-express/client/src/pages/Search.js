import React, { Component } from "react";
// import Button from "../components/Button";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { SearchedBookList,SaveBtn, SearchedBookListItem } from "../components/SearchedBookList";
import { Input, TextArea, FormBtn } from "../components/Form";
// import { SearchedBookList } from "../components/SearchedBookList";

class Search extends Component {
    state = {
      books: [],
      bookSearch: "",
      title: "",
      authors: "",
      synopsis: "",
      publishedDate: "",
      saveBookArr: []
    };

    // componentDidMount() {
    //     this.loadBooks();
    //   }

    loadBooks = () => {
    API.getBook()
        .then(res =>
        this.setState({ books: res.data.items, title: "", authors: "", publishedDate: "" })
        )
        .catch(err => console.log(err));
    };
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        // console.log("changed")
      };
    handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      console.log(this.state.title);
      console.log('***************');
        API.searchGoogle(this.state.title)
          // ({
        // title: this.state.title,
        // author: this.state.author,
        // synopsis: this.state.synopsis
        
        // })
        .then(res => {
         // console.log(res);
          console.log(res.data.items)
          this.setState({books: res.data.items})
        }).catch(err => console.log(err));
    }
    console.log("clicked!!!!!!")
    };

    handleSaveSubmit = event => {
      console.log("saved!!!!!!")
      event.preventDefault();
      API.saveBook(
        this.state.title,
        this.state.authors,
        this.state.publishedDate
      )
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
      
    };

    render() {
      return (
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>What Books Should I Read?</h1>
              </Jumbotron>
              <form>
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
             
                <FormBtn
                  disabled={!(this.state.title)}
                  onClick={this.handleFormSubmit}
                >
                  Submit Book
                </FormBtn>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.books.length ? (
                <h1 className="text-center">No Books to Display</h1>
              ) : (
                  <SearchedBookList>
                    {this.state.books.map((data, index) => {
                      return (
                        <React.Fragment>
                          <SearchedBookListItem
                          key={index}
                          title={data.volumeInfo.title}
                          authors={data.volumeInfo.authors}
                          publishedDate = {data.volumeInfo.publishedDate}
                          // thumbnail={"https://via.placeholder.com/150"}
                          
                          />    
                          <SaveBtn onClick = {this.handleSaveSubmit}>Save</SaveBtn>  
                          </React.Fragment>     
                      ); 
                     
                    })}
                        
                  </SearchedBookList>
                  
                )}
            </Col>
          </Row>
     
        </Container>
      );
    }


    
}

export default Search;