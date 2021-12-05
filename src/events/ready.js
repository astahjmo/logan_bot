module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
      console.log(`[API] ${client.user.username} está no server ${client.guilds.cache.size} on`);
    }
}