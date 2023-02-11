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
  noOfLikes: { type: Number, default: 0 },
  likes: [{ type: ObjectId, ref: "User" }],
  type: String,
  website: String,
  logo: String,
  description: String,
  amountSpent: Number,
  password: String,
  totalFundRaised: { type: Number, Default: 0 },
  campaigns: [{ type: ObjectId, ref: "Campaign" }],
  donors: [{ type: ObjectId, ref: "User" }],
  followers: [{ type: ObjectId, ref: "User" }],
});

module.exports = model("NGO", NGO);
