
import "dotenv/config";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "../src/db/drizzle";

async function main() {
  console.log("Running migrations...");
  try {
    await migrate(db, { migrationsFolder: "./drizzle" });
    console.log("Migrations applied successfully!");
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
  process.exit(0);
}

main();
