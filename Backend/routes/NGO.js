var express = require("express");
const NGO = require("../Models/NGO");
var router = express.Router();

/* GET users listing. */
router.get("/profile", async (req, res) => {
  console.log(req.auth);
  const ngo = await NGO.findById(req.auth).select(
    "name description website email followers totalFundRaised AmountSpent"
  );
  console.log(ngo.toObject());
  return res.json(ngo.toObject());
});

module.exports = router;
