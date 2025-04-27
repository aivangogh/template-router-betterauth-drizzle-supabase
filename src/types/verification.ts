import type { verificationSchema } from "@/db/schema";
import type { z } from "zod";

export type Verification = z.infer<typeof verificationSchema>;
