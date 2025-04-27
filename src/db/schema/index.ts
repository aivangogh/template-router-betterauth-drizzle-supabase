import { users } from "./users";
import { sessions } from "./sessions";
import { accounts } from "./accounts";
import { verifications } from "./verifications";

export * from "./accounts";
export * from "./sessions";
export * from "./users";
export * from "./verifications";

export const schema = {
	users,
	sessions,
	accounts,
	verifications,
};
