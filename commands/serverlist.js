      const Discord = require("discord.js")
      const moment = require('moment')
      exports.run = (client, message, args) => {
      var nbrePage = 1
      var serv_list = client.guilds.sort((servA, servB) => servB.memberCount - servA.memberCount).map(s => "**" + s.name + "** | " + s.memberCount + " membres | Rejoint le `" + moment(s.joinedAt).format("L") + " à " + moment(s.joinedAt).format("LT") + "`\n").slice(0, 10)
      var page = "Page 1 / "
      var serv_list_embed1 = new Discord.RichEmbed()
        .setTitle("Liste des serveurs (" + client.guilds.map(n => n).length + ")")
        .setDescription(serv_list)
        .setFooter(page + Math.ceil(Math.ceil(client.guilds.map(n => n).length)/10))
        .setColor("#00caf7")
      message.channel.send(serv_list_embed1)
      .then(async msg => {
        await msg.react("⏪")
        await msg.react("⏩")

        client.on("messageReactionAdd", (reaction, user) => {
          if(reaction.emoji.name === "⏩" && user.id === message.author.id && reaction.message.id === msg.id) {
            nbrePage = nbrePage + 1
            if(nbrePage > Math.ceil(client.guilds.map(n => n).length/10)) nbrePage = 1
            var serv_listBIS = client.guilds.sort((servA, servB) => servB.memberCount - servA.memberCount).map(s => "**" + s.name + "** | " + s.memberCount + " membres | Rejoint le `" + moment(s.joinedAt).format("L") + " à " + moment(s.joinedAt).format("LT") + "`\n").slice(nbrePage * 10 - 10, nbrePage * 10)
            var page = "Page " + nbrePage + " / "
            var serv_list_embed = new Discord.RichEmbed()
              .setTitle("Liste des serveurs (" + client.guilds.map(n => n).length + ")")
              .setDescription(serv_listBIS)
              .setFooter(page + Math.ceil(Math.ceil(client.guilds.map(n => n).length)/10))
              .setColor("#00caf7")
            msg.edit(serv_list_embed)
            reaction.remove(message.author)
          }
          if(reaction.emoji.name === "⏪" && user.id === message.author.id && reaction.message.id === msg.id) {
            nbrePage = nbrePage - 1
            if(nbrePage < 1) nbrePage = (Math.ceil(client.guilds.map(n => n).length)/10)
            var serv_listBIS = client.guilds.sort((servA, servB) => servB.memberCount - servA.memberCount).map(s => "**" + s.name + "** | " + s.memberCount + " membres | Rejoint le `" + moment(s.joinedAt).format("L") + " à " + moment(s.joinedAt).format("LT") + "`\n").slice(nbrePage * 10 - 10, nbrePage * 10)
            var page = "Page " + nbrePage + " / "
            var serv_list_embed = new Discord.RichEmbed()
              .setTitle("Liste des serveurs (" + client.guilds.map(n => n).length + ")")
              .setDescription(serv_listBIS)
              .setFooter(page + Math.ceil(Math.ceil(client.guilds.map(n => n).length)/10))
              .setColor("#00caf7")
            msg.edit(serv_list_embed)
            reaction.remove(message.author)
          }
        })
      })
    }

    module.exports.help = {
        name: 'serverlist'
    }