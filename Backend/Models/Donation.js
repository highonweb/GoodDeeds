const { Schema, model } = require("mongoose");

const Donation = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  campaign: { type: Schema.Types.ObjectId, ref: "Campaign" },
  amount: Number,
  date: Date,
});

module.exports = model("Donation", Donation);
