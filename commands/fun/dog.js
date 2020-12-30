const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    const { body } = await superagent
    .get("http://random.dog/woof.json");
    //.get('https://dog.ceo/api/breeds/image/random');
    link = body.url;
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle("Ici votre chien")
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
    name: 'dog',
    category: "Miscelaneous",
    description: 'Envoie un chien random',
    usage: 'dog'
  };
