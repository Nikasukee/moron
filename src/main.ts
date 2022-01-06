import { config as env } from "dotenv";
import { Client, Intents } from "discord.js";

// Load environment variables to get Discord Token
env();

console.log("Bot is starting...");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS],
});

client.login(process.env.DISCORD_TOKEN);
