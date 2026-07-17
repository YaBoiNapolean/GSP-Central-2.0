const axios = require("axios");

exports.verifyGuild = async (req, res) => {

    try {

        const { guildId } = req.body;

        if (!guildId) {

            return res.status(400).json({

                success: false,
                message: "Guild ID is required."

            });

        }

        /*
            Discord verification will be added next.
        */

        res.json({

            success: true,

            verified: true,

            guild: {

                id: guildId,

                name: "Verification Pending",

                icon: null,

                memberCount: 0,

                roles: []

            }

        });

    }

    catch (err) {

        console.error(err);

        res.status(500).json({

            success: false,

            message: "Failed to verify guild."

        });

    }

};