const axios = require("axios");
const router = require("express").Router();
const booksController = require("../../controllers/booksController");
console.log('***************');

router.get("/google/:title", (req, res) => {
  console.log(req.params.title);
  console.log('***************');
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.title)
    .then(results => res.json(results.data))
    .catch(err => res.status(422).json(err));
})

router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/id/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);


module.exports = router;