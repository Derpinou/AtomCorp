const Discord = require('discord.js')



module.exports.run = (client, message, args) => {

  function find_guild(name) {
    client.guilds.find("name",name)
  }


  if(!args[1]) return message.channel.send("Veuillez entrer un nom de serveur ! Pour voir ma liste, tapez `=server` !")
  console.log(args.slice(1).join(" ") in client.guilds + "\n" + client.guilds)
  if(args.slice(1).join(" ") in client.guilds === true) return message.channel.send("Le serveur `" + args.slice(1).join(" ") + '` ne fait pas partie de mes serveurs !')
  var serv_invi = find_guild(args.slice(1))
  var serv_invi_embed = new Discord.RichEmbed()
    .setTitle("Voici les différents liens d'invitation qu'il existe pour le serveur " + args.slice(1).join(" "))
    .setDescription(serv_invi)
  message.channel.send(serv_invi_embed)
}
module.exports.help = {
    name: 'serv-inv'
}