const {prefix} = require("../config.json")

module.exports = {
    name: "messageCreate",

    async execute(client,message) {
        if (message.author.bot) return;
            if (!message.guild) return;
            let args = message.content.split(" ")
            args.slice(1,args.length)
            const cmd = args.shift().toLowerCase().replace(prefix, "")
            console.log(args, cmd)

            if (cmd.length === 0) return;
            let command = client.commands.get(cmd);
            console.log(command)
            if (!command) command = client.commands.get(cmd);
            if (command) command.run(client,message,args);
    }
}