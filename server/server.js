var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var cors = require("cors");

var todoItem = require("./data/todoItem.js");

// use it before all route definitions

//controllers
var todoItemController = require("./controllers/todoItemController");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json());
app.use(cors({origin: 'http://127.0.0.1:8080'}));
app.use("/api", todoItemController);

app.listen(7777, function () {
  console.log("Started listening on port", 7777);
});

// Connect to mongodb database
mongoose.connect("mongodb://localhost/todoitemfinder");
var db = mongoose.connection;
