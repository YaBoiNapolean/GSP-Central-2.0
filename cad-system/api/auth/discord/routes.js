const express = require("express");
const passport = require("./passport");

const router = express.Router();

function frontendUrl() {
    return (process.env.FRONTEND_URL || "http://localhost:5173").replace(/\/$/, "");
}

router.get(
    "/discord",
    passport.authenticate("discord")
);

router.get(
    "/discord/callback",
    passport.authenticate("discord", {
        failureRedirect: `${frontendUrl()}/login?error=discord_auth_failed`,
    }),
    (req, res) => {
        res.redirect(frontendUrl());
    }
);

router.get("/me", (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
    }

    res.json({
        success: true,
        user: req.user,
    });
});

router.post("/logout", (req, res, next) => {
    req.logout(err => {
        if (err) return next(err);

        req.session.destroy(() => {
            res.clearCookie("gsp.sid");
            res.sendStatus(204);
        });
    });
});

module.exports = router;