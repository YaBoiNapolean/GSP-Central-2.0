const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL.includes("railway")
        ? { rejectUnauthorized: false }
        : false
});

pool.on("connect", () => {
    console.log("✅ Connected to PostgreSQL");
});

pool.on("error", (err) => {
    console.error("❌ PostgreSQL Error:", err);
});

module.exports = pool;