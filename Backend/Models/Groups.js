const { model, Schema } = require("mongoose");

const Group = new Schema({
  name: String,
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

modules.exports = model("Group", Group);
