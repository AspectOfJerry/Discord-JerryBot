const {Log, Sleep} = require('../modules/JerryUtils');

module.exports = {
    name: "inviteDelete",
    once: false, // Whether or not this event should only be triggered once
    async execute(invite) {
        await Log('append', 'inviteDelete', `An invite from <@${invite.inviter?.tag}> to <#${invite.channel.name}> in <${invite.guild?.name}> was deleted
            expiresAt: ${invite.expiresAt},
            maxUses: ${invite.maxUses},
            temporary: ${invite.temporary},
            code: ${invite.code},
            url: ${invite.url}.`, 'DEBUG'); // Logs
    }
};