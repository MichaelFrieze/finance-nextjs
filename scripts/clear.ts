import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { categories, accounts, transactions } from "@/db/schema";

config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

console.log("🗑️ Clearing all tables");

const main = async () => {
  try {
    // Clear database
    await db.delete(transactions).execute();
    await db.delete(accounts).execute();
    await db.delete(categories).execute();
  } catch (error) {
    console.error("Error during clear DB:", error);
    process.exit(1);
  }
};

main();
