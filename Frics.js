const Discord = require("discord.js");


const bot = new Discord.Client({disableEveryone: true});


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;


  let prefix = "!";
  let messageArray = message.content.split(";");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let grindie = "317664547001335809";


  if (cmd === `${prefix}Frics`){
    if(message.author.id !== grindie) {
    message.reply("nem vagy tanár :P")
    .then(msg => {
   msg.delete(10000)
 })
    message.delete().catch(O_o=>{})
    return;
  }


    message.delete().catch(O_o=>{});
    message.channel.send(args);

    return;
  }


});

bot.login(process.env.BOT_TOKEN);
