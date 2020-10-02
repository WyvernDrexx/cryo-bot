const Discord = require("discord.js");
const config = require("./config.json");
const handleCommands = require("./src/handleCommands");
const converse = require("./src/converse");
const client = new Discord.Client();
const prefix = "!";

const isCommand = (message = "") => {
  if (message.startsWith(prefix)) return true;
  return false;
};

client.on("message", (messageObj) => {
  if (messageObj.author.bot) return;

  if (isCommand(messageObj.content.trim())) {
    const args = messageObj.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    handleCommands(messageObj, command, args);
    return;
  }

  converse(messageObj);
});

client.login(config.BOT_TOKEN);
