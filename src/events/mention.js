
module.exports = {
    name: "messageCreate",
    async execute(client,message){
        if(message.author.bot) return;
        if(message.content === `<@!${client.user.id}>`) {
            const mentionembed = new MessageEmbed()
            .setTitle("Mencionaste-me?")
            .setDescription(`> Olá ${msg.author.username}!!O meu prefix neste server é \`+\`, para saberes quais comandos eu tenho escreve \`+help\`!`)
            .setImage("https://cdn.discordapp.com/attachments/908430393458425897/911328602249912340/Captura_de_Ecra_33.png")
            .setColor("#870DFF")
            msg.channel.send({embeds: [mentionembed]}) 
        }
    }
}