const Discord = require("discord.js");
const client = new Discord.Client();
var snekfetch = require("snekfetch");




module.exports = client => { 

  console.log(`${client.user.username} starting...`);
  console.log(`Serving ${client.guilds.size} guilds.`);
  console.log(`${client.users.size} users`);


/*
let embed_ha = new Discord.RichEmbed()
    .setColor('#4304f5')
    .setTitle('𝐒𝐲𝐬𝐭𝐞𝐦𝐞')
    .setDescription(`**\n** **Bot allumé avec succés**`)
    .setFooter('Atom ρяσנє¢т ν1')
    .setTimestamp(); */

let users = `${client.users.size}`

  let status_liste = [
    "Atom V2",
    `${users} Utilisateurs`,
    "Développeur => Derp#0001",
    "d!help => Menu d'aide",
  ]
client.user.setActivity()
  setInterval(() => {
    let st = Math.floor(Math.random() * (status_liste.length - 1) + 1)
    client.user.setActivity(status_liste[st], { type: 'STREAMING', url:'https://www.twitch.tv/login'})

  }, 50000)
}