const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
if(!args[1]) return message.channel.send(":x: **Erreur** :x:\nMerci de préciser le texte pour votre succès !")
var ach_image = Math.floor(Math.random() * 28)

if(args.join(" ").length > 20 | args.join(" ").length < 1) return message.channel.send(":x: **Trop long** :x:\nLe texte de votre succès doit comprendre entre 1 et 20 caractères !")
var ach = ("https://minecraftskinstealer.com/achievement/" + ach_image + "/Succès dévérouillé !/" + args.join("+"))
message.channel.send(new Discord.Attachment(ach, "Minecraft.jpg")).catch(error => message.channel.send("Erreur : " + error))
}

module.exports.help = {
    name: 'succes'
}

