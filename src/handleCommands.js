const handleCommands = (messageObj, command, args) => {
    switch (command) {
        case "ping":
          const timeTaken = Date.now() - messageObj.createdTimestamp;
          messageObj.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
          break;
        case "lurk":
          messageObj.reply(` will be right back! :thumbsup: `);
          break;
        case "fuck":
          messageObj.reply(" Hmm, really? :unamused:");
          break;
        case "die":
          messageObj.reply(" R.I.P.!");
          break;
        default:
          messageObj.reply(`Sorry..That command doesn't exist.`);
      }
      messageObj.delete();
}

module.exports = handleCommands;