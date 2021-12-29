const config = require("./config.json")

const guilds = config.config.guild
const joined_guild = "37864237846276"


let guild_obj = config.config.guild[0]

console.log(guild_obj.messages.Welcome)
