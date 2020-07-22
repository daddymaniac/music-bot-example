const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "queue",
    description: "Show the queue list",
    cooldown: 3,
    execute(message) {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue) return message.channel.send("There is nothing playing.");
        let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor("Song queue")
            .setDescription(`${serverQueue.songs.map(song => `**•** ${song.title}`).join("\n")}`)
            .setFooter(`Now playing: ${serverQueue.songs[0].title}`)
        return message.channel.send(embed);
    }
};