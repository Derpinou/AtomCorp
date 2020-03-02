const Discord = require("discord.js")
const fs = require('fs')
const client = new Discord.Client()
 
const warns = JSON.parse(fs.readFileSync('./warns.json'))





module.exports.run = (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
    let member = message.mentions.members.first()
    if (!member) return message.channel.send("Veuillez mentionner un membre")
    let embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.displayAvatarURL)
        .addField('15 derniers warns', ((warns[member.id] && warns[member.id].length) ? warns[member.id].slice(0, 15).map(e => e.reason) : "Ce membre n'a aucun warns"))
        .setTimestamp()
    message.channel.send(embed)
}




module.exports.help = {
    name: 'casier',
    description: 'Casier judiciaire de la personne',
    exemple: '&casier @membre'
}

