const { normalPanel } = require('../../utils/embed_constructor.js');

module.exports = {
    name: "kick",
    description: "Expulse todos aqueles que quebrem as regras",
    permissions: ["BAN_MEMBERS"],
    working: true,
    run: async (client,message,args) => {
        if(!message.guild.me.permissions.has("BAN_MEMBERS")){return}
        if(args.length != 1){ return await message.reply("Você precisa especificar o usuário que você quer punir.")}
        let user = message.mentions.members.first();
        if(!user){
            user = await message.guild.members.fetch(args[0]);
        }
        if(!user){return await message.reply("Eu não consegui encontrar esse usuário, tente mencionar ou digitar o ID dele.")}
        if(user.id == message.author.id){return await message.reply("Você não pode dar kick em si mesmo, estupido!")}
        if(user.user.bot == true ){return await message.reply("Não da kick meu irmão, ele é um bot!")}
        if(user.roles.highest.position >= message.guild.me.roles.highest.position){return await message.reply("Você não pode punir esse usuário, ele tem um cargo maior ou igual ao meu!")}
        if(user.roles.highest.position >= message.member.roles.highest.position){return await message.reply("Você não pode punir esse usuário, ele tem um cargo maior ou igual ao seu!")}
        let reason = args.slice(1).join(" ");
        if(!reason){ reason = "Não especificado"}
       
        try {
            user.kick().then((user) => {
                embed = normalPanel('#f80000', "Usuário punido com sucesso!", `${user} foi punido por ${message.author} por: ${reason}`, "")
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