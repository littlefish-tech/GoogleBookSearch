const axios = require("axios");
const router = require("express").Router();
const booksController = require("../../controllers/booksController");


router.get("/books", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAjRJsbePuVu0Qax_C6kfO0C1soknYdkPo", { params: req.query })
    .then(results => res.json(results.data))
    .catch(err => res.status(422).json(err));
    console.log(res)
})

router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);


module.exports = router;