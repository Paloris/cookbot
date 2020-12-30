const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("Vous devez mentionner quelqu'un pour lui donner la fessée");
    if(message.mentions.users.first().id === "156481339112161280") return message.reply('Tu ne peux pas donner la fessée à mon Dev, espèce de plébien.:facepalm: Il vous donnera une fessée');
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/spank");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`${message.author.username} à donné une fessée à ${message.mentions.users.first().username} ouch ca fait mal :(`)
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
    name: 'spank',
    category: "Miscelaneous",
    description: 'Donnez une fussée a quelqun',
    usage: 'spank'
  };