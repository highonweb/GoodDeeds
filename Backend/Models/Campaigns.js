const { Schema, model } = require("mongoose");
const ObjectId = Schema.ObjectId;

const Campaign = new Schema({
  NGO: { type: ObjectId, ref: "NGO" },
  title: String,
  image: Buffer,
  Description: String,
  raised: Number,
  Goal: Number,
});

module.exports = model("Campaign", Campaign);
