const {logger, sleep} = require("../modules/jerryUtils.js");


module.exports = {
    name: "inviteDelete",
    once: false, // Whether or not this event should only be triggered once
    async execute(invite) {
        logger.append("note", "0x495644", `[IVD] An invite from <@${invite.inviter?.tag}> to <#${invite.channel.name}> in <${invite.guild?.name}> was deleted
            expiresAt: ${invite.expiresAt},
            maxUses: ${invite.maxUses},
            temporary: ${invite.temporary},
            code: ${invite.code},
            url: ${invite.url}.`);
    }
};
