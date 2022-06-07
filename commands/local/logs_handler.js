const fs = require('fs');
const {Client, Intents, Collection, MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');
const {SlashCommandBuilder} = require("@discordjs/builders");
const {joinVoiceChannel, createAudioPlayer, createAudioResource, entersState, StreamType, AudioPlayerStatus, VoiceConnectionStatus, getVoiceConnection} = require('@discordjs/voice');

const Sleep = require('../../modules/sleep'); //delayInMilliseconds;
const Log = require('../../modules/logger'); //DEBUG, ERROR, FATAL, INFO, LOG, WARN; │, ─, ├─, └─;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('log')
        .setDescription("Perform an action with the bot log files.")
        .addSubcommand(subcommand =>
            subcommand
                .setName('append')
                .setDescription("Appends a string to the log file.")
                .addStringOption((options) =>
                    options
                        .setName('string')
                        .setDescription("[REQUIRED] The string to append to the log file.")
                        .setRequired(true))
                .addBooleanOption((options) =>
                    options
                        .setName('ephemeral')
                        .setDescription("[OPTIONAL] Whether you want the bot's messages to only be visible to yourself. Defaults to false.")
                        .setRequired(false)))
        .addSubcommand(subcommand =>
            subcommand
                .setName('read')
                .setDescription("Read a line from the log file starting with the latest line.")
                .addIntegerOption((options) =>
                    options
                        .setName('offset')
                        .setDescription("[OPTIONAL] Number of the line to read starting with the latest line. Defaults to 0 (latest line)")
                        .setRequired(false))
                .addBooleanOption((options) =>
                    options
                        .setName('ephemeral')
                        .setDescription("[OPTIONAL] Whether you want the bot's messages to only be visible to yourself. Defaults to false.")
                        .setRequired(false))),
    async execute(client, interaction) {
        await Log(interaction.guild.id, `'${interaction.user.tag}' executed '/log [...]'.`, 'INFO'); //Logs
        //Declaring variables

        //Code
        if(interaction.options.getSubcommand() == 'append') {
            //Declaring variables
            await Log(interaction.guild.id, `├─'${interaction.user.tag}' executed '/log append'.`, 'INFO'); //Logs

            const is_ephemeral = interaction.options.getBoolean('ephemeral') || false;
            await Log(interaction.guild.id, `  ├─ephemeral: ${is_ephemeral}`, 'INFO'); //Logs

            const string = interaction.options.getString('string');
            await Log(interaction.guild.id, `  └─string: ${string}`, 'INFO');  //Logs

            const object = Log(interaction.guild.id, string, 'LOG', true);

            //Calling the subcommand file
            require('./log_subcommands/logs_append.subcommand')(client, interaction, is_ephemeral, string, object);
        } else if(interaction.options.getSubcommand() == 'read') {

            //Calling the subcommand file
            require('./logs_read.subcommand')(client, interaction, is_ephemeral);
        } else {
            throw "Invalid subcommand. `logs_handler.js`";
        }
    }
}