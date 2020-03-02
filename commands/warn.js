const Discord = require("discord.js")
const fs = require('fs')
const client = new Discord.Client()
 
const warns = JSON.parse(fs.readFileSync('./warns.json'))





module.exports.run = (client, message, args) => {
    let arg = message.content.trim().split(/ +/g)
if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
let member = message.mentions.members.first()
if (!member) return message.channel.send("Veuillez mentionner un membre")
if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas warn ce membre")
let reason = arg.slice(2).join(' ')
if (!reason) return message.channel.send("Veuillez indiquer une raison")
if (!warns[member.id]) {
    warns[member.id] = []
}
warns[member.id].unshift({
    reason: reason,
    date: Date.now(),
    mod: message.author.id
})
fs.writeFileSync('./warns.json', JSON.stringify(warns))
message.channel.send(member + " a été warn pour " + reason + " :white_check_mark:")
}


module.exports.help = {
    name: 'warn',
    description: 'Warn une personne',
    exemple: '&warn @membre <raison>'
}

