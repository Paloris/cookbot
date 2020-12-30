const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    const { body } = await superagent
    .get("https://nekos.life/api/neko");
    link = body.neko;
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle("Tenez vôtre Your Neko OwO")
    .setImage(body.neko) 
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
    name: 'neko',
    category: "Miscelaneous",
    description: 'Envoie un random Neko OwO',
    usage: 'neko'
  };
