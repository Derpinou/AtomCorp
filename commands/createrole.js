const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) { return message.channel.send('Vous n\'avez pas la permission !').then(message => message.delete(10000)); }
    if (!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) { return message.channel.send('Le bot n\'a pas la permission !').then(message => message.delete(10000)); }    
    message.channel.send(`Le ${name} a été créé avec succés`)
    let name = message.content.slice(8);
    message.guild.createRole({
    name: name,
    mentionable: false,
    permissions: 363584,
    position: "",
    color: "RANDOM"
  })


}

module.exports.help = {
    name: 'createrole',
    description: "Créer un role (Permission Admin requise)",
    exemple: "d!createrole <nom de votre role>"
};