const Discord = require("discord.js")
const db = require("quick.db")
const client = new Discord.Client()
const prefix = "m!"


client.on("ready", async () => {
    console.log("Bot is ready!")
    client.user.setActivity("Discordopoly", {type: "COMPETING"})
})

client.on("message", async message => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).split(/ +/)
    const cmd = args.shift().toLowerCase()
})
