const fs = require("fs");
const express = require("express");

const app = express();

const port = 5000;

app.get("/", (req, res) => {
  return res.json(`the pid of the running is ${process.pid}`);
});

app.listen(port, () => console.log(`the port is running at ${port}`));
