const Discord = require('discord.js');

function makeid(length = 16) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return "https://discord.gift/"+result;

}

module.exports.run = (client, message, args) => {
    if(message.author.bot) return;  
    message.channel.send("Sending your code <a:Diamond:656421613016711168>") 
    message.author.send(makeid(16))
    console.log(message.author.username + " a utiliser la commande psc dans "+ message.channel.name)} 
    



module.exports.help = {
    name: 'nitro',
    description: "Génère une Gift code Nitro uncheck",
    exemple: "d!nitro"
};