const Discord = require('discord.js');

exports.run = (client, message) => {
    let args = message.content.split(" ").slice(1);
    message.delete();
    if (args.join(" ") === "@everyone" || args.join(" ") === "@here") return message.channel.send("Vous ne me ferez pas pinger quelqu'un BOI !");
    message.channel.send(args.join(" "));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
    name: "say",
    category: "Miscelaneous",
    description: "Fait que le bot repete votre message",
    usage: "say [message]"
};
