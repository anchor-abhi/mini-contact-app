const express = require("express");
const Contact = require("../models/contact.model");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const contacts = await Contact.find();
    return res.send(contacts);
  } catch (error) {
    return res.send(error.message);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const contacts = await Contact.findOne({ _id: req.params.id });
    return res.send(contacts);
  } catch (error) {
    return res.send(error.message);
  }
});

module.exports = router;
