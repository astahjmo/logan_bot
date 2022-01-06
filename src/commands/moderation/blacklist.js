const { normalPanel } = require('../../utils/embed_constructor.js');
const blacklist  = require('../../database/models/blacklist.js')
const { prefix } = require('../../config.json');

module.exports = {
    name: "blacklist",
    description: "adicionar link a blacklist",
    permissions: ["BAN_MEMBERS"],
    working: true,
    run: async function(client,message,args){

        console.log(args[1])
        console.log(blacklist)
        const acceptedArgs = {
            add(args){
                const link = args[1];
                console.log(link)
                console.log(blacklist)
                blacklist.create({link: link}).then(result => {
                    message.channel.send(`Link adicionado com sucesso!`)
                }).catch(err => {
                    message.channel.send(`Ocorreu um erro ao adicionar o link!`)
                })
            },
            delete(args){
                const link = args[1];
                blacklist.findAll({
                    where: {
                        link: link
                    }
                }).then(result => {
                    if(result.length > 0){
                        blacklist.destroy({
                            where: {
                                link: link
                            }
                        }).then(result => {
                            message.channel.send(`Link removido com sucesso!`)
                        }).catch(err => {
                            message.channel.send(`Ocorreu um erro ao remover o link!`)
                        })
                    }else{
                        message.channel.send(`Link não encontrado!`)
                    }
                }).catch(err => {
                    message.channel.send(`Ocorreu um erro ao remover o link!`)
                })
            },
            list(args){
                blacklist.findAll().then(result => {
                    console.log(result)
                    const embed = normalPanel("#249822", `Lista de links na blacklist`,
                        `${result.map(r => r.link).join("\n")}`, "Logan gay")
                    message.channel.send({ embeds: [embed]} )
                }).catch(err => {
                    message.channel.send(`Ocorreu um erro ao listar os links! ${err}`)
                })
            }
        }
        console.log(Object.keys(acceptedArgs))
        const commandOptions = acceptedArgs[args[0]]
        if(!commandOptions){
            const embed = normalPanel(
                "#f80000",
                "Blacklist",
                `Ese é um comando usado para gerenciar links da blacklist\n 
                **Modos de uso:**\n 
                **Adicionar:** \`${prefix}${this.name} <${Object.keys(acceptedArgs)[0]}> <link>\`
                **Remover:** \`${prefix}${this.name} <${Object.keys(acceptedArgs)[1]}> <link>\`
                **Listar:** \`${prefix}${this.name} <${Object.keys(acceptedArgs)[2]}>\``,
                "logan é gay"
            )
            await message.channel.send({ embeds: [embed] })
            return
        }
        commandOptions(args)
    }
}
