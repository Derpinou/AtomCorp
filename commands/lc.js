const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();

module.exports.run = (client, message, args) => {
if(message.deletable)message.delete()
var member = message.mentions.members.first();
if (!member) return message.channel.send("Veuillez mentionner une personne") 
random = Math.floor(Math.random() * 101) + 1;
var embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle(member +" + "+ message.author.username+` = ${random}%`)
.setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Emblem-favorites.svg/1200px-Emblem-favorites.svg.png")
.setTimestamp()
.setFooter(client.user.username)
message.channel.sendMessage(embed)

}


module.exports.help = {
    name: 'lc',
    description: "Mesurez votre amour avec la peronne mentionnée <3",
    exemple: "d!lc @Derp#0001"
};
