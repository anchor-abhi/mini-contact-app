const express = require("express");
const path = require("path");
require("dotenv").config();
const connect = require("./configs/db");
const messageController = require("./controllers/message.controller");
const contactController = require("./controllers/contact.controller");
const PORT = process.env.port || 5000;
const app = express();
app.use(express.json());

app.use("/message", messageController);
app.use("/contact", contactController);

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Listening at ${PORT}`);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = app;
