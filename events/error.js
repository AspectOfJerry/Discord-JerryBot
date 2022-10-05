const Sleep = require('../modules/sleep'); // delayInMilliseconds
const Log = require('../modules/logger'); // DEBUG, ERROR, FATAL, INFO, LOG, WARN; │, ─, ├─, └─

module.exports = {
    name: "error",
    once: false,
    async execute(error) {
        console.log(error);
        await Log('append', 'error', error, 'ERROR'); // Logs
    }
};
