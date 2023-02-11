const express = require("express");
const router = express.Router();
const NGO = require("../Models/NGO");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/Users");
/* GET home page. */

router.post("/", async (req, res) => {
  try {
    const isNGO = req.body.isNGO;

    if (isNGO) {
      const ngo = await NGO.findOne({ email: req.body.email });
      if (ngo == null) return res.json(404, { error: "No such NGO found" });

      if (!(await bcrypt.compare(req.body.password, ngo.password))) {
        return res.json(403, { message: "Incorrect Password" });
      }
      return res.json({
        message: "NGO created",
        jwt: jwt.sign({ id: ngo.id, isNGO: true }, process.env.secret, {
          algorithm: "HS256",
        }),
      });
    } else {
      const user = await User.findOne({ email: req.body.email });
      if (user == null) return res.json(404, { error: "No such User found" });

      if (!(await bcrypt.compare(req.body.password, user.password))) {
        return res.json(403, { message: "Incorrect Password" });
      }
      return res.json({
        message: "User created",
        jwt: jwt.sign({ id: user.id, isNGO: false }, process.env.secret, {
          algorithm: "HS256",
        }),
      });
    }
  } catch (error) {}
});
module.exports = router;
