const socketio = require("socket.io");

function socket(server) {
    const io = socketio(server);
    
    io.on("connection", (socket) => {
        console.log("New client connected");
        socket.on("disconnect", () => {
            console.log("Client disconnected");
        });
    });
}

module.exports = socket;
