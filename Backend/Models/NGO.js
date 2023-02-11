const { Schema, model } = require("mongoose");
const ObjectId = Schema.ObjectId;

const NGO = new Schema({
  name: String,
  email: String,
  location: {
    lat: String,
    long: String,
  },
  tags: [String],
  type: String,
  logo: String,
  description: String,
  amountSpent: Number,
  password: String,
  totalFundRaised: Number,
  campaigns: [{ type: ObjectId, ref: "Campaign" }],
  donors: [{ type: ObjectId, ref: "User" }],
  followers: [{ type: ObjectId, ref: "User" }],
});

module.exports = model("NGO", NGO);
