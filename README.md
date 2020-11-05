Basic Discord.js Utility Belt
=======
This is a light-weight utility belt of utils for [`discord.js v12+`](https://www.npmjs.com/package/discord.js)
#

Usage
======

#### Join Embed
```js
const utils = require('djs-util-belt');
module.exports = async (client, member) => {
var joinChannel = member.guild.channels.find((channel) => channel.id == "123456789123456");
    let embed = utils.joinEmbed(member);
    joinChannel.send(embed);
};
```

#### Leave Embed
```js
const utils = require('djs-util-belt');
module.exports = async (client, member) => {
var leaveChannel = member.guild.channels.find((channel) => channel.id == "123456789123456");
    let embed = utils.leaveEmbed(member);
    leaveChannel.send(embed);
};
```

#### Randomizer
```js
const utils = require('djs-util-belt');
module.exports = async () => {
/** 
 * Work In Progress
 */
};
```

#### Console Usage (Error, Debug, Warn, Info)
```js
const utils = require('djs-util-belt');
module.exports = async (client, member) => {
    var leaveChannel = member.guild.channels.find((channel) => channel.id == "123456789123456");

    utils.consoleDebug("guildMemberAdd Event", member);
    utils.consoleWarn("guildMemberAdd Event", member);
    utils.consoleInfo("guildMemberAdd Event", member);
    utils.consoleError("guildMemberAdd Event", member);

    let embed = utils.leaveEmbed(member);
    leaveChannel.send(embed);
};
```

Requirements
======
This package requires: 
#
[`discord.js v12+`](https://www.npmjs.com/package/discord.js), 
#
[`fancy-log`](https://www.npmjs.com/package/fancy-log), 
#
[`colors`](https://www.npmjs.com/package/colors)  

Credits
======
Creator: [CyberCDN](https://github.com/CyberCDN)
#
Testers: *Not Listed*