const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle("Vos recettes disponibles")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(0x00AE86)
        .setDescription("Aucune recette disponible pour l'instant revenez plus tard...")
        /*
         * Takes a Date object, defaults to current date.
         */
        .setTimestamp()
        .addFields({
            name: "- 1 recette disponible",
            value: "Recette posséder : http://www.ausommet.fr/recette-pates-beurre.html"
        })
    message.channel.send(embed).then(async embedMessage => {
        await embedMessage.react('👨‍🍳');
    }).catch(console.error);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "recette",
    category: "Miscelaneous",
    description: "Affiche toute les recettes",
    usage: "recette"
};