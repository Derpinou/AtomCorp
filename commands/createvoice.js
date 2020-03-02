const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) { return message.channel.send('Vous n\'avez pas la permission !').then(message => message.delete(10000)); }
    if (!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) { return message.channel.send('Le bot n\'a pas la permission !').then(message => message.delete(10000)); } 
    let name = message.content.slice(8);
message.delete();
message.guild.createChannel(name , "voice")
}

module.exports.help = {
    name: 'createvoice',
    description: "Créer un salon vocal (Permission Admin requise",
    exemple: "d!createvoice <nom de votre salon>"
};