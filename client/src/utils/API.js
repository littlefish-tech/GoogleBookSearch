import axios from "axios";

export default {
  searchGoogle: function(bookTitle) {
    console.log("YOYOYOYO in google")
    return axios.get("/api/books/google/" + bookTitle );
  },

  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },

  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }, 
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
};

