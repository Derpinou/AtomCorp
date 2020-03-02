const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();

module.exports.run = (client, message, args) => {
let sicon = message.guild.iconURL;
let owner = message.guild.owner.displayName
let embed = new Discord.RichEmbed()
.setDescription("Information du serveur")
.setColor("RANDOM").setThumbnail(sicon)
.addField("Nom:", message.guild.name)
.addField("ID:", message.guild.id)
.addField("Propriétaire:",owner)
.addField(`Verification:`, message.guild.verificationLevel)
.addField("Region:", message.guild.region)
.addField("Créé le:", message.guild.createdAt)
.addField("Membres totaux:", message.guild.memberCount)
.addField('**Nombres de salons** : ', message.guild.channels.size)
.addField(`Roles:`, message.guild.roles.size)
.setTimestamp()
.setFooter(client.user.username)
 return message.channel.send(embed);

}


module.exports.help = {
    name: 'si',
    description: "Donne les informations du serveur",
    exemple: "d!si"
};

