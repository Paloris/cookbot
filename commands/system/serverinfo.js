const Discord = require('discord.js');
const customisation = require('../customisation.json');

function checkDays(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " day" : " days") + " ago";
};
exports.run = (client, message, args) => {
  let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
  let region = {
    "brazil": "Brazil",
    "eu-central": "Central Europe",
    "singapore": "Singapore",
    "us-central": "U.S. Central",
    "sydney": "Sydney",
    "us-east": "U.S. East",
    "us-south": "U.S. South",
    "us-west": "U.S. West",
    "eu-west": "Western Europe",
    "vip-us-east": "VIP U.S. East",
    "london": "London",
    "amsterdam": "Amsterdam",
    "hongkong": "Hong Kong"
  };

  var emojis;
  if (message.guild.emojis.size === 0) {
    emojis = 'None';
  } else {
    emojis = message.guild.emojis.size;
  }

  const embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL ? message.guild.iconURL : client.user.displayAvatarURL)
    .setThumbnail(message.guild.iconURL)
    .setTimestamp()
    .addField("Created", `${message.guild.createdAt.toString().substr(0, 15)},\n(${checkDays(message.guild.createdAt)})`, true)
    .addField("ID", `${message.guild.id}`, true)
    .addField("Propriétaire", `${message.guild.owner}`, true)
    .addField("Région", `${message.guild.region} `, true)
    .addField("Membres", `${message.guild.memberCount} membres\n${message.guild.members.cache.filter(member => !member.user.bot).size} humains\n${message.guild.members.cache.filter(member => member.user.bot).size} bots`, true)
    .addField("AFK Timeout", `${message.guild.afkTimeout}` / 60 + ' minutes', true)
    .addField("Rôles", `${message.guild.roles.cache.size}`, true)
    .addField("Emojis", `${message.guild.emojis.cache.size} emojis\n${message.guild.emojis.cache.filter(emoji => !emoji.animated).size} emojis statiques\n${message.guild.emojis.cache.filter(emoji => emoji.animated).size} emojis animés`, true)
    .addField("Nitro boost", `Tier: ${message.guild.premiumTier} \nNombre de boosts: ${message.guild.premiumSubscriptionCount} `, true)
    .setColor(Math.floor(Math.random() * 16777215))
    .setFooter(`© Cook Bot par ${customisation.ownername} `);
  message.channel.send({ embed });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: 'serverinfo',
  category: "Miscelaneous",
  description: 'Displays information about the server.',
  usage: 'serverinfo'
};