exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    let twoWeeks = null
    message.delete(2)
    methods = {
        number: function (m) {
            m = m.filter(m => m.createdTimestamp > Date.now() - 1209600000)
            return m
        },
        bots: function (m) {
            m = m.filter(m => m.author.bot == true && m.createdTimestamp > Date.now() - 1209600000)
            return m
        },
        embeds: function (m) {
            m = m.filter(m => m.embeds.length > 0 && m.createdTimestamp > Date.now() - 1209600000)
            return m
        },
        client: function (m) {
            m = m.filter(m => m.author.id == args[0] && m.createdTimestamp > Date.now() - 1209600000)
            return m
        },
        mention: function (m) {
            m = m.filter(m => m.author.id == message.mentions.members.first().id && m.createdTimestamp > Date.now() - 1209600000)
            return m
        },
        string: function (m) {
            express = message.content.match(/\".{1,}\"/i)[0].substring(1, message.content.match(/\".{1,}\"/i)[0].length - 1)
            m = m.filter(m => m.content.toLowerCase().indexOf(express.toLowerCase()) != -1 && m.createdTimestamp > Date.now() - 1209600000)
            return m
        },
        prefixes: function (m) {
            prefixesCon = ['.', '/', '//', 't!', '~>', '>>', ';;', '=', '-', 't@', ',', '\\', '!']
            m = m.filter(m => {
                console.log(prefixesCon)
                for (i = 0; i < prefixesCon.length; i++) {
                    if (m.content.startsWith(prefixesCon[i]) && m.createdTimestamp > Date.now() - 1209600000) {
                        return m
                    }
                }
            })
            return m
        }
    }
    let totalFound = 0
    if (args[0]) {
        if (parseInt(args[0]) >= 1 && parseInt(args[0]) <= 1000) {
            return massDelete(parseInt(args[0]), 0, "number")
        }
        if (args[0].toLowerCase() == 'prefixes') {
            return massDelete(parseInt(args[1]), 0, "prefixes")
        }
        if (args[0].toLowerCase() == 'bots') {
            return massDelete(parseInt(args[1]), 0, "bots")
        }
        if (args[0].toLowerCase() == 'embeds') {
            return massDelete(parseInt(args[1]), 0, "embeds")
        }
        if (client.users.get(args[0])) {
            return massDelete(parseInt(args[1]), 0, "client")
        }
        if (message.mentions.members.first()) {
            return massDelete(parseInt(args[1]), 0, "mention")
        }
        if (message.content.match(/\".{1,}\"/i) != null) {
            return massDelete(parseInt(args[1]), 0, "string")
        }
    }
    return this.description(message, Discord)

    async function massDelete(count, totalDeleted, sortMethod, m) {
        if (!count) {
            count = 50
        }
        if (!m) {
            mBef = message.id
        } else {
            mBef = m.array()[m.array().length - 1].id
        }
        limit = count - totalDeleted > 100 ? 100 : count - totalDeleted
        m = await message.channel.fetchMessages({ limit: limit, before: mBef })
        totalFound += m.array().length
        if (m.array()[m.array().length - 1].createdTimestamp < Date.now() - 1209600000) {
            twoWeeks = `\nCertains messages ont été détectés comme datant de plus de deux semaines et n'ont pas pu être supprimés !`
        }
        mN = methods[sortMethod](m)
        totalDeleted += mN.array().length
        if (mN.array().length > 1) {
            await message.channel.bulkDelete(mN)
        } else if (mN.array().length == 1) {
            mN.array()[0].delete(0)
        }
        if (count > totalFound && limit == m.array().length) {
            return await massDelete(count, totalDeleted, sortMethod, m)
        }
        return embedSmall(`**Messages trouvés:** \`${totalFound}\`\n**Trouvé dans:** <#${message.channel.id}>\n**Supprimé:** \`${totalDeleted}\`${twoWeeks != null ? twoWeeks : ""}`)
    }
    function embedSmall(str) {
        embed = new Discord.RichEmbed()

            .setAuthor(message.author.username, message.author.avatarURL)
            .setColor(0xff0000)
            .setDescription(str)
            .setTimestamp()
        message.channel.send({
            embed
        }).then(message => {
            message.delete(50000)
        })
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Bot Admin"
};

exports.help = {
    name: "clear",
    category: "System",
    description: "Pour clear des message pardi !",
    usage: "clear"
};
