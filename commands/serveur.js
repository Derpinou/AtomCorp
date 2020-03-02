const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    const membre = message.mentions.members.first() || message.member;
    message.delete()
    message.channel.send('Regardez vos DM (5s)').then(message => message.delete(5000))
    message.author.send(`
    ┏╋━━━━━━━━━━◥◣ INFORMATIONS ◢◤━━━━━━━━━━╋┓
    
    Nous cherchons des membres actifs ! :trophy:
    - Des gros cadeaux à gagner ( Giveaway, Events, ... ) :tada:
    N'hésitez pas à nous rejoindre ! :crossed_swords:
    Passez faire un coucou, vous serez accueillit comme il le faut ! :candle: 
    
    **N'attend plus et rejoins nous sur le CocciGang, tu le regretteras pas** :palm_tree:

    :link: https://discord.gg/vQnfrRc` )
        
    ;

};
 

module.exports.help = {
    name: 'serveur',
    description: "vous envoi le lien du serveur",
    exemple: "d!serveur"
};