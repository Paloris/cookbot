const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("Vous devez mentionner quelqu'un pour le chatouiller");
    if(message.mentions.users.first().id === "242263403001937920") return message.reply('Tu ne peut pas te chatouillez toi même.');
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/tickle");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.author.username} chatouille ${message.mentions.users.first().username}`)
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
    name: 'tickle',
    category: "Miscelaneous",
    description: 'Tickles someone OwO',
    usage: 'tickle'
  };