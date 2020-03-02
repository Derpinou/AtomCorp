const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) { return message.channel.send('Vous n\'avez pas la permission !').then(message => message.delete(10000)); }
    if (!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) { return message.channel.send('Le bot n\'a pas la permission !').then(message => message.delete(10000)); } 
    let name = message.content.slice(8);
message.guild.createChannel(name , "text")
}

module.exports.help = {
    name: 'createtext',
    description: "Créer un Salon texte (Permission Admin requise",
    exemple: "d!createtext <nom de votre salon>"
};