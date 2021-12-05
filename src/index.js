const { Client, Intents, Collection} = require('discord.js');

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"], partials: ["CHANNEL"] });
const { token } = require("./config.json")

client.commands = new Collection()

path = ["commands", "events"]

path.forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.login(token);