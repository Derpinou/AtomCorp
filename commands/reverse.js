const Discord = require('discord.js')

module.exports.run = (client, message, args) => {
    if(!args[1]) return message.channel.send("Veullez entrer un texte à inverser ! :upside_down:")
    var arg = message.content.split("")
    message.channel.send(arg.slice(args[0].split("").length).join("").split("").reverse().join(""))
  }
 module.exports.help = {
     name: 'reve'
 }