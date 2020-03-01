import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBooks: function(query) {
    return axios.get("/api/search", { params: { q: query } });
  },
  saveBook: function(bookData) {
    return axios.post("/api/search", bookData);
  }, 
  deleteBook: function(id) {
    return axios.delete("/api/search/" + id);
  },
};

