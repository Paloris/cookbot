const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');


exports.run = async (client, message, args, tools) => {
    if (!args[0]) return message.reply("Vous devez saisir une phrase pour OwOify")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/owoify?text=" + args.join('%20'));
    
    
    message.channel.send(body.owo)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: 'owoify',
  category: "Miscelaneous",
  description: 'OwO-ify un message',
  usage: 'owoify'
};
