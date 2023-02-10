const express = require("express");
const router = express.Router();
const NGO = require("../Models/NGO");
const bcrypt = require("bcrypt");
/* GET home page. */

router.post("/NGO", async (req, res) => {
  try {
    const ngo = new NGO({
      name: req.body.name,
      email: req.body.email,
      description: req.body.description,
    }); // Create a new NGO object

    ngo.password = await bcrypt.hash(req.body.password, 10);
    await ngo.save();
    return res.json({ message: "NGO created" });
  } catch (error) {
    return res.json(500, { message: "Internal Server Error" });
  }
});

module.exports = router;
