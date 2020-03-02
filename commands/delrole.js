module.exports.run = (client, message, args) => {
    if (!args.join(' ')) { return message.channel.send('Vous n\'avez pas la spécifié un nom de role !'); }
    if (!message.guild.member(message.author.id).hasPermission('MANAGE_ROLES')) { return message.channel.send('Vous n\'avez pas la permission `gérer les roles` !'); }
    if (!message.guild.member(client.user.id).hasPermission('MANAGE_ROLES')) { return message.channel.send('Je n\'ai pas la permission `gérer les roles` !'); }

    let member = message.guild.member(message.author.id);
    let role = message.guild.roles.find((r) => r.name.toLowerCase() === args.join(' ').toLowerCase() || r.id === args.join(' '));

    if (!role) { return message.channel.send('Ce role n\'existe pas !'); }
    if (!member.roles.has(role.id)) { return message.channel.send('Vous n\'avez pas ce role !'); }
    
        member.removeRole(role.id)
            .then(() => message.channel.send('Vous n\'avez désormais plus le role ' + role.toString()))
            .catch(console.error);
};

module.exports.help = {
    name: 'delrole',
    descritpion: "Supprime le role precisé a la personne mentionnée",
    exemple: "d!delrole <role>"
};