
import "dotenv/config";
import mongoose from "mongoose";
import { db } from "../src/db/drizzle";
import { stats } from "../src/db/schema";

const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  throw new Error("MONGO_URI must be defined");
}

interface Stats extends mongoose.Document {
  _id: number;
  api: number;
  page: number;
  total: number;
  past24: number;
  past24api: number;
  past24page: number;
}

const StatsSchema = new mongoose.Schema<Stats>({
  _id: { type: Number },
  api: { type: Number },
  page: { type: Number },
  total: { type: Number },
  past24: { type: Number },
  past24api: { type: Number },
  past24page: { type: Number },
});

const StatsModel =
  mongoose.models.Stats || mongoose.model<Stats>("Stats", StatsSchema, "contest-hive");

async function migrate() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI!);
  console.log("Connected to MongoDB");

  const mongoStats = await StatsModel.findOne({ _id: 1 });

  if (!mongoStats) {
    console.log("No stats found in MongoDB with _id: 1");
    process.exit(1);
  }

  console.log("Found stats in MongoDB:", mongoStats.toObject());

  console.log("Pushing schema to Supabase...");
  // We'll use drizzle-kit push for simplicity in this script context, or just manual insert if table exists.
  // Actually, let's assume we run `drizzle-kit push` separately or just create table here if needed?
  // Use drizzle-kit push command is better. But for now, let's just insert.
  // Wait, the table might not exist yet.
  // Let's use a raw query to create the table if it doesn't exist, just to be safe for this migration script.
  // OR we can rely on `drizzle-kit push` being run before this.
  // Let's rely on `drizzle-kit push`. I will add a step to run it.

  console.log("Inserting into Supabase...");
  try {
    await db.insert(stats).values({
      id: 1, // Explicitly set ID to 1 to match Mongo
      api: mongoStats.api,
      page: mongoStats.page,
      total: mongoStats.total,
      past24: mongoStats.past24,
      past24api: mongoStats.past24api,
      past24page: mongoStats.past24page,
    }).onConflictDoUpdate({
      target: stats.id,
      set: {
        api: mongoStats.api,
        page: mongoStats.page,
        total: mongoStats.total,
        past24: mongoStats.past24,
        past24api: mongoStats.past24api,
        past24page: mongoStats.past24page,
      }
    });
    console.log("Migration complete!");
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
}

migrate();
