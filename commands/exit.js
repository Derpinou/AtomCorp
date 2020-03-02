const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();
module.exports.run = (client, message, args) => {  
if (message.author.id === "555429540613062656") {
 return message.channel.send(exit)} else {return message.channel.send('Vous devez avoir les permission pour executer cette commande.')}
  };
module.exports.help = {
    name: 'exit',
    description: 'eteins le bot',
    exemple:'d!exit'
}