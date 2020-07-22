module.exports = {
    name: "np",
    description: "Show the current played music title",
    cooldown: 3,
    execute(message) {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue) return message.channel.send("There is nothing playing.");
        return message.channel.send(`🎶 Now playing: **\`${serverQueue.songs[0].title}\`**`);
    }
};