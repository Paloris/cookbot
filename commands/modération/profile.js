const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Photo de profil de : ${message.author.username}`, `${message.author.avatarURL()}`)
        .setImage(`${message.author.avatarURL({
            dynamic: true,
            format: "png",
            size: 4096
        })}`);
    message.channel.send(embed).then(async embedMessage => {
        await embedMessage.react('👍');
    }).catch(console.error);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "profile",
    category: "Miscelaneous",
    description: "Affiche votre profile.",
    usage: "profile"
};