const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.channel.send('Vous n\'avez pas la permission !').then(message => message.delete(10000)); }
    if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) { return message.channel.send('Le bot n\'a pas la permission !').then(message => message.delete(10000)); }
    if (message.mentions.users.size === 0) { return message.channel.send('Vous devez mentionner un utilisateur !').then(message => message.delete(10000)); }

        let banMember = message.guild.member(message.mentions.users.first());
        if (!banMember) { return message.channel.send('Je n\'ai pas trouvé l\'utilisateur !').then(message => message.delete(10000)); }
    
        message.mentions.users.first().send(`Vous êtes banni du serveur **${message.guild.name}** par ${message.author.username}`)
            .then(() => {
                banMember.ban()
                    .then((member) => {
                        message.channel.send(`${member.user.username} est ban ! Par ${message.author.username}`);
                    })
                        .catch((err) => {
                            if (err) { return console.error(err); }
                        });
            })
                .catch((error) => {
                    if (error) { console.error(error); }
                        banMember.ban()
                            .then((member) => {
                                message.channel.send(`${member.user.username} est ban ! Par ${message.author.username}`);
                            })
                                .catch((err) => {
                                    if (err) { return console.error(err); }
                                });
                });
};

module.exports.help = {
    name: 'ban',
    description: "Banni la personne mentionnée (Permission Ban requise)",
    exemple: "d!ban @membre"
};