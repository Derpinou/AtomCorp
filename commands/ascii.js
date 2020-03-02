const Discord = require("discord.js");
const figlet = require('figlet');
exports.run = (client, message, args) => {
    let arg = message.content.split(" ").slice(1);
    if (!arg.join(' ')) return message.channel.send("Veuillez spécifier un texte.");
    figlet(arg.join(' '), (err, data) => {
      message.channel.send(data, {
        code: 'ascii'
      });
    });
}

exports.help = {
    name: "ascii",
    description: "Ecris en ascii votre texte",
    exemple: "d!ascii test"
}


