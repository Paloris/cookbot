const urban = require('urban');
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        if (args.length < 1) {
            return message.channel.send('Veuillez saisir un mot');
        }
        let word = args.join(' ');

        urban(word).first(json => {
            if (!json) {
                return message.channel.send('Un tel mot n`existe pas !');
            }
            const def = new Discord.MessageEmbed()
                .setTitle(json.word)
                .setDescription(json.definition)
                .addField('Upvotes', json.thumbs_up, true)
                .addField('Downvotes', json.thumbs_down, true)
                .setTimestamp(new Date())
                .setFooter(`Ecrit par ${json.author}`);

            message.channel.send(def);
        });
    };

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
    };
  
exports.help = {
    name: 'urban',
    category: "Miscelaneous",
    description: 'Besoin de chercher dans le dico ?',
    usage: 'urban <word>'
  };