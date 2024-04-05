const express = require("express");
const dotenv = require("dotenv").config();
const { chats } = require("./data/data.js");

const app = express();
app.get("/", (req, res) => {
  res.send("yes it is working");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});
app.get("/api/chat/:id", (req, res) => {
  res.send(chats.find((c) => c._id === req.params.id));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
