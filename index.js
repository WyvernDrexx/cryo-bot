const config = require("./config.json");
const commandPrefix = "c/";

const { CommandoClient } = require("discord.js-commando");
const path = require("path");

const client = new CommandoClient({
  commandPrefix,
  owner: "743462790190334073",
});

client.registry
  .registerDefaultTypes()
  .registerGroups([["first", "Default commands"]])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, "commands"));

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
  client.user.setActivity("with Commando");
});

client.on("error", console.error);
client.login(config.BOT_TOKEN);
