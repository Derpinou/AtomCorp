var { exec } = require('child_process');
const Discord = require('discord.js');



exports.run = async (client, message, args, utils, locale) => {


    if(message.author.id === "555429540613062656") {
        var args = message.content.split(" ").slice(1)
        exec(`${args.join(' ')}`, (error, stdout) => {
            var response = (error || stdout);
            if (!error) message.channel.send(`\\✅ | L'execution s'est terminée sans problêmes :`);
            else message.channel.send(`\\❌ | Une erreur est survenue lors de l'exécution :`);
            message.channel.send(`${response}`, {
                code: "js",
                split: "\n"
            }).catch(e => console.log(e));
        });
 }
}
exports.help = {
    name: "exec",
    desciption: "Executer une commandes dans la console",
    exemple: "d!exec <commande>"
}