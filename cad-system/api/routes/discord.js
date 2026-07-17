const express = require("express");
const router = express.Router();

const {
    verifyGuild
} = require("../controllers/discordController");

router.post(
    "/verify-guild",
    verifyGuild
);

module.exports = router;