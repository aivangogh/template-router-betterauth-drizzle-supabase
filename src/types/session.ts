import type { sessionSchema } from "@/db/schema";
import type { z } from "zod";

export type Session = z.infer<typeof sessionSchema>;
