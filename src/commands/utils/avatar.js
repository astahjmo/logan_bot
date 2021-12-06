
const Discord = require("discord.js")
module.exports = {
    name: "avatar",
    description: "Pegue o avatar seu ou de alguém",
    run: async (client, message, args) => {

            message.delete();
          
            let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
            
            let avatar = user.avatarURL({dynamic: true ,  size: 4096});
          
            let embed = new Discord.MessageEmbed() 
              .setColor(`BD00FF`)
              .setTitle(`⚡ ${user.username}`)
              .setDescription(` Clica em **DOWNLOAD** para fazeres o download da imagem!`)
              .setImage(avatar) 
              .setFooter(`• Requesitado por: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}));
          
            const row = new Discord.MessageActionRow().addComponents(
                new Discord.MessageButton()
                .setStyle("LINK")  
                .setLabel("Download")
                .setURL(user.displayAvatarURL({ size: 2048, dynamic: true, format: "png"}))
          )
           
           await message.channel.send({ephemeral: true, embeds: [embed], components: [row]}); 
          
          
    }
}