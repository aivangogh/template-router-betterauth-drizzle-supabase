import type {
  userInsertSchema,
  userSelectSchema,
  userUpdateSchema,
} from "@/db/schema";
import type { z } from "zod";

export type User = z.infer<typeof userSelectSchema>;
export type UserInsert = z.infer<typeof userInsertSchema>;
export type UserUpdate = z.infer<typeof userUpdateSchema>;
