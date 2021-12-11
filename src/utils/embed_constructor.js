const { MessageEmbed } = require('discord.js')

const mainPanel = () => {
    embed = new MessageEmbed()
    .setTitle("Painel de ajuda")
    .setColor('RANDOM')
    .setFooter("Criando por Astaroth e SrLuizi")
    .setThumbnail("https://images-ext-2.discordapp.net/external/j_66Agk7LFgNYJ-6mq37NujKF9w7HUGnxlShNPAE1mw/https/images-ext-2.discordapp.net/external/XZHzKKSjFrjVePhXlYwe7NTZrXMmS7G6qL7_AE4Yrpw/https/media.discordapp.net/attachments/718554801675305073/854815076522786856/image0.png")
    .setImage("https://cdn.discordapp.com/attachments/908430393458425897/911328602249912340/Captura_de_Ecra_33.png")
    return embed
}

const commandsPanel = (arr) => {
    commandPanel = new MessageEmbed()
    .setTitle("Painel de ajuda")
    .setColor('RANDOM')
    .setFooter("criado por astaroht")
    arr.forEach(i => {
        console.log(i.desc)
        commandPanel.addField(`${i.name}`, `${i.desc}`)
    })

    return commandPanel
}
exports.commandsPanel = commandsPanel
exports.mainPanel = mainPanel;
