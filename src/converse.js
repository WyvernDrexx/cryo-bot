const converse = (messageObj) => {
  const joinText = messageObj.content.toLowerCase().split(" ").join("");
  const messageContent = messageObj.content.toLowerCase().trim();
  // if(messageContent.includes("")){
  //   messageObj.reply("The word is not allowed!");
  //   messageObj.delete();
  //   return;
  // }

  console.log(messageObj.mentions.users.keys().length)

  if(messageContent === "hi"){
    
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
