const Discord = require('discord.js');
const customisation = require('../customisation.json');

exports.run = (client, message, args) => {
    message.delete();
    const embed = new Discord.MessageEmbed()
        .setTitle("Recette New York")
        .setDescription("Toutes les recettes disponibles du niveau 1-10 de New York")
        .addFields({
            name: "• Beignet nature", value: "**x1** Pate", inline: false
        })
        .addFields({
            name: "• Beignet Chocolat", value: "**x1** Beignet Nature & **x1** Glaçage Chocolat", inline: false
        })
        .addFields({
            name: "• Beignet Fraise", value: "**x1** Beignet Nature & **x1** Glaçage Fraise", inline: false
        })
        .addFields({
            name: "• Beignet au chocolat et à la noix de coco", value: "**x1** Beignet Chocolat & **x1** Noix de coco", inline: false
        })
        .addFields({
            name: "• Beignet aux fraises avec des éclats", value: "**x1** Beignet Fraise & **x1** Eclat", inline: false
        })
        .setColor("#AA9900")
        .setFooter(`© Cook Bot par ${customisation.ownername}`);

    message.channel.send({ embed });
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: 'newyork',
    category: "Miscelaneous",
    description: 'Commande en test.',
    usage: 'newyork'
};