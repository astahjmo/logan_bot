const { normalPanel } = require('../../utils/embed_constructor.js');
const {prefix} = require('../../config.json');

module.exports = {
    name: "unmute",
    description: "Desmute todos aqueles que seguem as regras",
    permissions: ["MODERATE_MEMBERS"],
    working: true,
    run: async (client,message,args) => {
        if(!message.guild.me.permissions.has("BAN_MEMBERS")){return}
        if(args.length != 1){ return await message.reply(`O comando correto é: ${prefix}mute "<@usuario>|<id>" <tempo>`)}
        let user = message.mentions.members.first();
        if(!user){
            user = await message.guild.members.fetch(args[0]);
        }
        if(!user){return await message.reply("Eu não consegui encontrar esse usuário, tente mencionar ou digitar o ID dele.")}
        if(user.id == message.author.id){return await message.reply("Você não pode mutar a si mesmo, estupido!")}
        if(user.user.bot == true ){return await message.reply("Porque mutar um bot ?")}
        if(user.roles.highest.position >= message.guild.me.roles.highest.position){return await message.reply("Você não pode punir esse usuário, ele tem um cargo maior ou igual ao meu!")}
        if(user.roles.highest.position >= message.member.roles.highest.position){return await message.reply("Você não pode punir esse usuário, ele tem um cargo maior ou igual ao seu!")}
       
        try {
            user.timeout(null).then((user) => {
                embed = normalPanel('#f80000', "Usuário desmutado com sucesso!", `${user} foi desmutado por ${message.author}`, "")
                message.channel.send({ embeds: [embed]} ).then(msg => {
                    setTimeout(function(){
                        msg.delete()
                    }, 5000)
                })
            })
        
        } catch (error) {
            console.log(error)         
        }
    }
}