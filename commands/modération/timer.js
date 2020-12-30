const Discord = module.require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

  let Timer = args[0];

  if(!args[0]){
    return message.channel.send(":x: " + "| Veuillez entrer une période de temps suivie par \"s or m or h\"");
  }

  if(args[0] <= 0){
    return message.channel.send(":x: " + "| Veuillez entrer une période de temps suivie par \"s or m or h\"");
  }

  message.channel.send(":white_check_mark: " + "| Démarrage de la minuterie pour: " + `${ms(ms(Timer), {long: true})}`)

  setTimeout(function(){
    message.channel.send(message.author.toString() + ` Le timer est terminé, il a duré: ${ms(ms(Timer), {long: true})}`)

  }, ms(Timer));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};
  
exports.help = {
    name: 'timer',
    category: "Miscelaneous",
    description: 'Create a timer.',
    usage: 'timer'
  };