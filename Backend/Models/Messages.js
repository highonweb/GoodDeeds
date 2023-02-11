const { Schema, model } = require("mongoose");

const Message = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: "User" },
  group: { type: Schema.Types.ObjectId, ref: "Group" },
  receiver: { type: Schema.Types.ObjectId, ref: "User" },
  isGroup: Boolean,
  message: String,
  time: Date,
});

module.exports = model("Message", Message);
