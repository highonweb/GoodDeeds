var express = require("express");
const Campaigns = require("../Models/Campaigns");
const NGO = require("../Models/NGO");
var router = express.Router();

/* GET users listing. */
router.get("/profile", async (req, res) => {
  console.log(req.auth);
  const ngo = await NGO.findById(req.auth).select(
    "name description logo website email followers totalFundRaised amountSpent"
  );
  console.log(ngo.toObject());
  return res.json(ngo.toObject());
});

router.post("/picture", async (req, res) => {
  const ngo = await NGO.findById(req.auth);
  ngo.logo = req.body.logo;
  await ngo.save();

  return res.status(200).json({ message: "Image uploaded Successfully" });
});

router.post("/campaign", async (req, res) => {
  console.log(req.auth);
  const campaign = new Campaigns({
    ngo: req.auth,
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    raised: req.body.raised,
    goal: req.body.goal,
  });
  campaign.save();
  return res.json({ message: "Campaign created" });
});

router.get("/campaign/:id", async (req, res) => {
  let camp = await Campaigns.findById(req.params.id);
  if (camp == null) {
    return res.json({ message: "invalid campaign id" });
  }
  camp = await camp.toObject();
  return res.json(camp);
});

router.get("/mycampaigns", async (req, res) => {
  const campaigns = await Campaigns.find({ NGO: req.auth }).populate(
    "NGO",
    "name email"
  );
  return res.json(campaigns);
});

module.exports = router;
