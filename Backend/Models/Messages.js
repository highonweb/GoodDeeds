const { Schema, model } = require("mongoose");

const Message = new Schema({
  sender: { Type: Schema.Types.ObjectId, ref: "User" },
  group: { Type: Schema.Types.ObjectId, ref: "Group" },
  receiver: { Type: Schema.Types.ObjectId, ref: "User" },
  isGroup: Boolean,
  message: String,
  time: Date,
});

module.exports = model("Message", Message);
