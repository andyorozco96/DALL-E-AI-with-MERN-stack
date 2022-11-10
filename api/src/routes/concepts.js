const express = require("express");
const router = express.Router();
const model = require("../models/Concept.js");

router.post("/", async (req, res) => {
  try {
    const user = await model.save(req.body);
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await model.getAll();
    res.json(result);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
