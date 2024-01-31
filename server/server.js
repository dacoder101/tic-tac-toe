const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const cors = require("cors");
app.use(cors());

const SOCKET_PORT = process.env.SOCKET_PORT || 4000;
const PORT = process.env.PORT || 8080;

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: `https://localhost:3000`,
    },
});

io.listen(SOCKET_PORT);

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
