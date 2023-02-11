const { Schema, model } = require("mongoose");
const ObjectId = Schema.ObjectId;

const User = new Schema({
  email: String,
  name: String,
  password: String,
  following: [{ type: ObjectId, ref: "NGO" }],
  totalAmt: { type: Number, default: 0 },
});

module.exports = model("User", User);
