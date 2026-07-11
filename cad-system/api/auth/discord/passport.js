const passport = require("passport");
const DiscordStrategy = require("passport-discord").Strategy;

const pool = require("../../database/db");

const DISCORD_SCOPES = ["identify"];

function upsertDiscordUser(profile) {
    const username = profile.global_name || profile.username;
    const avatar = profile.avatar
        ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`
        : null;

    return pool.query(
        `INSERT INTO users (discord_id, username, avatar)
         VALUES ($1, $2, $3)
         ON CONFLICT (discord_id)
         DO UPDATE SET username = EXCLUDED.username, avatar = EXCLUDED.avatar
         RETURNING id, discord_id, username, avatar, is_admin`,
        [profile.id, username, avatar]
    ).then((result) => result.rows[0]);
}

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const result = await pool.query(
            "SELECT id, discord_id, username, avatar, is_admin FROM users WHERE id = $1",
            [id]
        );

        done(null, result.rows[0] || false);
    } catch (error) {
        done(error);
    }
});

if (!process.env.DISCORD_CLIENT_ID || !process.env.DISCORD_CLIENT_SECRET || !process.env.DISCORD_CALLBACK_URL) {
    throw new Error("Discord OAuth environment variables are required.");
}

passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_CALLBACK_URL,
    scope: DISCORD_SCOPES,
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await upsertDiscordUser(profile);
        done(null, user);
    } catch (error) {
        done(error);
    }
}));

module.exports = passport;
