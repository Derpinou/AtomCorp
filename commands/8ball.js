const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();

module.exports.run = (client, message, args) => {
    message.delete()
    let arg = message.content.trim().split(/ +/g)
        if (!arg) return message.channel.send("Veuillez **poser une question** :x:")
        let answers = ["Non :x:", "J'ai envie de dormir :zzz:", "Balec :face_palm:", "Peut être... :thinking:", "Absolument :interrobang:"]
        let question = arg.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("RANDOM")
            .addField("Question :", question)
            .addField("Réponse :", answers[Math.floor(Math.random() * answers.length)])
            .setTimestamp()
            .setFooter(client.user.username)
        message.channel.send(embed)
}

module.exports.help = {
    name: '8ball',
    description: 'Posez une question, je vous repondrez',
    exemple: `d!8ball <Votre Question>`
}
