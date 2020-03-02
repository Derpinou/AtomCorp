const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    const member = message.mentions.members.first() || message.member;
    const embed = new Discord.RichEmbed()
    .setAuthor("Avatar")
    .setFooter(client.user.username)
    .setTimestamp()
    .addField("Voici l'avatar de ta proie.", "👽 - N'oublions pas de dire merci !")
    .setImage(`${member.user.displayAvatarURL}`)
    .setThumbnail("https://cdn.discordapp.com/attachments/561674909751705650/662059061214314498/image0.gif")
    .setColor('RANDOM')
    message.channel.sendEmbed(embed);
};

module.exports.help = {
    name: 'avatar',
    description: "Donne l'avatar de la personne mentionnée",
    exemple: "d!avatar @Derp#0001"
};

