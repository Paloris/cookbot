const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("Vous devez mentionner quelqu'un pour le caresser");
    if (message.mentions.users.first().id === "156481339112161280") return message.channel.send('<a:yayyy:497742636439044096>');
    const { body } = await superagent
    .get("https://nekos.life/api/pat");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.author.username} caresse ${message.mentions.users.first().username}`)
    .setImage(body.url) 
    .setFooter(`© Cook Bot par ${customisation.ownername}`);
    message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};
  
  exports.help = {
    name: 'pat',
    category: "Miscelaneous",
    description: 'Carassez quelqun',
    usage: 'pat'
  };
