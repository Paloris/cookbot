const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("Vous devez mentionner quelqu'un pour le gifler");
    if(message.mentions.users.first().id === "156481339112161280") return message.reply('Tu ne peux pas faire de mal à mon ami :facepalm:');
    if(message.mentions.users.first().id === "792414588443557950") return message.reply('Pourquoi tu veut me giffler sale malade va :angry:');
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/slap");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.mentions.users.first().username} Vous avez été giflé par ${message.author.username}`)
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
    name: 'slap',
    category: "Miscelaneous",
    description: 'Donne une giffle a quelqun',
    usage: 'slap'
  };