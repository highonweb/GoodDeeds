var express = require("express");
var router = express.Router();
const Message = require("../Models/Messages");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// GET /users/profile
router.get("/profile", async (req, res, next) => {
  const user = await User.findById(req.auth).select("name email totalAmt");
  return res.json(user);
});

// POST /users/picture
router.post("/picture", async (req, res, next) => {
  const user = await User.findById(req.auth);
  user.logo = req.body.logo;
  await user.save();
  return res.status(200).json({ message: "Image uploaded Successfully" });
});

router.get("/NGOs", async (req, res, next) => {
  const ngo = await NGO.find().select("name description logo website email");
  return res.json(ngo);
});

router.get("/NGOs/search", async (req, res, next) => {
  const ngo = await NGO.find({
    name: { $regex: req.query.name, $options: "i" },
  }).select("name description logo website email");
  return res.json(ngo);
});

router.post("/SendMessageToUser", async (req, res, next) => {
  const message = new Message({
    sender: req.auth,
    receiver: req.body.receiver,
    isGroup: false,
    message: req.body.message,
    time: Date.now(),
  });

  await message.save();
  return res.json({ message: "Message sent successfully" });
});

router.get("/Messages", async (req, res) => {
  const messages = await Message.find({
    $or: [{ sender: req.auth }, { receiver: req.auth }],
  }).select("sender receiver isGroup message time");
  return res.json(messages);
});

router.get("/like", async (req, res) => {});

module.exports = router;
