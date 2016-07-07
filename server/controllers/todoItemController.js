var mongoose = require("mongoose");
var todoItem = require("../data/todoItem.js");
var _ = require("lodash");

var router = require("express").Router();
router.route("/todoItems/:id?").get(gettodoItems).post(addtodoItem).delete(deletetodoItem);

function gettodoItems(req, res) {
  todoItem.find(function (err, todoItems) {
    if (err)
      res.send(err);
    else
      res.json(todoItems);
  });
}

function addtodoItem(req, res) {
  var newTodo = new todoItem(_.extend({}, req.body));
  console.log(req.body);
  newTodo.save(function (err) {
    if (err)
      res.send(err);
    else
      res.json(newTodo);
  });
}

function deletetodoItem(req, res) {
  var id = req.params.id;
  todoItem.remove({ _id: id }, function (err, removed) {
    if (err)
      res.send(err)
    else
      res.json(removed);
  });
}

module.exports = router;
