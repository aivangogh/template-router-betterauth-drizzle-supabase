import { createId } from "@paralleldrive/cuid2";
import { text, timestamp } from "drizzle-orm/pg-core";

export const uuid = {
	id: text("id")
		.primaryKey()
		.notNull()
		.$defaultFn(() => createId()),
};

export const timestamps = {
	updated_at: timestamp(),
	created_at: timestamp().defaultNow().notNull(),
	deleted_at: timestamp(),
};
