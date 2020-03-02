const Discord = require("discord.js");

exports.run = (client, message, args) => {
    var coucouzer = message.content.split(" ").slice(1)
    if(!coucouzer[0]) return message.channel.send("Veuillez inserer un lien")
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor("RANDOM")
        .setImage(coucouzer.join(" "))
        .setTimestamp()
        .setFooter(client.user.username)
        message.channel.send(embed)

}

exports.help = {
    name: "image",
    description: "Inserez le lien d'une image ou d'un GIF",
    exemple: "d!image <lien de votre image ou gif>"
}


