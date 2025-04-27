import { uuid } from "@/db/helpers/columns";
import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";

export const users = pgTable("users", {
	...uuid,
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	emailVerified: boolean("email_verified").notNull(),
	image: text("image"),
	createdAt: timestamp("created_at").notNull(),
	updatedAt: timestamp("updated_at").notNull(),
});

export const userSelectSchema = createSelectSchema(users);
export const userInsertSchema = createInsertSchema(users).omit({ id: true });
export const userUpdateSchema = createUpdateSchema(users).omit({
	id: true,
	createdAt: true,
});
