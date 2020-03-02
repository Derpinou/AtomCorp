const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();

module.exports.run = (client, message, args) => {

hug = ["https://s-media-cache-ak0.pinimg.com/originals/49/a2/1e/49a21e182fcdfb3e96cc9d9421f8ee3f.gif", "https://s-media-cache-ak0.pinimg.com/originals/16/46/f7/1646f720af76ea58853ef231028bafb1.gif", "https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif", "http://i.imgur.com/2WywS3T.gif", "http://i.imgur.com/8ruodNJ.gif", "https://myanimelist.cdn-dena.com/s/common/uploaded_files/1461071296-7451c05f5aae134e2cceb276b085a871.gif", "http://i0.kym-cdn.com/photos/images/original/000/931/030/394.gif", "https://media.tenor.co/images/1171c186f9130d1efa4a186ad4371e8c/tenor.gif", "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0413/epic-hugs-friends-pikachu.gif", "https://cdn.weeb.sh/images/rJaog0FtZ.gif", "https://cdn.weeb.sh/images/B10Tfknqf.gif", "https://cdn.weeb.sh/images/S1a0DJhqG.gif", "https://cdn.weeb.sh/images/Hk4qu_XvZ.gif", "https://cdn.weeb.sh/images/Hk0yFumwW.gif", "https://cdn.weeb.sh/images/BJCCd_7Pb.gif", "https://cdn.weeb.sh/images/BJ0UovdUM.gif"]
rnb = require('random-number')
let muser = message.mentions.users.first()
let r = rnb({
    min: 0,
    max: hug.length - 1,
    integer: true
});
let image = hug[r];

if (!message.mentions.users.first()) return message.channel.sendMessage("Veuillez mentionner la personne dont vous voulez faire un calin")
var embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription("** " + muser.username + "**"  + ", vous avez reçu un calin de la part de " + "**" + message.author.username + " **")
.setImage(image)
.setTimestamp()
.setFooter(client.user.username)
message.channel.sendMessage(embed)
}


module.exports.help = {
    name: 'hug',
    description: "Faites un calin a la personne mentionnée",
    exemple: "d!hug @Derp#0001"
};