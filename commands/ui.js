const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();

module.exports.run = (client, message, args) => {
    const member = message.mentions.members.first() || message.member;
    const embed = new Discord.RichEmbed()
.setDescription("User Info")
.setThumbnail(member.user.displayAvatarURL)
.setColor('RANDOM')
.setTimestamp()
.setFooter(client.user.username)
.addField("Tag:", member.user.username)
.addField("Discriminator", '#'+member.user.discriminator)
.addField("ID:", member.user.id)
.addField("Game Activity:", member.presence.game)
.addField("Nom:", member.user.username)
.addField("Nombres de roles:", member.roles.size - 1)
.addField("Date de création du compte:", member.user.createdAt)
.addField("Date d'arrivée:", member.joinedAt); return message.channel.send(embed);

}


module.exports.help = {
    name: 'ui',
    description: "donne les informations de la personne",
    exemple: "d!ui @membre"
};