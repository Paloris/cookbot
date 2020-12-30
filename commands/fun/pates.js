exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    message.channel.send('**Tutoriel Pâte au beurre !** • http://www.ausommet.fr/recette-pates-beurre.html')
  .then(message => console.log(`Sent message: ${message.content}`))
  .catch(console.error);
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "pates",
    category: "Miscelaneous",
    description: "Apprenez a faire des pates grace a cette commande magique",
    usage: "pates"
  };
  