const { normalPanel } = require("../utils/embed_constructor.js")
module.exports = {
    name: "messageCreate",
    async execute(client,message) {
        
        function userPermssionException(message){
            this.message = message;
            this.nome = "userPermissionException";
        }
        if (message.author.bot) return;
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return;
        if (!message.guild) return;
        if (!message.content.startsWith(process.env.prefix)) return
        let args = message.content.split(" ")
        args.slice(1,args.length)
        const cmd = args.shift().toLowerCase().replace(process.env.prefix, "") //

        if (cmd.length == 0) return;
        let command = client.commands.get(cmd);
        if (!command) return;

        if (command.working != true) return message.reply("Este comando está desativado para manuntenção.")
        try{
            command.permissions.forEach(element => {
                if(message.member.permissions.has(element)){
                }else{
                    throw new userPermssionException(`Você não tem permissão para executar este comando.`)
                }
            });
            teste = command.run(client,message,args);
        }catch(UserPermissionException){
            embed = normalPanel('#f80000', "Algo de errado não está certo!", `${message.author} você não tem permissão para execução deste comando`, "")
            await message.reply({embeds: [embed]}).then(msg =>{
                setTimeout(function(){
                    msg.delete()
                }, 5000)
            })
        }
    }
}
