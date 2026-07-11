# GSP Central

GSP Central consists of a Discord bot at the repository root and a dashboard API and React application under `cad-system/`.

## Prerequisites

- Node.js 22.12 or newer (`nvm use` reads the included `.nvmrc`)
- Python 3.9 or newer
- PostgreSQL for the dashboard API

## Local setup

1. Copy `cad-system/api/.env.example` to `cad-system/api/.env` and provide the PostgreSQL, Discord OAuth, API-key, and session-secret values.
2. Copy `.env.example` to `.env` and provide `DISCORD_TOKEN`.
3. Install the dashboard and API dependencies with `npm run setup`.
4. Create a bot virtual environment and install its dependencies:

   ```bash
   python3 -m venv .venv
   .venv/bin/python -m pip install -r requirements.txt
   ```

## Commands

- `npm run dev:dashboard` — start the Vite dashboard
- `npm run start:api` — start the Express API
- `npm run build` — build the dashboard for production
- `npm run lint` — lint the dashboard
- `npm run start:bot` — start the Discord bot

The bot remains the source of truth for operational records, record IDs, performance statistics, and Discord broadcasting.
