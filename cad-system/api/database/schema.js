const {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  boolean,
} = require("drizzle-orm/pg-core");

/*
|--------------------------------------------------------------------------
| Departments
|--------------------------------------------------------------------------
*/

const departments = pgTable("departments", {
  id: uuid("id").defaultRandom().primaryKey(),

  discordGuildId: varchar("discord_guild_id", { length: 30 })
    .notNull()
    .unique(),

  name: varchar("name", { length: 100 }).notNull(),

  abbreviation: varchar("abbreviation", { length: 20 })
    .notNull()
    .unique(),

  description: text("description"),

  guildIcon: text("guild_icon"),

  customLogo: text("custom_logo"),

  logChannelId: varchar("log_channel_id", { length: 30 }),

  active: boolean("active").default(true),

  archived: boolean("archived").default(false),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/*
|--------------------------------------------------------------------------
| Guilds
|--------------------------------------------------------------------------
*/

const guilds = pgTable("guilds", {
  id: uuid("id").defaultRandom().primaryKey(),

  discordGuildId: varchar("discord_guild_id", { length: 30 })
    .notNull()
    .unique(),

  name: varchar("name", { length: 100 }).notNull(),

  departmentId: uuid("department_id").references(() => departments.id),

  logChannelId: varchar("log_channel_id", { length: 30 }),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/*
|--------------------------------------------------------------------------
| Users
|--------------------------------------------------------------------------
*/

const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),

  discordId: varchar("discord_id", { length: 30 })
    .notNull()
    .unique(),

  username: varchar("username", { length: 100 }).notNull(),

  avatar: text("avatar"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/*
|--------------------------------------------------------------------------
| Officers
|--------------------------------------------------------------------------
*/

const officers = pgTable("officers", {
  id: uuid("id").defaultRandom().primaryKey(),

  badgeNumber: varchar("badge_number", { length: 20 }).notNull(),

  callsign: varchar("callsign", { length: 20 }),

  rank: varchar("rank", { length: 50 }),

  departmentId: uuid("department_id")
    .notNull()
    .references(() => departments.id),

  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),

  active: boolean("active").default(true),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/*
|--------------------------------------------------------------------------
| Logs
|--------------------------------------------------------------------------
*/

const logs = pgTable("logs", {
  id: uuid("id").defaultRandom().primaryKey(),

  title: varchar("title", { length: 150 }).notNull(),

  description: text("description").notNull(),

  departmentId: uuid("department_id")
    .notNull()
    .references(() => departments.id),

  createdBy: uuid("created_by")
    .notNull()
    .references(() => users.id),

  source: varchar("source", { length: 20 }).default("dashboard"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/*
|--------------------------------------------------------------------------
| Arrests
|--------------------------------------------------------------------------
*/

const arrests = pgTable("arrests", {
  id: uuid("id").defaultRandom().primaryKey(),

  suspectName: varchar("suspect_name", { length: 100 }).notNull(),

  arrestingOfficer: varchar("arresting_officer", { length: 100 }).notNull(),

  charges: text("charges").notNull(),

  location: varchar("location", { length: 200 }),

  notes: text("notes"),

  departmentId: uuid("department_id")
    .notNull()
    .references(() => departments.id),

  createdBy: uuid("created_by")
    .notNull()
    .references(() => users.id),

  source: varchar("source", { length: 20 }).default("discord"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

module.exports = {
  departments,
  guilds,
  users,
  officers,
  logs,
  arrests,
};