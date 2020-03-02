import React, { Component } from "react";
// import Button from "../components/Button";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { SearchedBookList } from "../components/SearchedBookList";

class Search extends Component {
    state = {
      books: [],
      title: "",
      author: "",
      synopsis: ""
    };

    componentDidMount() {
        this.loadBooks();
      }

    loadBooks = () => {
    API.getBooks()
        .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
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
    if (this.state.title && this.state.author) {
        API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
        })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
    console.log("clicked!!!!!!")
    };

    // handleSearch = event => {

    // }

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
                <Input
                  value={this.state.author}
                  onChange={this.handleInputChange}
                  name="author"
                  placeholder="Author (required)"
                />
                <TextArea
                  value={this.state.synopsis}
                  onChange={this.handleInputChange}
                  name="synopsis"
                  placeholder="Synopsis (Optional)"
                />
                <FormBtn
                  disabled={!(this.state.author && this.state.title)}
                  onClick={this.handleFormSubmit}
                >
                  Submit Book
                </FormBtn>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.recipes.length ? (
                <h1 className="text-center">No Recipes to Display</h1>
              ) : (
                  <SearchedBookList>
                    {this.state.books.map(data => {
                      return (
                        <SearchedBookListItem
                          key={data.book.label}
                          title={data.book.label}
                          href={data.book.url}
                          thumbnail={data.recipe.image}
                        />
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