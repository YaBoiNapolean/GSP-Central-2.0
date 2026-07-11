const express = require("express");
const router = express.Router();

const { db } = require("../database/drizzle");
const { logs } = require("../database/schema");

const { getIO } = require("../websocket/socket");
const auth = require("../middleware/auth");

// Dashboard sessions and the existing Discord bot API key can both access logs.
router.use(auth.requireDashboardOrApiKey);

/*
|--------------------------------------------------------------------------
| GET ALL LOGS
|--------------------------------------------------------------------------
*/

router.get("/", async (req, res) => {
    try {
        const result = await db.select().from(logs);

        res.json({
            success: true,
            logs: result,
        });
    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            error: err.message,
        });
    }
});

/*
|--------------------------------------------------------------------------
| CREATE LOG
|--------------------------------------------------------------------------
*/

router.post("/", async (req, res) => {
    try {
        const {
            title,
            description,
            departmentId,
            createdBy,
            source,
        } = req.body;

        const inserted = await db
            .insert(logs)
            .values({
                title,
                description,
                departmentId,
                createdBy,
                source: source || "dashboard",
            })
            .returning();

        const newLog = inserted[0];

        getIO().emit("log.created", newLog);

        res.status(201).json({
            success: true,
            log: newLog,
        });
    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            error: err.message,
        });
    }
});

module.exports = router;
