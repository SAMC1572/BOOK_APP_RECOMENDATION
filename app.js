const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn"); // Uncomment this line

app.get("/", (req, res) => {
  res.send("Hello from backend side");
});

const port = process.env.PORT || 3000; // Default to port 3000 if PORT is not set
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
