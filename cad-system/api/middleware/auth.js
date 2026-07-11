function requireApiKey(req, res, next) {

    const apiKey = req.header("x-api-key");

    if (!apiKey) {
        return res.status(401).json({
            success: false,
            message: "Missing API Key"
        });
    }

    if (apiKey !== process.env.API_KEY) {
        return res.status(403).json({
            success: false,
            message: "Invalid API Key"
        });
    }

    next();
}

module.exports = requireApiKey;

module.exports.requireDashboardAuth = function (req, res, next) {
    if (req.isAuthenticated && req.isAuthenticated()) {
        return next();
    }

    return res.status(401).json({
        success: false,
        message: "Authentication required.",
    });
};

module.exports.requireDashboardOrApiKey = function (req, res, next) {
    if (req.isAuthenticated && req.isAuthenticated()) {
        return next();
    }

    return requireApiKey(req, res, next);
};
