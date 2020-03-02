exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('ping')
        .then((m) => m.edit(`Pong : **${Date.now() - début}**ms`))

}

exports.help = {
    name: "ping",
    description: "Donne la latence du bot (ms)",
    exemple: "d!ping"
}


