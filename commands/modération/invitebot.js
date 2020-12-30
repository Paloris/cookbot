const Discord = require('discord.js')
const info = require('../infoMsgs.json');
const customisation = require('../customisation.json');

exports.run = (client, message) => {
    const embed = new Discord.MessageEmbed()
        .setColor(Math.floor(Math.random() * 16777215))
        .setTitle("Cook bot information:", '')
        .addField('Important Information', info.infoMsg1)
        .addField('Inviter le bot', info.infoMsg2)
        .addField('Lien important', info.infoMsg3)
        .setFooter(`© Cook Bot par ${customisation.ownername}`);

    message.author.send({ embed }).catch(e => {
        if (e) {
            message.channel.send(`Erreur. Il semble que vous bloquez vos DM, alors je vais l'envoyer ici à la place.`);
            message.channel.send({ embed });
        }
    });
    message.reply("Regardez vos messages privés!");
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: 'invitebot',
    category: "Miscelaneous",
    description: 'DMs you the bot\'s invite link.',
    usage: 'invitebot'
};
