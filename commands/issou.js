const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();

module.exports.run = (client, message, args) => {

 risitas = ["https://cdn.discordapp.com/attachments/670370452434190348/681805558268821540/666542378936434709.png",
 "https://cdn.discordapp.com/attachments/670370452434190348/681806625493090305/641408701822926891.png",
  "https://cdn.discordapp.com/attachments/670370452434190348/681806736889348105/664881910723379201.png",
   "https://cdn.discordapp.com/attachments/670370452434190348/681806846155161630/656421610063921164.gif",
    "https://cdn.discordapp.com/attachments/670370452434190348/681806992334913541/668138700118556703.png",
    "https://cdn.discordapp.com/attachments/670370452434190348/681807100795682817/660115975395606566.png",
]
 let image = risitas[Math.floor(Math.random() * risitas.length)];


 var embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(message.author.tag, message.author.displayAvatarURL)
  .setImage(image)
  .setTimestamp()
  .setFooter(client.user.username)
  message.channel.sendMessage(embed)
}


module.exports.help = {
    name: 'issou',
    description: "envoi une image aléatoire",
    exemple: "d!issou"
};