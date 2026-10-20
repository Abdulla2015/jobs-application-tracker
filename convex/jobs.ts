import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

// Get all jobs for a company
export const listByCompany = query({
  args: { companyId: v.id("companies") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("jobs")
      .withIndex("by_company", (q) => q.eq("companyId", args.companyId))
      .order("desc", "createdAt")
      .collect();
  },
});

// Get all jobs (admin)
export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("jobs").order("desc", "createdAt").collect();
  },
});

// Get a specific job
export const get = query({
  args: { id: v.id("jobs") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Create a new job
export const create = mutation({
  args: {
    title: v.string(),
    companyId: v.id("companies"),
    location: v.optional(v.string()),
    salary: v.optional(v.string()),
    jobUrl: v.optional(v.string()),
    description: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const jobId = await ctx.db.insert("jobs", {
      title: args.title,
      companyId: args.companyId,
      location: args.location,
      salary: args.salary,
      jobUrl: args.jobUrl,
      description: args.description,
      createdAt: Date.now(),
    });
    return jobId;
  },
});

// Update a job
export const update = mutation({
  args: {
    id: v.id("jobs"),
    title: v.string(),
    location: v.optional(v.string()),
    salary: v.optional(v.string()),
    jobUrl: v.optional(v.string()),
    description: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      title: args.title,
      location: args.location,
      salary: args.salary,
      jobUrl: args.jobUrl,
      description: args.description,
    });
  },
});

// Delete a job
export const remove = mutation({
  args: { id: v.id("jobs") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});