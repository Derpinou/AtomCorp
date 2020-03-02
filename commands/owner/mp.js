const Discord = require('discord.js');
const client = new Discord.Client();



module.exports.run = (client, message, args) => {
message.delete()
message.guild.members.forEach(member => {
member.send('Ne cliquez pas sur des liens inconnus qui ne ressemblent pas aux liens des vrais sites').catch(error => {}) })
}
    
    module.exports.help = {
        name: 'mp'
    };