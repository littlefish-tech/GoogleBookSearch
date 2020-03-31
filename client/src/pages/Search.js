import React, { Component } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import Button from "../components/Button";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
import { SearchedBookList,SaveBtn, SearchedBookListItem } from "../components/SearchedBookList";
import { Input, TextArea, FormBtn } from "../components/Form";
// import { SearchedBookList } from "../components/SearchedBookList";
import Saved from "./Saved"
import { List } from "../components/List";
import { Link } from "react-router-dom";
import IconTabs from "../components/Nav";
import CarouselCard from "../components/Carousel";
import ListItem from "../components/List/ListItem"

class Search extends Component {
      state = {
      books: [],
      title: "",
      authors: "",
      image: "https://placehold.it/300x300",
      publishedDate: "",
      bookLink: "",
      description: "",
      saveBookArr: []
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      console.log(this.state.title);
      console.log('***************');
        API.searchGoogle(this.state.title)
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

render(){
  return(

    // <React.Fragment>
    //   <CssBaseline />
    //   <Container maxWidth="sm">
        <CarouselCard>

        </CarouselCard>
        // <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
    //   </Container>
    // </React.Fragment>

  )
}


    
}

export default Search;

    // render() {
    //   return (
    //     <Container fluid>
    //       <Row>
    //         <Col size="md-12">
    //           <Jumbotron>
    //             <h1>What Books Should I Read?</h1>
    //           </Jumbotron>
    //           <form>
    //             <Input
    //               value={this.state.title}
    //               onChange={this.handleInputChange}
    //               name="title"
    //               placeholder="Title (required)"
    //             />
             
    //             <FormBtn
    //               disabled={!(this.state.title)}
    //               onClick={this.handleFormSubmit}
    //             >
    //               Submit Book
    //             </FormBtn>
    //           </form>
    //         </Col>
    //       </Row>
          
    //       <Row>
    //         <Col size="xs-12">
    //           {!this.state.books.length ? (
    //             <h1 className="text-center">No Books to Display</h1>
    //           ) : (
    //               <SearchedBookList>
    //                 {this.state.books.map(data => {
    //                   return (
    //                     <React.Fragment key={data._id}>
    //                       <SearchedBookListItem
                          
    //                       title={data.volumeInfo.title}
    //                       authors={data.volumeInfo.authors}
    //                       publishedDate={data.volumeInfo.publishedDate}
    //                       // image={data.volumeInfo.imageLinks.thumbnail}
    //                       image={!data.volumeInfo.imageLinks ? "NoImage.jpg" : data.volumeInfo.imageLinks.thumbnail}
    //                       description={data.volumeInfo.description}
    //                       bookLink={data.volumeInfo.infoLink}
    //                       description={data.volumeInfo.description}

    //                       // thumbnail={"https://via.placeholder.com/150"}
                          
    //                       />    
    //                       <SaveBtn onClick = {() => this.handleSaveSubmit(data.id)}>
    //                         Save
    //                       </SaveBtn>
    //                       {/* <Saved saveBookArr={this.state.saveBookArr}></Saved>   */}
    //                       </React.Fragment>     
    //                   ); 
                     
    //                 })}
    //               </SearchedBookList>
                  
    //             )}
    //         </Col>
    //       </Row>
       
    //     </Container>
  
    //   );
    // }