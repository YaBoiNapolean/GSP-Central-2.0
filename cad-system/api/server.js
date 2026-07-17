require("dotenv").config();
console.log("=== SERVER ENV ===");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("Variables starting with DISCORD:");
console.log(
  Object.keys(process.env).filter(key => key.startsWith("DISCORD"))
);
console.log("==================");
const express = require("express");
const cors = require("cors");
const http = require("http");
const session = require("express-session");
const passport = require("./auth/discord/passport");

const pool = require("./database/db");

const logsRoute = require("./routes/logs");
const discordAuthRoutes = require("./auth/discord/routes");
const departmentsRoutes=require("./routes/departments");
const discordRoutes = require("./routes/discord");

const socketManager = require("./websocket/socket");

const app = express();

const frontendUrl = (process.env.FRONTEND_URL || "http://localhost:5173").replace(/\/$/, "");
const isProduction = process.env.NODE_ENV === "production";

if (!process.env.SESSION_SECRET) {
    throw new Error("SESSION_SECRET must be configured before starting the API.");
}

app.set("trust proxy", isProduction ? 1 : 0);
app.use(cors({
    origin: frontendUrl,
    credentials: true,
}));
app.use(express.json());
app.use(session({
    name: "gsp.sid",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "none" : "lax",
        maxAge: 1000 * 60 * 60 * 8,
    },
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", discordAuthRoutes);
app.use("/api/logs", logsRoute);
app.use(

    "/api/departments",

    departmentsRoutes

);
app.use(
    "/api/discord",
    discordRoutes
);

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
