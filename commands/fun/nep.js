const nep = require('../nep.json');
const Discord = require('discord.js');
const customisation = require('../customisation.json');

exports.run = (client, message, args) => {
    args = args.join(" ");
    const embed = new Discord.MessageEmbed()
    .setColor(Math.floor(Math.random()*16777215))
    .setTimestamp()
    .setTitle("NEP NEP TOP NEP")
    .setImage(`${nep[Math.floor(Math.random() * nep.length)]}`)
    .setFooter(`© Cook Bot par ${customisation.ownername}`);
    message.channel.send({embed})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: 'nep',
  category: "Miscelaneous",
  description: 'Envoie une image random de nep gif ou image.',
  usage: 'nep'
};
