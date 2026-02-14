
import { pgTable, serial, integer } from "drizzle-orm/pg-core";

export const stats = pgTable("stats", {
  id: serial("id").primaryKey(),
  api: integer("api").default(0).notNull(),
  page: integer("page").default(0).notNull(),
  total: integer("total").default(0).notNull(),
  past24: integer("past24").default(0).notNull(),
  past24api: integer("past24api").default(0).notNull(),
  past24page: integer("past24page").default(0).notNull(),
});
