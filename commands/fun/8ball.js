const Discord = require("discord.js");
const customisation = require('../customisation.json');

exports.run = async (bot, message, args) => {
    if(!args[2]) return message.reply("Veuillez poser une question complète");
    let replies = [
        'Peut-être.',
	    'Certainement pas.',
	    'Je l`espère.',
	    'Pas dans vos rêves les plus fous.',
    	'Il y a de bonnes chances.',
	    'Il est fort probable.',
    	'Je pense aussi.',
    	'J`espère que non.',
    	'Jamais!',
    	'Pfft.',
	    'Desolé michel.',
    	'L`enfer, oui.',
    	'L`enfer, que non.',
    	'L`avenir est sombre.',
	    'L`avenir est incertain.',
	    'Je préfère ne pas dire.',
    	'Qui s`en soucie ??',
    	'Possiblement.',
    	'Jamais, jamais, jamais.',
    	'Il y a une petite chance.',
    	'Oui!',
    	'lol non.',
    	'Il y a une forte probabilité.',
    	'Quelle différence cela fait-il ??',
    	'Pas mon probléme.',
        'Demandez à quelqu`un d`autre.'
    ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let embed = new Discord.MessageEmbed()
    .setTitle("MAGIC 8 BALL!!!")
    .setColor("#AA9900")
    .addField("Question:", question)
    .addField("Réponse:", replies[result])
    .setFooter(`© Cook Bot par ${customisation.ownername}`);

    message.channel.send({embed});
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};
  
exports.help = {
	name: '8ball',
	category: "Miscelaneous",
    description: 'Pose une question au bot.',
    usage: '8ball (question)'
  };
  