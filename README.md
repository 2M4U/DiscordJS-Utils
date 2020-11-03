Basic DiscordJS-Utils
=======
The purpose behind this package is so that you don't have to create the embeds inside your code and make your code "`ugly`".

Usage
======

#### Join Embed
```js
const utils = require('basic-discordjs-utils');
module.exports = async (client, member) => {
var joinChannel = member.guild.channels.find((channel) => channel.id == "123456789123456");
    let embed = utils.joinEmbed(member);
    joinChannel.send(embed);
};
```

#### Leave Embed
```js
const utils = require('basic-discordjs-utils');
module.exports = async (client, member) => {
var leaveChannel = member.guild.channels.find((channel) => channel.id == "123456789123456");
    let embed = utils.leaveEmbed(member);
    leaveChannel.send(embed);
};
```

#### Randomizer
```js
const utils = require('basic-discordjs-utils');
module.exports = async () => {
/** 
 * Work In Progress
 */
};
```

Requirements
======
This package requires [`discord.js`](https://www.npmjs.com/package/discord.js) v12+ 
