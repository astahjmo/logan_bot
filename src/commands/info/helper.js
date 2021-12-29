const {HelperButton} = require('../../utils/buttons_constructor')
const helper = require('../../utils/embed_constructor')
const {MessageActionRow} = require('discord.js')

module.exports = {
    name: "help",
    working: true,
    description: "Mostra todos os comandos do bot",
    permissions: [],
    run: async (client,message,args) =>{
        helper_command = {}
        client.commands.forEach(element => {
            if(helper_command[element.group]){
                helper_command[element.group].push({name: element.name, desc: element.description})
           } else {
                helper_command[element.group] = {}
                helper_command[element.group] = [{name: element.name, desc: element.description}]
            }
        })
        const list_groups = Object.keys(helper_command)
        let button_list = []
        list_groups.forEach(name => {
            const button = new HelperButton(`id_${name}`, name, "SECONDARY").create()
            button_list.push(button)
        })

        main_panel = helper.mainPanel()
        let wor = new MessageActionRow().addComponents([...button_list])
        const message_panel = await message.reply({embeds: [main_panel], ephemeral: true ,components: [wor]})
        const collector = message_panel.createMessageComponentCollector({time:30000})
        collector.on('collect', async i =>{
            if(i.user.id != message.author.id) return
            const group = i.customId.slice(3)
            commands_panel = helper.commandsPanel(helper_command[group])
            await i.update({embeds: [commands_panel]})
        })

        collector.on('end', async i =>{
            await message_panel.edit({content: "Esse painel de ajuda acabou.", embeds: [], components: []})
        })
    }
}
