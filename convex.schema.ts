import { defineSchema, defineTable } from "convex/schema";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    name: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_email", ["email"]),

  sessions: defineTable({
    sessionToken: v.string(),
    userId: v.id("users"),
    expires: v.number(),
  }).index("by_user", ["userId"])
    .index("by_session_token", ["sessionToken"]),

  companies: defineTable({
    name: v.string(),
    website: v.optional(v.string()),
    industry: v.optional(v.string()),
    createdAt: v.number(),
  }),

  jobs: defineTable({
    title: v.string(),
    companyId: v.id("companies"),
    location: v.optional(v.string()),
    salary: v.optional(v.string()),
    jobUrl: v.optional(v.string()),
    description: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_company", ["companyId"]),

  applications: defineTable({
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
    appliedAt: v.number(),
    notes: v.optional(v.string()),
    interviewNotes: v.optional(v.string()),
    resumeVersion: v.optional(v.string()),
    attachments: v.optional(v.array(v.string())),
    lastFollowUpAt: v.optional(v.number()),
    followUpReminderDays: v.optional(v.number()),
  }).index("by_user", ["userId"])
    .index("by_status", ["status"])
    .index("by_user_status", ["userId", "status"]),
});