const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/api/contacts", (req, res) => {
  res.send("heyy juish ,how are You beautiful");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});
