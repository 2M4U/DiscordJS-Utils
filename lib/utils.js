const Discord = require('discord.js');
const embed = new Discord.MessageEmbed();

function joinEmbed(member) {
    embed.addField('User joined:', `${member.user.username}`)
        .addField('Total Users:', `${member.guild.memberCount}`)
        .setTimestamp();
    return embed;
};

function leaveEmbed(member) {
    embed.addField('User left:', `${member.user.username}`)
        .addField('Total Users:', `${member.guild.memberCount}`)
        .setTimestamp();
    return embed;
};

function randomizer(array) {
    if (typeof array !== "object") return;
    return array[Math.floor((Math.random() * array.length) + 0)];
};

module.exports = { joinEmbed, leaveEmbed, randomizer }