let io = null;

function initialize(server) {
    const { Server } = require("socket.io");

    io = new Server(server, {
        cors: {
            origin: "*"
        }
    });

    io.on("connection", socket => {

        console.log(`🔌 ${socket.id} connected`);

        socket.on("disconnect", () => {
            console.log(`❌ ${socket.id} disconnected`);
        });

    });

    console.log("✅ Socket.IO initialized");

    return io;
}

function getIO() {
    if (!io) {
        throw new Error("Socket.IO has not been initialized.");
    }

    return io;
}

module.exports = {
    initialize,
    getIO
};