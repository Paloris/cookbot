const fights = require('../fights.json');
exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  let reason = args.slice(0).join(' ');
  if (reason.length < 1) return message.reply('Tu peut pas te battre dans les airs mec, choisis une personne à combattre.');
  if(message.mentions.users.first().id === "482128001828651008") return message.reply('Kame KAme KAME HAAAAAA. ***It dealt ∞ damage. Vous avez été démoli.*** Cook Bot gagne');
  if(message.mentions.users.first().id === "242263403001937920") return message.reply('Vous pouvez\'pas vous battre vous meme .:facepalm: Il vous détruira :wink:');
      message.channel.send(`${message.author.username} combat ${message.mentions.users.first().username} ${fights[Math.floor(Math.random() * fights.length)]}`)
  }


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
  name: 'fight',
  category: "Miscelaneous",
  description: 'Combattez une personne de votre choix',
  usage: 'fight <user>'
};
