const Discord = require("discord.js")


module.exports.run = (client, message, args) => {
    message.delete()
    message.channel.send('Regardez vos DM (5s)').then(message => message.delete(5000))
    message.member.send(`
    ┏╋━━━━━━━━━━◥◣ CONTACT | SUPPORT ◢◤━━━━━━━━━━╋┓
    
    Bonjour ${message.author.username}, tu as demander a contacter le support, merci de te rendre sur ce serveur et mentionner un membre du support.
        :link: https://discord.gg/vQnfrRc` )
        
    ;

};

module.exports.help = {
    name: 'support',
    description: "Donne le support en mp",
    exemple: "d!support"
};