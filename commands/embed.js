const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();

module.exports.run = (client, message, args) => {
    var coucouzer = message.content.split(" ").slice(1)
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) { return message.channel.send('Vous n\'avez pas la permissions !'); }
    if(!coucouzer[0]) return;
    else {
        let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(coucouzer.join(" "))
        .setTimestamp()
        .setFooter(client.user.username)
        message.channel.send(embed)
    }
}

module.exports.help = {
    name: 'embed',
    description: "Recopie votre texte en embed",
    exemple: "d!embed <votre texte>"
}
