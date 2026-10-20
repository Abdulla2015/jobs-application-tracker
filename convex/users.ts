import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

// Get a user by ID
export const get = query({
  args: { id: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Get a user by email
export const getByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();
    return user;
  },
});

// Create a user (for Better Auth integration)
export const create = mutation({
  args: {
    email: v.string(),
    name: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await ctx.db.insert("users", {
      email: args.email,
      name: args.name,
      createdAt: Date.now(),
    });
    return userId;
  },
});

// Update user profile
export const update = mutation({
  args: {
    id: v.id("users"),
    name: v.optional(v.string()),
    email: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      name: args.name,
      email: args.email,
    });
  },
});

// Create session (for Better Auth integration)
export const createSession = mutation({
  args: {
    userId: v.id("users"),
    sessionToken: v.string(),
    expires: v.number(),
  },
  handler: async (ctx, args) => {
    const sessionId = await ctx.db.insert("sessions", {
      userId: args.userId,
      sessionToken: args.sessionToken,
      expires: args.expires,
    });
    return sessionId;
  },
});

// Get session by token
export const getSession = query({
  args: { token: v.string() },
  handler: async (ctx, args) => {
    const session = await ctx.db
      .query("sessions")
      .withIndex("by_session_token", (q) => q.eq("sessionToken", args.token))
      .first();
    return session;
  },
});

// Delete session
export const deleteSession = mutation({
  args: { token: v.string() },
  handler: async (ctx, args) => {
    const session = await ctx.db
      .query("sessions")
      .withIndex("by_session_token", (q) => q.eq("sessionToken", args.token))
      .first();
    if (session) {
      await ctx.db.delete(session._id);
    }
  },
});