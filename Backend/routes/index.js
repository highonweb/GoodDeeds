var express = require("express");
var router = express.Router();
const Category = require("../Models/Categories");
// list all categories
router.get("/categories", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

router.use("/signin", require("./signin"));
router.use("/signup", require("./signup"));

module.exports = router;
