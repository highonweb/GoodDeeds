const { Schema, model } = require("mongoose");
const ObjectId = Schema.ObjectId;

const User = new Schema({
  emailId: String,
  name: String,
  password: String,
  following: [{ type: ObjectId, ref: "NGO" }],
  totalAmt: Number,
});

module.exports = model("User", User);
