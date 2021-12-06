const discord  =  require("discord.js")

module.exports = {
  name: "help",
  botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
  
  run: async (client,message,args) => { 
    const embed = new discord.MessageEmbed()
    .setColor("BLUE")
    .setAuthor("Painel de ajuda",client.user.displayAvatarURL())
    .setDescription("`+mclear `**|** `+mjoin `**|** `+mleave `**|** `+mloop`**|** `+mmove`**|** `+mnowplaying`**|** `+mpause`**|** `+mplay`**|** `+mqueue`**|** `+mremove`**|** `+mresume`**|** `+msearch`**|** `+mskip`**|** `+mseek`**|** `+mstop`**|** `+mvolume`**|** `+mradio`**|** `+m247`")
    .setFooter("Feito por Sr.Luzifer")
    message.channel.send( { embeds: [embed] } )
  }
}