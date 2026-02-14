"use server";
import { db } from "@/db/drizzle";
import { stats } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { fetchStats } from "./cachedStats";

export async function updateData(key: "api" | "page") {
  try {
    const updateValues: any = {
      total: sql`${stats.total} + 1`,
      past24: sql`${stats.past24} + 1`,
    };

    if (key === "page") {
      updateValues.page = sql`${stats.page} + 1`;
      updateValues.past24page = sql`${stats.past24page} + 1`;
    } else if (key === "api") {
      updateValues.api = sql`${stats.api} + 1`;
      updateValues.past24api = sql`${stats.past24api} + 1`;
    } else {
      console.log("Error in Update: Invalid Key Supplied");
      return await fetchStats();
    }

    const updated = await db
      .update(stats)
      .set(updateValues)
      .where(eq(stats.id, 1))
      .returning();

    if (!updated || updated.length === 0) {
      console.log("Error in Update: Failed to Update Stats");
      return await fetchStats();
    }

    return updated[0];
  } catch (error) {
    console.error("Database Connection/Update Error:", error);
    return await fetchStats();
  }
}
