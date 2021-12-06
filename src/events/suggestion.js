const {prefix, guild} = require("../config.json")
const Discord = require("discord.js")

module.exports = {
    name: "messageCreate",

    async execute(client,message) {
        // verificar se a mensagem foi mandanda no canal de sugestão
        if (message.channel.id != guild.suggestion_channel) return;
        // verificar se não foi um bot que mandou
        if (message.author.bot) return;
        // isso aqui pega toda a mensagem enviada
        let args = message.content
        // isso deleta a mensagem que o cara enviou
        message.delete()

        // isso cria um embed
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username,message.author.avatarURL())
        .setColor("00fff7")
        .setThumbnail(message.author.avatarURL())
        .setDescription(`> **${args}**`)
        .setFooter(`Para sugerir algo basta escreveres aqui !!`)
        .setTimestamp()
        //isso aqui manda o embed
        message.channel.send({embeds: [embed]}).then(msg =>{
            msg.react("👍")
            msg.react("👎")
        })

    }
}