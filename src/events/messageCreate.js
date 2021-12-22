const {prefix} = require("../config.json")

module.exports = {
    name: "messageCreate",
    async execute(client,message) { 
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
            teste = command.run(client,message,args);
            
        }catch(e){
            console.log(e)
        }
    }
}
