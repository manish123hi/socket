const cluster = require("cluster");
const os = require("os");
const express = require("express");

const a = os.cpus().length;
if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < a; i++) {
    cluster.fork();
  }
} else {
  const app = express();

  const port = 5000;

  app.get("/", (req, res) => {
    return res.json(`the pid of the running is ${process.pid}`);
  });

  app.listen(port, () => console.log(`the port is running at ${port}`));
}
