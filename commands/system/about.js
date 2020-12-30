const Discord = require('discord.js');
const customisation = require('../customisation.json');
exports.run = (client, msg, args) => {
  msg.delete();
  const embed = new Discord.MessageEmbed()
  .setColor(0xFFFF00)
  .addField('A propos du bot', `Cook Bot est un bot crée par ${customisation.ownername}, fait pour tout serveur de discords qui a besoin d'être modéré. Il est écrit avec Discord.js.`)
  .setFooter(`© Cook Bot par ${customisation.ownername}`);
  msg.channel.send({embed});
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};
  
exports.help = {
    name: 'about',
    category: "Miscelaneous",
    description: 'A propos du bot.',
    usage: 'about'
  };