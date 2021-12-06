const Discord = require("discord.js")

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
      //let channel = client.channels.cache.get("902330008155070495")
      //channel.join()
      let canal = client.channels.cache.get("902326610055823430")
            const acordei = new Discord.MessageEmbed()
            .setTitle(`> Made by Sr.Luzifer`)
            .setDescription(` Inciciando novamente !!!`)
             .setTimestamp()
            .setColor('PURPLE')
            setStatus();
            setInterval(() => setStatus(), 5000)
            canal.send({embeds: [acordei]})

            function setStatus() { 
              var tabela = [ 
                {name: `Cuido de ${client.users.cache.size} usuários!`, type: 'PLAYING'}, 
                {name: `Fui feito pelo Sr.Luzifer#0666 e Astaroth#0373!`, type: 'COMPETING'}, 
                {name: `Estou a gerenciar  ${client.channels.cache.size} canais!`, type: 'WATCHING'},
                {name:` Filho do Logan :D`}, 
                {name: `+help`, type: 'STREAMING', url: 'https://www.twitch.tv/masterleahsakurai'},
                 {name: ` Filho do Logan :D`, type: 'STREAMING', url: 'https://www.twitch.tv/masterleahsakurai'}
              
              ];
    
              var altstatus = tabela[Math.floor(Math.random() * tabela.length)]
              client.user.setActivity(altstatus) }
            setInterval(() => setStatus(), 5000)
    }
    
}



