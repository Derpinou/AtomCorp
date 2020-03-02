const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();

module.exports.run = (client, message, args) => {  
    let embed = new Discord.RichEmbed()
        .setAuthor("Atom")
        .setColor("RANDOM")
        .addField("Créateur:", " 𝕡𝕣0𝕡𝕙3𝕔𝕪 | ATOM#8644 " )
        .addField("Developpeur:", "Derp#0001")
        .addField("Lib", "Discord.js")
        .setTimestamp()
        .setFooter(client.user.username)
message.channel.send(embed)
}

module.exports.help = {
    name: 'about',
    description: "Quelques information sur l'équipe staff du bot",
    exemple: `d!about`
};