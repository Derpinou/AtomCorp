const Discord = require("discord.js");

exports.run = (client, message, args) => {
    var coucouzer = message.content.split(" ").slice(1)
    var coucouzer1 = message.content.split(" ").slice(2)
    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) { return message.channel.send('Vous n\'avez pas la permissions !'); }
    if(!coucouzer[0]) return;
    else {
        let embed = new Discord.RichEmbed()
        .setAuthor(coucouzer[0])
        .setColor("#000000")
        .setDescription(coucouzer1.join(" "))
        .setTimestamp()
        .setFooter(client.user.username)
        message.channel.send(embed)
        message.channel.send('|| @everyone ||')
    }

}

exports.help = {
    name: "annonce",
    description: "Fait une annonce",
    exemple: "&annonce <Titre> <votre texte>"
}


