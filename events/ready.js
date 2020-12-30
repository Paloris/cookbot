module.exports = async client => {
  // Log that the bot is online.
  client.logger.log(`${client.user.tag}, prêt à servir des assiettes remplis !`, "prêt");

  // Make the bot "play the game" which is the help command with default prefix.
  client.user.setActivity(
    `${client.user.tag}, prêt à servir des assiettes remplis !`, 
    {type: "PLAYING"}
  ).then(presence => client.logger.log(`Activité réglée sur ${presence.game ? presence.game.name : 'Cuisine Operationnel'}`));
};
