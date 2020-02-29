const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAjRJsbePuVu0Qax_C6kfO0C1soknYdkPo", { params: req.query })
    .then(results => res.json(results.data))
    .catch(err => res.status(422).json(err));
});

module.exports = router;