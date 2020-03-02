const Discord = require('discord.js')
module.exports.run = ( client, message, args ) => {
let member = message.mentions.members.first()
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
if(!member) return message.channel.send("Membre introuvable")
if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas unwarn ce membre.")
if(!member.manageable) return message.channel.send("Je ne pas unwarn ce membre.")
if(!warns[member.id] || !warns[member.id].length) return message.channel.send("Ce membre n'a actuellement aucun warns.")
warns[member.id].shift()
fs.writeFileSync('./warns.json', JSON.stringify(warns))
message.channel.send("Le dernier warn de " + member + " a été retiré :white_check_mark:")
}

module.exports.help = {
    name: 'unwarn',
    description: 'Unwarn une personne',
    exemple: 'd!unwarn @membre'
}
