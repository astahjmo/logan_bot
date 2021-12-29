const {guild} = require("../config.json")
module.exports = {

    name: "messageReactionAdd",

    async execute(client,reaction){
        if (reaction.partial) {
            try {
                await reaction.fetch();
            } catch (error) {
                console.error('Something went wrong when fetching the message:', error);
                return;
            }
        }
        if(reaction.message.channelId != guild.suggestion_channel) return
        if(reaction.count <= 20) return
        console.log(reaction.message)
        const embed = reaction.message.embeds[0]
        reaction.message.delete()
        client.channels.fetch(guild.suggestion_up_staff).then(channel => channel.send({embeds: [embed]}).then(message => {
            message.react("✔️")
            message.react("❌")}))
    }
}