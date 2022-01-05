const { Client, Intents, Collection} = require('discord.js');
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_MESSAGE_REACTIONS"], partials: ["CHANNEL", "REACTION", "MESSAGE"] });
const { token } = require("./config.json")

client.commands = new Collection()

path = ["events", "commands"]
require("./handlers/process")
require("./server")
path.forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.login(token);
