const express = require("express");
const routes = require("./routes");
// const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://<googleBookSearch>:<googleBookSearch1>@ds141937.mlab.com:41937/heroku_8zdgw1mx");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



// mongodb://localhost/googlereadinglist