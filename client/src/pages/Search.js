import React, { Component } from "react";
// import Button from "../components/Button";
import MyCarousel from "../components/MyCarousel";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { SearchedBookList,SaveBtn, SearchedBookListItem } from "../components/SearchedBookList";
import { Input, TextArea, FormBtn } from "../components/Form";
// import { SearchedBookList } from "../components/SearchedBookList";
import Saved from "./Saved"
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";

class Search extends Component {
  // constructor(){
  //   super();
  //     this.
      state = {
      books: [],
      // bookSearch: "",
      title: "",
      authors: "",
      image: "https://placehold.it/300x300",
      // synopsis: "",
      publishedDate: "",
      bookLink: "",
      description: "",
      saveBookArr: []
    };
  // }
    // componentDidMount() {
    //     this.loadBooks();
    //   }

    // loadBooks = () => {
    // API.getBook()
    //     .then(res =>
    //     this.setState({ books: res.data, title: "", authors: "", publishedDate: "" })
    //     )
    //     .catch(err => console.log(err));
    // };
    
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
          console.log(this.state.books)
        }).catch(err => console.log(err));
    }
    console.log("clicked!!!!!!")
    };

    handleSaveSubmit = id => {
      console.log("saved!!!!!!")
      const book = this.state.books.find(book => book.id === id)
      console.log("this is the new book ", book)
      // this.setState({saveBookArr: [...this.state.saveBookArr, {
      //   title: book.volumeInfo.title,
      //   authors: book.volumeInfo.authors[0],
      //   publishedDate: book.volumeInfo.publishedDate
      // }]})
      // console.log(this.state.saveBookArr);
      API.saveBook({
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors[0],
        publishedDate: book.volumeInfo.publishedDate,
        // image: book.volumeInfo.imageLinks.thumbnail,
        image: !book.volumeInfo.imageLinks ? "NoImage.jpg" : book.volumeInfo.imageLinks.thumbnail,
        bookLink: book.volumeInfo.infoLink,
        description: book.volumeInfo.description
      })
      // .then(() => this.loadBooks())
      .catch(err => console.log(err));
      
    };

  

    render() {
      return (
        
        <Container fluid="md">
          <Row>
            <Col size="md-12">
              <MyCarousel />
              <form>
                <Row>
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Type a Book Title (Required)"
                />
             
                <FormBtn xs="5"
                  disabled={!(this.state.title)}
                  onClick={this.handleFormSubmit}
                >
                  Search
                </FormBtn>
                </Row>
              </form>
            </Col>
          </Row>
          
          <Row>
            <Col size="xs-12">
              {!this.state.books.length ? (
                <h1 className="text-center"></h1>
              ) : (
                  <SearchedBookList>
                    {this.state.books.map(data => {
                      return (
                        <React.Fragment key={data._id}>
                          <SearchedBookListItem
                          
                          title={data.volumeInfo.title}
                          authors={data.volumeInfo.authors}
                          publishedDate={data.volumeInfo.publishedDate}
                          // image={data.volumeInfo.imageLinks.thumbnail}
                          image={!data.volumeInfo.imageLinks ? "NoImage.jpg" : data.volumeInfo.imageLinks.thumbnail}
                          description={data.volumeInfo.description}
                          bookLink={data.volumeInfo.infoLink}
                          description={data.volumeInfo.description}

                          // thumbnail={"https://via.placeholder.com/150"}
                          
                          />    
                          <SaveBtn onClick = {() => this.handleSaveSubmit(data.id)}>
                            Save
                          </SaveBtn>
                          {/* <Saved saveBookArr={this.state.saveBookArr}></Saved>   */}
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