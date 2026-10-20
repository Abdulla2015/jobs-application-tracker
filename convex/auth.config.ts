import { ConvexAuthConfig } from "@convex-dev/auth/config";

export default {
  providers: [
    {
      domain: "https://your-auth-provider.com",
      applicationID: "convex",
    },
  ],
} satisfies ConvexAuthConfig;