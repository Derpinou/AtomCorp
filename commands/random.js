const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (message.deletable) message.delete();
    random = Math.floor(Math.random() * 101) + 1;
    message.channel.send(`Nombre Random: **${random}**`)

}

module.exports.help = {
    name: 'random',
    description: "Donne un chiffre entre 1 et 100",
    exemple: "d!random"
};