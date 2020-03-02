const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    message.delete()
    const member = message.mentions.members.first() || message.member;
     

    message.channel.send(`Id de **${member.user.username}**: \n ${member.user.id}
`).then(message => message.delete(60000))
};

module.exports.help = {
    name: 'id',
    description: "Donne l'identifiant de la personne mentionnée",
    exemple: "d!id @Derp#0001"
};