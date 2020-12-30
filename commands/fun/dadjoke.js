const dadjoke = require('../dadjoke.json');
exports.run = (client, message, args) => {
    args = args.join(" ");
    message.channel.send(`${dadjoke[Math.floor(Math.random() * dadjoke.length)]}`);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "dadjoke",
    category: "Miscelaneous",
    description: 'Envoie un pere horrible qui te fait pleuré',
    usage: 'dadjoke'
}
