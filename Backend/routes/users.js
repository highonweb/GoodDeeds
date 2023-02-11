var express = require("express");
var router = express.Router();
const Message = require("../Models/Messages");
const Fuse = require("fuse.js");
const NGO = require("../Models/NGO");
const User = require("../Models/Users");
const Campaigns = require("../Models/Campaigns");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// get all the campaigns of the NGOs followed by the user
router.get("/campaigns", async (req, res) => {
  const user = await User.findById(req.auth).select("following");
  console.log(user);
  const campaigns = await Campaigns.find({
    NGO: { $in: user.following },
  }).select("title description raised goal NGO");
  return res.json(campaigns);
});

// when user clicks on donate button on the campaign page

router.post("/donate", async (req, res) => {
  const user = await User.findById(req.auth);
  const campaign = await Campaigns.findById(req.body.campaign);
  const ngo = await NGO.findById(campaign.NGO);
  const donation = new Donation({
    user: req.auth,
    campaign: req.body.campaign,
    amount: req.body.amount,
    date: Date.now(),
  });
  await donation.save();
  user.totalAmt += req.body.amount;
  ngo.totalFundRaised += req.body.amount;
  campaign.raised += req.body.amount;
  await user.save();
  await ngo.save();
  await campaign.save();
  return res.json({ message: "Donation successful" });
});

// GET /users/profile
router.get("/profile", async (req, res, next) => {
  const user = await User.findById(req.auth).select("name email totalAmt");
  return res.json(user);
});

router.get("/NGO", async (req, res, next) => {
  const ngo = await NGO.findById(req.query.id)
    .select(
      "name description logo website email donors totalFundRaised amountSpent followers"
    )
    .populate("donors", "name")
    .populate("Campaign", "title description raised goal");
  ngo.followersCount = ngo.followers.length;

  return res.json(ngo);
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
    keys: ["name", "email", "description"],
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

// get all the groups that user belongs to
router.get("/groups", async (req, res) => {
  const groups = await Group.find({ members: req.auth }).select("id name");
  return res.json(groups);
});

// get request for a follow button NGO
router.post("/follow", async (req, res) => {
  const user = await User.findById(req.auth);
  user.following.push(req.body.id);
  await user.save();
  return res.json({ message: "Followed" });
});

// get all the group messages
router.get("/groupMessages", async (req, res) => {
  const messages = await Message.find({
    group: req.query.id,
  })
    .select("sender receiver message time")
    .sort({ time: -1 });
  return res.json(messages);
});
router.post("/like", async (req, res) => {
  const ngo = await NGO.findById(req.body.id);
  if (ngo.likes.includes(req.auth)) {
    ngo.likes = ngo.likes.filter((id) => id != req.auth);
    ngo.noOfLikes -= 1;
    await ngo.save();
    return res.json({ message: "unliked" });
  } else {
    ngo.likes.push(req.auth);
    ngo.noOfLikes += 1;
    await ngo.save();
  }
  console.log(ngo.noOfLikes);

  return res.json({ message: "liked" });
});

// get the number of likes
router.get("/likes", async (req, res) => {
  const ngo = await NGO.findById(req.query.id);
  return res.json({ likes: ngo.noOfLikes });
});

module.exports = router;
