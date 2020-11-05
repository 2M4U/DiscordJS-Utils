/**
 * @desc Simplified Discord Utility Belt 
 */
const { Discord, Util } = require('discord.js');
const Console = require("./console");

const embed = new Discord.MessageEmbed();

/**
 * 
 * @param {*} text Input string to convert to TitleCase
 */
function titleCase(text) {
    return text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

/**
 * 
 * @param {*} string Escape Markdown such as #### Hello, World
 */

function EscMD(string) {
    return Util.escapeMarkdown(string);
};

/**
 * 
 * @param {*} array Object Array (either {} or [])
 */
function randomizer(array) {
    if (typeof array !== "object") return;
    return array[Math.floor((Math.random() * array.length) + 0)];
};

/**
 * 
 * @param {*} time Unix String input
 */
function formatTime(time) {
    const normalizeTime = (time) => {
        time.length === 1 ? time.padStart(2, '0') : time;
    }

    let seconds = (time / 1000).toFixed(0);
    let minutes = Math.floor(parseInt(seconds) / 60).toString();
    let hours = '';

    if (parseInt(minutes) > 59) {
        hours = normalizeTime(Math.floor(parseInt(minutes) / 60).toString());
        minutes = normalizeTime((parseInt(minutes) - parseInt(hours) * 60).toString());
    }
    seconds = normalizeTime(Math.floor(parseInt(seconds) % 60).toString());

    let hrs = '';
    let mins = '';
    let secs = '';
    if (hours > 1) hrs = 'hrs';
    if (minutes > 1) mins = 'mins';
    if (seconds > 1) secs = 'secs';

    if (hours !== '') {
        return `${hours}${hrs} ${minutes}${mins} ${seconds}${secs}`;
    }

    if (minutes !== '') {
        return `${minutes}${mins} ${seconds}${secs}`;
    }
    return `${seconds}${secs}`;
};

/**
 * 
 * @param {*} member <GuildMember> Object from guildMemberAdd or guildMemberRemove 
 */
function joinEmbed(member) {
    embed.addField('User joined:', `${member.user.username}`)
        .addField('Total Users:', `${member.guild.memberCount}`)
        .setTimestamp();
    return embed;
};

/**
 * 
 * @param {*} member <GuildMember> Object from guildMemberAdd or guildMemberRemove 
 */
function leaveEmbed(member) {
    embed.addField('User left:', `${member.user.username}`)
        .addField('Total Users:', `${member.guild.memberCount}`)
        .setTimestamp();
    return embed;
};

/**
 * 
 * @param {*} message To get channel to send the embed to. [Required]
 * @param {*} error Message.content field. [Required]
 * @param {*} timeout Timeout for when to auto-delete this embed (time is in MS). [Optional]
 */
function errorEmbed(message, error, timeout) {
    if (error.length > 256) {
        embed.setColor(`RED`)
            .setTitle(`The error is ${error.length - 256} over the embed character limit.\nOutput has been put into console.`)
        message.channel.send({ embed: embed }).then((msg) => {
            if (timeout) {
                msg.delete({ timeout: timeout })
            }
        });
        Console.error("DJS-Utils-ErrorEmbed", error);
    }

    embed.setColor(`RED`)
        .setTitle(error)
    message.channel.send({ embed: embed }).then((msg) => {
        if (timeout) {
            msg.delete({ timeout: timeout })
        }
    });
};

/**
 * 
 * @param {*} src Source of Where
 * @param {*} msg Message of what (stacktrace)
 */
async function consoleError(src, msg) {
    return Console.error(src, msg);
};

/**
 * 
 * @param {*} src Source of Where
 * @param {*} msg Message of what (stacktrace)
 */
async function consoleWarn(src, msg) {
    return Console.warn(src, msg);
};

/**
 * 
 * @param {*} src Source of Where
 * @param {*} msg Message of what (stacktrace)
 */
async function consoleInfo(src, msg) {
    return Console.info(src, msg);
};

/**
 * 
 * @param {*} src Source of Where
 * @param {*} msg Message of what (stacktrace)
 */
async function consoleDebug(src, msg) {
    return Console.debug(src, msg);
};

module.exports = {
    consoleDebug,
    consoleError,
    consoleInfo,
    consoleWarn,
    formatTime,
    titleCase,
    EscMD,
    errorEmbed,
    joinEmbed,
    leaveEmbed,
    randomizer
}