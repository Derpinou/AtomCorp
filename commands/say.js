const Discord = require("discord.js");

exports.run = (client, message, args) => {
    var coucouzer = message.content.split(" ").slice(1)
    if(!coucouzer[0]) return message.channel.send("Veuillez inserer un texte")
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor("RANDOM")
        .setDescription(coucouzer.join(" "))
        .setTimestamp()
        .setFooter(client.user.username)
        message.channel.send(embed)

}

exports.help = {
    name: "say",
    description: "Recopie votre texte",
    exemple: "d!say <votre texte>"
}


