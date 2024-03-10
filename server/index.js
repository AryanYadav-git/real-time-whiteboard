const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const httpServer = require("http").createServer(app);
const { Server } = require("socket.io");

const io = new Server(httpServer);

app.get("/", (req, res) => {
    res.send("this is mern stack realtime whiteboard");
});


io.on("connection", (socket) => {
  console.log("User connected")
});

httpServer.listen(port, () => {
    console.log("server is running");
});