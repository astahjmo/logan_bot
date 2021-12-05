const {prefix} = require("../config.json")
const Discord = require("discord.js")

module.exports = {
    name: "messageCreate",

    async execute(client,message) {
        if (message.author.bot) return;
            if (!message.guild) return;
            let args = message.content.split(" ")
            message.delete()

            const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.username,message.author.avatarURL())
            .setColor("00fff7")
            .setThumbnail(message.author.avatarURL())
            .setDescription(`> **${args}**`)
            .setFooter(`Para sugerir algo basta escreveres aqui !!`)
            .setTimestamp()

            message.channel.send({embeds: [embed]}).then(msg =>{
                msg.react("👍")
                msg.react("👎")
            })

    }
}