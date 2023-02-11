const { Schema, model } = require("mongoose");
const ObjectId = Schema.ObjectId;

const Campaign = new Schema({
  NGO: { type: ObjectId, ref: "NGO" },
  title: String,
  image: Buffer,
  description: String,
  raised: Number,
  goal: Number,
});

module.exports = model("Campaign", Campaign);
