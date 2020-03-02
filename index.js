const { token, prefix } = require("./config")

const { Client, Collection } = require("discord.js")

const client = new Client({ disableEveryone: true })

client.prefix = prefix
client.commands = new Collection()

const loadCommands = require("./functions/commands")
const loadEvents = require("./functions/events")

const load = async () => {

    await loadCommands.run(client)
    await loadEvents.run(client)
}
load()

client.login(token)