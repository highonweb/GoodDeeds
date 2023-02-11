const { Schema, model } = require("mongoose");
const ObjectId = Schema.ObjectId;

const Campaign = new Schema({
  title: String,
  image: String,
  description: String,
  raised: Number,
  goal: Number,
  ngo: { type: ObjectId, ref: "NGO" },
});

module.exports = model("Campaign", Campaign);
