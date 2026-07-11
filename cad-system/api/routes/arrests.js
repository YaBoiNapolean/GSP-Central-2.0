const express = require("express");
const router = express.Router();

const { db } = require("../database/drizzle");
const { arrests } = require("../database/schema");
const { getIO } = require("../websocket/socket");
const auth = require("../middleware/auth");

// GET ALL ARRESTS
router.get("/", async (req, res) => {
    try {

        const result = await db.select().from(arrests);

        res.json({
            success: true,
            arrests: result
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            error: err.message
        });

    }
});

// CREATE ARREST
router.post("/", auth, async (req, res) => {

    try {

        const {
            suspectName,
            arrestingOfficer,
            charges,
            location,
            notes,
            departmentId,
            createdBy,
            source
        } = req.body;

        if (
            !suspectName ||
            !arrestingOfficer ||
            !charges ||
            !departmentId ||
            !createdBy
        ) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields."
            });
        }

        const inserted = await db
            .insert(arrests)
            .values({
                suspectName,
                arrestingOfficer,
                charges,
                location,
                notes,
                departmentId,
                createdBy,
                source: source || "discord"
            })
            .returning();

        const arrest = inserted[0];

        // Broadcast to every connected dashboard/bot
        getIO().emit("arrest.created", arrest);

        res.status(201).json({
            success: true,
            arrest
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

});

module.exports = router;
