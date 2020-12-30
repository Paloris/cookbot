const request = require('node-superfetch');
const Discord = require('discord.js');

exports.run = async (client, message, args, prefix) => {
    //name: 'kitsu-manga',
    //aliases: ['kmanga', 'manga', 'kitsu-m'],
    //description: 'provides info about a particular manga',
    //usage: '[Manga Name]',
    //async execute(client, kayn, REGIONS, config, message, args, con, guilds) {
        function shorten(text, maxLen = 2000) {
            return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
        }
        const query = args.join(' ');

        try {
			const { text } = await request
				.get('https://kitsu.io/api/edge/manga')
				.query({ 'filter[text]': query });
			const body = JSON.parse(text);
			if (!body.data.length) return message.reply('N`a pu trouver aucun résultat.');
			const data = body.data[0].attributes;
			const embed = new Discord.MessageEmbed()
				.setColor(0xF75239)
				.setAuthor('Kitsu.io', 'https://i.imgur.com/lVqooyd.png', 'https://kitsu.io/explore/manga')
				.setURL(`https://kitsu.io/manga/${data.slug}`)
				.setThumbnail(data.posterImage ? data.posterImage.original : null)
				.setTitle(data.canonicalTitle)
				.setDescription(shorten(data.synopsis))
				.addField('❯ Type', `${data.subtype} - ${data.status}`, true)
				.addField('❯ Volumes / Chapters', `${data.volumeCount || '???'} / ${data.chapterCount || '???'}`, true)
				.addField('❯ Start Date', data.startDate ? new Date(data.startDate).toDateString() : '???', true)
				.addField('❯ End Date', data.endDate ? new Date(data.endDate).toDateString() : '???', true);
			return message.channel.send(embed);
		} catch (err) {
			return message.reply(`Oh non, une erreur s'est produite: \`${err.message}\`. Réessayer plus tard!`);
		}
    };
exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: "User"
  };
  
  exports.help = {
    name: "manga",
    category: "Miscelaneous",
    description: "Fournit des informations sur un manga particulier",
    usage: "manga [manga]"
  };