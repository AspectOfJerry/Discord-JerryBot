const {Client, Collection, Intents, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Modal, TextInputComponent} = require("discord.js");

const {PermissionCheck, Log, Sleep} = require("../../../../modules/JerryUtils.js");


module.exports = async function (client, interaction) {
    await interaction.deferReply();

    if(await PermissionCheck(interaction) === false) {
        return;
    }

    // Declaring variables

    // Checks

    // Main
    interaction.editReply("This command is currently unavailable.");
};
