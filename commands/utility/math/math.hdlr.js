const fs = require('fs');
const {Client, Collection, Intents, MessageActionRow, MessageButton, MessageEmbed, Modal, TextInputComponent} = require('discord.js');
const {SlashCommandBuilder} = require("@discordjs/builders");

const {Log, Sleep} = require('../../../modules/JerryUtils');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('math')
        .setDescription("Commands related to mathematics")
        .addSubcommand(subcommand =>
            subcommand
                .setName('average')
                .setDescription("Calculate the average of real numbers.")
            // .addStringOption((options) =>
            //     options
            //         .setName('SUBCMD_OPTION_NAME')
            //         .setDescription("[REQUIRED/OPTIONAL] SUBCMD_OPTION_DESCRIPTION")
            //         .setRequired(true / false))
        )
    // .addSubcommand(subcommand =>
    //     subcommand
    //         .setName('SUBCMD_NAME')
    //         .setDescription("SUBCMD_DESCRIPTION")
    //     .addStringOption((options) =>
    //         options
    //             .setName('SUBCMD_OPTION_NAME')
    //             .setDescription("[REQUIRED/OPTIONAL] SUBCMD_OPTION_DESCRIPTION")
    //             .setRequired(true / false)))
    ,
    async execute(client, interaction) {
        await Log('append', interaction.guild.id, `'${interaction.user.tag}' executed '/math [...]'.`, 'INFO'); // Logs

        // Declaring variables
        const subcommand = interaction.options.getSubcommand();

        // Checks

        // Main
        switch(subcommand) {
            case 'SUBCMD_NAME': {
                await Log('append', "hdlr", `├─'${interaction.user.tag}' executed '/math average'.`, 'INFO'); // Logs

                // Prep

                // Calling the subcommand file
                await Log('append', "hdlr", `├─Handing controls to subcommand file...`, 'DEBUG'); // Logs
                require('./math_average.subcmd.js')(client, interaction);
            }
                break;
            case 'SUBCMD_NAME': {
                await Log('append', "hdlr", `├─'${interaction.user.tag}' executed '/CMD_NAME SUBCMD_NAME'.`, 'INFO'); // Logs

                // Prep

                // Calling the subcommand file
                await Log('append', "hdlr", `├─Handing controls to subcommand file...`, 'DEBUG'); // Logs
                require('./FILE.subcmd.js')(client, interaction);
            }
                break;
            default:
                throw "Invalid subcommand.";
        }
    }
};
