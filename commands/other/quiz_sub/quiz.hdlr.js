const fs = require('fs');
const {Client, Collection, Intents, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Modal, TextInputComponent} = require('discord.js');
const {SlashCommandBuilder} = require("@discordjs/builders");

const {Log, Sleep} = require('../../../modules/JerryUtils');

const quiz_1_name = "esp_translate"


module.exports = {
    data: new SlashCommandBuilder()
        .setName('quiz')
        .setDescription("Custom quiz commands")
        .addSubcommand(subcommand =>
            subcommand
                .setName(`${quiz_1_name}`)
                .setDescription("Quiz on word translation"))
    // .addSubcommand(subcommand =>
    //     subcommand
    //         .setName('SUBCMD_NAME')
    //         .setDescription("SUBCMD_DESCRIPTION")
    //         .addStringOption((options) =>
    //             options
    //                 .setName('SUBCMD_OPTION_NAME')
    //                 .setDescription("[REQUIRED/OPTIONAL] SUBCMD_OPTION_DESCRIPTION")
    //                 .setRequired(true / false)))
    ,
    async execute(client, interaction) {
        await Log('append', interaction.guild.id, `'${interaction.user.tag}' executed '/quiz [...]'.`, 'INFO');

        // Declaring variables
        const subcommand = interaction.options.getSubcommand();

        // Checks
        await interaction.reply('This command is currently under development and will be available soon.');
        return;

        // Main
        switch(subcommand) {
            case 'SUBCMD_NAME': {
                await Log('append', "hdlr", `├─'${interaction.user.tag}' executed '/quiz ${quiz_1_name}'.`, 'INFO');

                // Prep

                // Calling the subcommand file
                await Log('append', "hdlr", `├─Handing controls to subcommand file...`, 'DEBUG');
                require(`./${quiz_1_name}.subcmd.js`)(client, interaction);
            }
                break;
            case 'SUBCMD_NAME': {
                await Log('append', "hdlr", `├─'${interaction.user.tag}' executed '/CMD_NAME SUBCMD_NAME'.`, 'INFO');

                // Prep

                // Calling the subcommand file
                await Log('append', "hdlr", `├─Handing controls to subcommand file...`, 'DEBUG');
                require('./FILE.subcmd.js.js')(client, interaction);
            }
                break;
            default:
                throw "Invalid subcommand.";
        }
    }
};
