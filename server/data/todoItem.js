var mongoose = require("mongoose");
var todoItemSchema = mongoose.Schema({
  content: String,
  style: String
});

module.exports = mongoose.model("todoItem", todoItemSchema);
