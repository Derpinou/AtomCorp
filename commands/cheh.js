const Discord = require("discord.js");

exports.run = (client, message, args) => {
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor("RANDOM")
        .setImage("https://cdn.discordapp.com/attachments/665104011015356426/681574302218584139/image0.gif")
        .setTimestamp()
        .setFooter(client.user.username)
        message.channel.send(embed)

}

exports.help = {
    name: "cheh",
    description: "Tout est dans le nom",
    exemple: "d!cheh"
}


