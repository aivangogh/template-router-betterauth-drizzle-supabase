import {
  pgTable,
  text,
  timestamp
} from "drizzle-orm/pg-core";
import { uuid } from "@/db/helpers/columns";
import { users } from "./users";
import { createSelectSchema } from "drizzle-zod";

export const sessions = pgTable("sessions", {
  ...uuid,
	expiresAt: timestamp("expires_at").notNull(),
	token: text("token").notNull().unique(),
	createdAt: timestamp("created_at").notNull(),
	updatedAt: timestamp("updated_at").notNull(),
	ipAddress: text("ip_address"),
	userAgent: text("user_agent"),
	userId: text("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
});

export const sessionSchema = createSelectSchema(sessions);

