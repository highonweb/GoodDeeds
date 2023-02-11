const { Schema, model } = require("mongoose");

const Category = new Schema({
  name: String,
});

module.exports = model("Category", Category);
