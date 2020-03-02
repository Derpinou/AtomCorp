const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();

module.exports.run = (client, message, args) => {
    var argresult = message.content.split(` `).slice(1).join(' ');
    var ddos = new Discord.RichEmbed()
    .setTitle("𝔻𝔻𝕆𝕊 𝔹𝕐 "+ message.author.username)
    .setColor("RANDOM")
    .setThumbnail(`${client.user.avatarURL}`)
    .addField("IP:", `${argresult}`)
    .addField("Port:", "80")
    .setTimestamp()
    .setFooter(client.user.username)
    message.channel.send(ddos);
    var charge = ".";
    var chargeC = "▒";
    message.channel.send("[" + charge.repeat(40) + "]").then((message) => { for (i = 0; i <= 40; i++) { message.edit("[" + chargeC.repeat(i) + charge.repeat(40 - i) + "]  -  " + i * 100 / 40 + "%"); } }) 
}


 module.exports.help = {
    name: 'ddos',
    description: "Fait un faux ddos pour faire peur a la personne mentionnée",
    exemple: "d!ddos 192.51.25.191"
};