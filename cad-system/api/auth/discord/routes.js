const express = require("express");
const passport = require("./passport");

const router = express.Router();

function getFrontendUrl() {
    return (process.env.FRONTEND_URL || "http://localhost:5173").replace(/\/$/, "");
}

router.get("/discord", passport.authenticate("discord"));

router.get(
    "/discord/callback",
    passport.authenticate("discord", { failureRedirect: `${getFrontendUrl()}/login?error=discord_auth_failed` }),
    (req, res) => {
        res.redirect(`${getFrontendUrl()}/`);
    }
);

router.get("/me", (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({
            success: false,
            message: "Authentication required.",
        });
    }

    return res.json({
        success: true,
        user: req.user,
    });
});

router.post("/logout", (req, res, next) => {
    req.logout((error) => {
        if (error) {
            return next(error);
        }

        req.session.destroy((sessionError) => {
            if (sessionError) {
                return next(sessionError);
            }

            res.clearCookie("gsp.sid");
            return res.status(204).send();
        });
    });
});

module.exports = router;
