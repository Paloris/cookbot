const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  let reason = args.slice(0).join(' ');
  if (reason.length < 1) return message.reply('You can\'t smack thin air, pick someone fool.');
  if(message.mentions.users.first().id === "242263403001937920") return message.reply('You can\'t hurt him you pleblord.:facepalm:');
  message.channel.send(`${message.author.username} smacked ${message.mentions.users.first().username}.`)
  }
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };

exports.help = {
  name: 'smack',
  category: "Miscelaneous",
  description: 'Embrasse un utillisateur',
  usage: 'smack <user>'
};
