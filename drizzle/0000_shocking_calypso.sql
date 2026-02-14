CREATE TABLE "stats" (
	"id" serial PRIMARY KEY NOT NULL,
	"api" integer DEFAULT 0,
	"page" integer DEFAULT 0,
	"total" integer DEFAULT 0,
	"past24" integer DEFAULT 0,
	"past24api" integer DEFAULT 0,
	"past24page" integer DEFAULT 0
);
