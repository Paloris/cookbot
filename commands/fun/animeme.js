const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const customisation = require('../customisation.json');

exports.run = (client, message, args) => {
    randomPuppy('animemes')
        .then(url => {
            const embed = new Discord.MessageEmbed()
                .setImage(url)
                .setColor('#ff9900')
                .setFooter(`© Cook Bot par ${customisation.ownername}`);
            return message.channel.send({ embed });
        });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "animemes",
    category: "Miscelaneous",
    description: "Envoie un post random de r/animemes",
    usage: "animemes"
};