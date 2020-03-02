const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    message.delete()
    let version = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor("RANDOM")
    .setDescription(`Discord Version : ${Discord.version}`)
    .setTimestamp()
    .setFooter(client.user.username)
    message.channel.send(version).then(message => message.delete(60000))
};

module.exports.help = {
    name: 'version',
    description: "Donne le version actuelle de discord",
    exemple: "d!version"
};