const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();


module.exports.run = (client, message, args) => {
    let member = message.mentions.members.first();
    const love = Math.random() * 100;
    const loveIndex = Math.floor(love / 10);
    const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);
if (!member) { return message.channel.send("Veuillez mentionner un membre") } else {
    let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField(`☁ **${member.username}** loves **${message.author.username}** this much:`,
        `💟 ${Math.floor(love)}%\n\n${loveLevel}`);

    message.channel.send(embed);
    }
}
        
module.exports.help = {
   name: 'love',
   desciption: 'love',
   exemple: 'd!love @membre'
};