const Discord = require('discord.js');
const superagent = require('superagent');
const sf = require("snekfetch");
const customisation = require('../customisation.json');

exports.run = async (client, message, args) => {
    const { body } = await superagent
    .get("http://aws.random.cat/meow");

    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle("Ici votre chat")
    .setImage(body.file) 
    .setFooter(`© Cook Bot par ${customisation.ownername}`);
    message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};
  
  exports.help = {
    name: 'cat',
    category: "Miscelaneous",
    description: 'Envoie un chat random',
    usage: 'cat'
  };
   