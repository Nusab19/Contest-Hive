"use server";
import STATS from "@/db/schemas/STATS";
import MongoConnection from "@/db/index";

await MongoConnection(); // Make sure we're connected to the database

type key = "api" | "page";

export async function updateData(key: key) {
  let updateObj: { [key: string]: number } = { total: 1, past24: 1 };
  updateObj[key] = 1;
  if (key === "page") {
    updateObj["past24page"] = 1;
    updateObj["page"] = 1;
  } else if (key === "api") {
    updateObj["past24api"] = 1;
    updateObj["api"] = 1;
  } else {
    updateObj = {};
    console.log("Error in Mongo Update: Invalid Key Supplied");
    return;
  }
  const updated = await STATS.findOneAndUpdate({ _id: 1 }, { $inc: updateObj });
  if (!updated) console.log("Error in Mongo Update: Failed to Update Stats");
  return updated;
}
