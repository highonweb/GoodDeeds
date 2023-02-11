var express = require("express");
var router = express.Router();
const Message = require("../Models/Messages");
const Fuse = require("fuse.js");
const NGO = require("../Models/NGO");
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

router.get("/NGOsearch", async (req, res, next) => {
  const ngos = await NGO.find().select("name description logo website email");
  const options = {
    includeScore: true,
    // Search in `author` and in `tags` array
    keys: ["name", "email", "description", "website"],
  };
  const fuse = new Fuse(ngos, options);
  const result = fuse.search(req.query.q);
  return res.json(result);
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
