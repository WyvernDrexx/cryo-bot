const converse = (messageObj) => {
  const joinText = messageObj.content.toLowerCase().split(" ").join("");
  const messageContent = messageObj.content.toLowerCase().trim();
  if(messageContent.includes("fuck")){
    messageObj.reply("The word is not allowed!");
    messageObj.delete();
    return;
  }
  console.log(messageContent)

  if(messageContent === "hi"){
    messageObj.reply("Hello");
  }

  if (
    joinText.includes("iampro") ||
    joinText.includes("i'mpro") ||
    joinText.includes("impro")
  ) {
    messageObj.reply(`Are you sure? :smirk:`);
    return;
  }
};

module.exports = converse;
