const {prefix} = require("../config.json")
const { normalPanel } = require("../utils/embed_constructor.js")
module.exports = {
    name: "messageCreate",
    async execute(client,message) {
        
        function userPermssionException(message){
            this.message = message;
            this.nome = "userPermissionException";
        }
        console.log(message)
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return;
        if (message.author.bot) return;
        if (!message.guild) return;
        if (!message.content.startsWith(prefix)) return
        let args = message.content.split(" ")
        args.slice(1,args.length)
        const cmd = args.shift().toLowerCase().replace(prefix, "")

        if (cmd.length == 0) return;
        let command = client.commands.get(cmd);
        if (!command) return;

        if (command.working != true) return message.reply("Este comando está desativado para manuntenção.")
        try{
            command.permissions.forEach(element => {
                if(message.member.permissions.has(element)){
                }else{
                    throw new Error("userPermissionException")
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
