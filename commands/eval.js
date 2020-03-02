const { inspect } = require("util")

exports.run = async (client, message, args, utils, locale) => {
    if(message.author.id === "555429540613062656") {
        try {
            var code = args.join(" ");
            let evaled = await eval(code);

            if (typeof evaled !== "string") {
                evaled = require("util").inspect(evaled);
            }
            message.channel.send(`\\✅ | L'eval s'est terminée sans problêmes :`).then(() => {
                message.channel.send(evaled, {
                    code: "js",
                    split: "\n"
                });
            })
        } catch (err) {
            message.channel.send(`\\❌ | Une erreur est survenue lors de l'exécution :\`\`\`js\n${err.stack}\n\`\`\``);
        }
}
}
exports.help = {
    name: "eval",
    desciption: "Eval Javascript",
    exemple: "d!eval client.commands.size"
}