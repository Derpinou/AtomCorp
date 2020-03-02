const Discord = require('discord.js');

function makeid(length = 16) {
   var result           = '';
   var characters       = '0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;

}

module.exports.run = (client, message, args) => {
    if(message.author.bot) return;  
    message.channel.send(`${makeid(3)}.${makeid(3)}.${makeid(3)}.${makeid(3)}`) 
} 
    



module.exports.help = {
    name: 'ip',
    description: "Génère une fausse ip",
    exemple: "d!ip"
};