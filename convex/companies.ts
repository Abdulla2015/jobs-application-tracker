import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

// Get all companies
export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("companies").order("desc", "createdAt").collect();
  },
});

// Get a specific company
export const get = query({
  args: { id: v.id("companies") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Create a new company
export const create = mutation({
  args: {
    name: v.string(),
    website: v.optional(v.string()),
    industry: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const companyId = await ctx.db.insert("companies", {
      name: args.name,
      website: args.website,
      industry: args.industry,
      createdAt: Date.now(),
    });
    return companyId;
  },
});

// Update a company
export const update = mutation({
  args: {
    id: v.id("companies"),
    name: v.string(),
    website: v.optional(v.string()),
    industry: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      name: args.name,
      website: args.website,
      industry: args.industry,
    });
  },
});

// Delete a company
export const remove = mutation({
  args: { id: v.id("companies") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});