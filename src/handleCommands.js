const colorNames = require("./resources/colorNames.json");

const handleCommands = (messageObj, command, args) => {
  switch (command) {
    case "ping":
      const timeTaken = Date.now() - messageObj.createdTimestamp;
      messageObj.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
      break;
    case "colorcode":
      console.log(colorNames[args[0]]);
      const selectedColor = colorNames[args[0]];
      if (selectedColor) {
        messageObj.reply(
          `Name: ${selectedColor.name}, Hex: \`${selectedColor.hex}\`, RGB: \`${selectedColor.rgb}\` `
        );
        return;
      }
      messageObj.reply(`Color \`${args[0]}\` doesn't exist.`);
    default:
      messageObj.reply(`Sorry..That command doesn't exist.`);
  }
  messageObj.delete();
};

module.exports = handleCommands;
