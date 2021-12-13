module.exports = {
    name: "8ball",
    run: async (client,message, args) => {
        
        let name = ('8ball');
        let avatar = {avatar: 'https://cdn.discordapp.com/attachments/803457046594584607/868602876203761724/magicBallStart.png'}
        let vieirinha = [
        'Sim', 'Não', 'O que tu achas...NÃO!', 'Maybe...', 'Nunca', 'Yep',
        ];
        let arg = vieirinha[Math.floor(Math.random() * vieirinha.length)] 
        try {
            message.channel.createWebhook(name, avatar).then(w => { 
                if(args.length == 0 ) return w.send('**Você precisa informar alguma coisa para eu descobrir').then(() => w.delete())
                w.send(arg).then(() => w.delete())});
        } catch (err) {
    message.reply('**Eu não tenho permissão para criar um Webhook neste servidor**')
}}}
