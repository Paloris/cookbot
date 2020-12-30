const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/fox_girl");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, tenez vôtre Fox Girl`)
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
    name: 'kitsune',
    category: "Miscelaneous",
    description: 'Kitsunes OwO',
    usage: 'kitsune'
  };