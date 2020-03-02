const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();

module.exports.run = (client, message, args) => {
if(message.deletable)message.delete()
var member = message.mentions.members.first();
if (!member) return message.channel.send("Veuillez mentionner une personne") 
var embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle(member.displayName + " VS " + message.author.username)
.setImage("https://media.giphy.com/media/zSbNvl2uGXG1i/giphy.gif")
.setTimestamp()
.setFooter(client.user.username)
message.channel.sendMessage(embed)

}


module.exports.help = {
    name: 'fight',
    description: "Extrem Fight",
    exemple: "d!fight @Derp#0001"
};