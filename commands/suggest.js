const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();





module.exports.run = (client, message, args) => {
    message.delete()
    let arg = message.content.trim().split(/ +/g)
    if (!arg) return message.channel.send("**Soumettre une Suggestion** :x:")
    let suggestion = arg.slice(1).join(" ")
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor("RANDOM")
        .addField("Suggestion", suggestion)
        .setTimestamp()
        .setFooter(client.user.username)
    message.channel.send(embed)
    .then( msg => {( msg.react(':yup:656421608852029440')( msg.react(':nop:656421609053093918')) )})



}

module.exports.help = {
    name: 'suggestion',
    description: "créer une suggestion",
    exemple: "d!suggestion <votre suggestion>"
};


