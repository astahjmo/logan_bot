const {prefix, guild} = require("../config.json")
const Discord = require("discord.js")

module.exports = {
    name: "messageCreate",

    async execute(client,message) {
        if (message.channel.id != guild.suggestion_channel) return;
        if (message.author.bot) return;
        let args = message.content
        message.delete()

        const embed = new Discord.MessageEmbed()
        .setAuthor({name: `Sugestão de: ${message.author.username}`, iconURL: message.guild.iconURL()})
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