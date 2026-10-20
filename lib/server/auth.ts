import { auth } from "better-auth";
import { ConvexAdapter } from "@convex-dev/better-auth";

export const authConfig = auth({
  database: new ConvexAdapter({
    table: "users",
    sessionTable: "sessions",
  }),
  emailAndPassword: {
    enabled: true,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
  },
});

export const { authClient } = authConfig;
