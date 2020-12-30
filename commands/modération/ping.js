exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const msg = await message.channel.send("Votre ping est de :");
message.channel.send(`Aller-Retour : **${msg.createdTimestamp - message.createdTimestamp}ms**. \nBattement de coeur est de **${Math.round(client.ws.ping)}ms**`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "ping",
  category: "Miscelaneous",
  description: "La commande ping qui sert a rien",
  usage: "ping"
};
