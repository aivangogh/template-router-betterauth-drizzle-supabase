import type { accountInsertSchema, accountSelectSchema, accountUpdateSchema } from "@/db/schema";
import type { z } from "zod";

export type Account = z.infer<typeof accountSelectSchema>;
export type AccountInsert = z.infer<typeof accountInsertSchema>;
export type AccountUpdate = z.infer<typeof accountUpdateSchema>;
