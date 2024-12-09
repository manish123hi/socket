const http = require("http");
const express = require("express");
const path = require("path");
const app = express();
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);
const PORT = 4000;
// const io = require("socket.io")(server, {
//   cors: {
//     origin: "http://localhost:4000", // Update with your frontend's URL
//     methods: ["GET", "POST"],
//   },
// });

app.use(express.static(path.resolve("./public")));

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("user-message", (msg) => {
    io.emit("message", msg); // Should log the incoming message
  });
});

app.get("/", (req, res) => {
  return res.render("./public/index.js");
});

server.listen(PORT, () => {
  console.log(`this port is running at ${PORT}`);
});
