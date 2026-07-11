require("dotenv").config();

const express = require("express");
const cors = require("cors");
const http = require("http");

const pool = require("./database/db");

const logsRoute = require("./routes/logs");

const socketManager = require("./websocket/socket");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/logs", logsRoute);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "CAD API Online"
    });
});

app.get("/api/health", async (req, res) => {

    try {

        const result = await pool.query("SELECT NOW()");

        res.json({
            success: true,
            database: true,
            time: result.rows[0].now
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

});

const server = http.createServer(app);

socketManager.initialize(server);

(async () => {

    try {

        await pool.query("SELECT NOW()");

        console.log("✅ Connected to PostgreSQL");

    } catch (err) {

        console.error(err);

    }

})();

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {

    console.log(`🚀 API running on port ${PORT}`);

});