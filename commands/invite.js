const Discord = require("discord.js")


module.exports.run = (client, message, args) => {
    message.delete()
    message.channel.send('Regardez vos DM (5s)').then(message => message.delete(5000))
    message.member.send(`
    ┏╋━━━━━━━━━━◥◣ Lien d'invitation ◢◤━━━━━━━━━━╋┓
    
    Bonjour ${message.author.username}, tu as demander le lien d'invitation du bot, alors le voici:
        :link: https://discordapp.com/oauth2/authorize?client_id=662060707000483879&scope=bot&permissions=2146958847` )
        
    ;

};

module.exports.help = {
    name: 'invite',
    description: "Donne le lien d'invitation du bot",
    exemple: "d!invite"
};