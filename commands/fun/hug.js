const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("Vous devez mentionner quelqu'un pour le serrer dans vos bras");
    const { body } = await superagent
    .get("https://nekos.life/api/hug");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.author.username} serre dans ces bras ${message.mentions.users.first().username}`)
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
    name: 'hug',
    category: "Miscelaneous",
    description: 'Hugs quelqun OwO',
    usage: 'hug'
  };
