const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to cuddle them");
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/cuddle");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.author.username} cuddled ${message.mentions.users.first().username}`)
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
    name: 'cuddle',
    category: "Miscelaneous",
    description: 'Calin quelqun oWo',
    usage: 'cuddle'
  };