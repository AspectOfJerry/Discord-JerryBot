const {Log, Sleep} = require('../modules/JerryUtils');

module.exports = {
    name: "inviteCreate",
    once: false, // Whether or not this event should only be triggered once
    async execute(invite) {
        await Log('append', 'inviteCreate', `<@${invite.inviter?.tag}> created an invite to <#${invite.channel.name}> in <${invite.guild?.name}>
            expiresAt: ${invite.expiresAt},
            maxUses: ${invite.maxUses},
            temporary: ${invite.temporary},
            code: ${invite.code},
            url: ${invite.url}.`, 'DEBUG'); // Logs
    }
};
