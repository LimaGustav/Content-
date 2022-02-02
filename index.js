const axios = require('axios')

const api = axios.create({
    baseURL: 'https://moderationapi.com/api/v1/moderation/text'
})

const Discord = require('discord.js')

const bot = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const tokenBot = 'OTM4NDEyMTAxMDk2MDU0Nzg1.Yfp6Xw.VJ1sKIgT7uEe11A1_XFBO9rXrXY';

bot.login(tokenBot);
bot.on('ready', () => {
    console.log('estou pronto para ser usado')
})

bot.on('message', msg => {

    const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmE2YWQ5ZmRjNGRmMDAwOTk1NGM4MCIsInVzZXJJZCI6IjYxZmE2YWM1ZmRjNGRmMDAwOTk1NGM3ZSIsImlhdCI6MTY0MzgwODkzNH0.gRwXDJMw4AJ4rkVS9HPS8SACMbK-MObJaiLHLY33V34'

    console.log(msg.content)
    api.post(' ',{
        value: msg.content
    },
    {
        headers: {
            'Authorization': 'Bearer ' + token1
        }
    }
    ).then(response => {
        console.log(response.data)
        if (response.data.toxicity.label_scores.TOXICITY > 0.70) {
            await fucntion ()
        }
    }).catch(erro => console.log(erro))
})