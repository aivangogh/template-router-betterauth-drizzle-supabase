import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	server: {
		SERVER_URL: z.string().url().optional(),
    BETTER_AUTH_SECRET: z.string().min(1),
    BETTER_AUTH_URL: z.string().url().min(1),
    SUPABASE_DATABASE_URL: z.string().min(1),
	},
	runtimeEnv: import.meta.env,
	emptyStringAsUndefined: true,
});
