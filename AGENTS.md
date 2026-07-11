You are contributing to an existing production project called GSP Central CAD Dashboard.

IMPORTANT RULES:

- Do NOT redesign the architecture unless absolutely necessary.
- Preserve existing code style.
- Prefer modifying existing files over creating unnecessary new ones.
- Produce production-quality code.
- If database changes are needed, make them incrementally.
- Explain every major change you make.
- If you are unsure, inspect the repository before making assumptions.

==================================================
PROJECT OVERVIEW
==================================================

Frontend:
- React
- Vite

Backend:
- Express
- PostgreSQL
- Socket.IO
- Discord OAuth

There is an existing Discord bot that must remain compatible with the dashboard.

The dashboard requires Discord login before access.

Theme:
- Tactical black
- Blue accent color
- Smooth hover animations
- Toast notifications
- Professional law-enforcement style UI

==================================================
PERMISSIONS
==================================================

Dashboard Owners:
- Appoint Owners
- Appoint Administrators
- Dashboard branding
- Dashboard settings

Dashboard Administrators:
- Create departments
- Edit departments
- Delete departments

Department deletion must require multiple confirmation/security checks.

==================================================
DEPARTMENTS
==================================================

Departments page is a top-level navigation item.

Departments page uses card layout.

Each card displays:
- Guild icon
- Department name
- Description
- Officer count
- Record count
- Status

Clicking a card opens:

Department Details

Tabs:

Overview

Officer Directory

Performance

Logs

Settings

Always include a Back button.

==================================================
CREATE DEPARTMENT WIZARD
==================================================

Workflow:

1.
Enter Discord Guild ID

2.
Verify bot is installed.

If not installed:

Prompt to invite:

https://discord.com/oauth2/authorize?client_id=1513569861014519858

3.
After installation:

Fetch:

- Guild name
- Guild icon
- Roles

4.
Select:

General Department Role

(This determines who belongs to the department.)

5.

Choose department rank roles.

After selecting them, provide drag-and-drop ordering.

Rank 1 = highest rank.

Store Discord Role IDs.

==================================================
OFFICERS
==================================================

Officer Directory exists INSIDE Department Details.

Officer profile displays:

Department-specific rank

Shift statistics

Timeline

Performance

Tabs:

Day

Week

Month

Year

All Time

Ranks are determined from Discord roles.

Discord is always the source of truth.

==================================================
LOGGING
==================================================

Supported log types:

- Arrest
- Citation
- BOLO
- Warrant
- Infraction

Do NOT create unsupported log types.

Law enforcement logs are broadcast to:

- Dashboard
- Every connected department server

Dashboard-created logs must use the existing custom ID generation compatible with the Discord bot.

Never generate duplicate IDs.

==================================================
DASHBOARD BRANDING
==================================================

Owners can change:

Dashboard title (required)

Optional logo

Future accent color

Login page and sidebar should automatically use these settings.

==================================================
ADMINISTRATION
==================================================

Provide:

Audit Logs

Appoint Owners

Appoint Administrators

Cooldowns:

Owner appointment:
1 hour

Administrator appointment:
15 minutes

Audit logs must be immutable.

==================================================
SOCKET.IO
==================================================

Use Socket.IO for:

Live records

Live logs

Live statistics

Live department updates

==================================================
CURRENT PRIORITY
==================================================

Finish Discord authentication.

Implement:

- Passport
- Express Sessions
- /auth/discord
- /auth/discord/callback
- /auth/me
- /auth/logout
- Protected routes
- React authentication context

Authentication must be completed before moving on to Departments.

==================================================
CODING STYLE
==================================================

Whenever possible:

- Generate complete working files.
- Keep functions modular.
- Add comments for important logic.
- Avoid placeholders.
- Avoid TODOs unless specifically requested.
- Make code production-ready.