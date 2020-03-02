const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();

module.exports.run = (client, message, args) => {
    
  if  (args[0]) {
    const cmd = client.commands.get(args[0])
    let embed = new Discord.RichEmbed()
    .setAuthor(`Help | ${cmd.help.name}`)
    .setDescription(`**Nom:** \`${cmd.help.name}\`\n\n**Description:** ${cmd.help.description}\n\n**Exemple:** ${cmd.help.exemple}`)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(client.user.username)
    return message.channel.send(embed)
  }
  
  let embed = new Discord.RichEmbed()
  .setAuthor(`Commandes`)
  .addField(`Nombre de commandes:`, client.commands.size) 
  .addField("Commandes","```"+client.commands.map(cmd => cmd.help.name).join("\n")+"```")
  .setColor("RANDOM")
  .setDescription(`Utilisez ${client.prefix}help <commande> pour plus d'info ;)`)
  .setTimestamp()
  .setFooter(client.user.username)
  return message.channel.send(embed)
}


module.exports.help = {
  name: 'help',
  description: "Donne le menu d'aide",
  exemple: "d!help <commande>"
};

