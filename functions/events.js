const { readdirSync } = require("fs")
const { join } = require("path")
const eventDir = join(__dirname, "..", "events")

module.exports.run = (client) => {
    const eventFiles = readdirSync(eventDir)
    for (const eventFile of eventFiles) {
        const event = require(`${eventDir}/${eventFile}`)

        const eventName = eventFile.split(".").shift()

        client.on(eventName, event.bind(null, client))

        delete require.cache[require.resolve(`${eventDir}/${eventFile}`)]
    }
    console.log(`Loadded 2 events!`)
}