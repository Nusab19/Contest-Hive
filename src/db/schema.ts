
import { pgTable, serial, integer } from "drizzle-orm/pg-core";

export const stats = pgTable("stats", {
  id: serial("id").primaryKey(),
  api: integer("api").default(0),
  page: integer("page").default(0),
  total: integer("total").default(0),
  past24: integer("past24").default(0),
  past24api: integer("past24api").default(0),
  past24page: integer("past24page").default(0),
});
