import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

// Get all applications for a user
export const listByUser = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("applications")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .order("desc", "appliedAt")
      .collect();
  },
});

// Get applications by status for a user
export const listByUserAndStatus = query({
  args: { userId: v.id("users"), status: v.union(
    v.literal("applied"),
    v.literal("screening"),
    v.literal("interviewing"),
    v.literal("offer"),
    v.literal("accepted"),
    v.literal("rejected"),
    v.literal("withdrawn")
  )},
  handler: async (ctx, args) => {
    return await ctx.db
      .query("applications")
      .withIndex("by_user_status", (q) => q.eq("userId", args.userId).eq("status", args.status))
      .order("desc", "appliedAt")
      .collect();
  },
});

// Get a specific application
export const get = query({
  args: { id: v.id("applications") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Create a new application
export const create = mutation({
  args: {
    jobId: v.id("jobs"),
    userId: v.id("users"),
    status: v.union(
      v.literal("applied"),
      v.literal("screening"),
      v.literal("interviewing"),
      v.literal("offer"),
      v.literal("accepted"),
      v.literal("rejected"),
      v.literal("withdrawn")
    ),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const applicationId = await ctx.db.insert("applications", {
      jobId: args.jobId,
      userId: args.userId,
      status: args.status,
      appliedAt: Date.now(),
      notes: args.notes,
    });
    return applicationId;
  },
});

// Update an application
export const update = mutation({
  args: {
    id: v.id("applications"),
    status: v.union(
      v.literal("applied"),
      v.literal("screening"),
      v.literal("interviewing"),
      v.literal("offer"),
      v.literal("accepted"),
      v.literal("rejected"),
      v.literal("withdrawn")
    ),
    notes: v.optional(v.string()),
    interviewNotes: v.optional(v.string()),
    resumeVersion: v.optional(v.string()),
    attachments: v.optional(v.array(v.string())),
    lastFollowUpAt: v.optional(v.number()),
    followUpReminderDays: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      status: args.status,
      notes: args.notes,
      interviewNotes: args.interviewNotes,
      resumeVersion: args.resumeVersion,
      attachments: args.attachments,
      lastFollowUpAt: args.lastFollowUpAt,
      followUpReminderDays: args.followUpReminderDays,
    });
  },
});

// Delete an application
export const remove = mutation({
  args: { id: v.id("applications") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});