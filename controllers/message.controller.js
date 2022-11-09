const express = require("express");
const Message = require("../models/message.model");
const router = express.Router();
const twilio = require("twilio");

const client = new twilio(process.env.accountSid, process.env.authToken);

router.get("", async (req, res) => {
  try {
    const messages = await Message.find()
      .sort({ sentAt: -1 })
      .populate("userId");
    return res.status(200).send(messages);
  } catch (error) {
    return res.send(error.message);
  }
});

router.post("", async (req, res) => {
  try {
    //sending text message from twilio account

    await client.messages
      .create({
        body: req.body.text,
        to: "+918090756054", // Verified number in twilio
        from: "+1 856 386 4567", //number added in twilio from my account
      })
      .then(async (message) => {
        console.log("Message Sent", message.sid);
        const msg = await Message.create(req.body);
        return res.status(200).send(msg);
      })
      .catch((e) => {
        console.log(e.message);
        return res.status(400).send(e.message);
      });
  } catch (error) {
    return res.send(error.message);
  }
});

module.exports = router;
