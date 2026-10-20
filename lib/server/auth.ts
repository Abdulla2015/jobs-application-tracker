import { betterAuth } from "better-auth";

// Better Auth configuration for Convex
// NOTE: Better Auth requires a proper database adapter.
// For Convex, you have options:
// 1. Use a separate database (PostgreSQL, MySQL) with Better Auth
// 2. Create custom Convex functions to handle auth operations

// This is a simplified configuration that works with Convex's schema
// but you'll need to implement the actual database operations

export const auth = betterAuth({
  database: {
    // Using the default database connection (requires DATABASE_URL env var)
    // Or configure for SQLite for development
  },
  emailAndPassword: {
    enabled: true,
    disableCSP: true,
  },
  // If using a custom database, configure the connection string
  // database: process.env.DATABASE_URL,
});

export const { authClient, signUpEmailAndPassword, signInEmailAndPassword } = auth;