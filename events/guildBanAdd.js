const Sleep = require('../modules/sleep'); // delayInMilliseconds
const Log = require('../modules/logger'); // DEBUG, ERROR, FATAL, INFO, LOG, WARN; │, ─, ├─, └─

module.exports = {
    name: "guildBanAdd",
    once: false, // Whether or not this even should only be triggered once
    async execute(ban) {
        await Log('append', 'guildBanAdd', "", ''); // Logs
    }
};
