const {Client, Collection, Intents, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Modal, TextInputComponent} = require("discord.js");
const {SlashCommandBuilder} = require("@discordjs/builders");
const Path = require("path");

const {GetSubCommandFiles, Log, Sleep} = require("../../../modules/JerryUtils.js");


module.exports = {
    data: new SlashCommandBuilder()
        .setName("hypixel")
        .setDescription("Hypixel related commands")
        .addSubcommand(subcommand =>
            subcommand
                .setName("api")
                .setDescription("Makes an API request to Hypixel"))
    // .addSubcommand(subcommand =>
    // subcommand
    // .setName("SUBCMD_NAME")
    // .setDescription("SUBCMD_DESCRIPTION")
    // .addStringOption((options) =>
    //     options
    //         .setName("SUBCMD_OPTION_NAME")
    //         .setDescription("[REQUIRED/OPTIONAL] SUBCMD_OPTION_DESCRIPTION")
    //         .setRequired(true / false))
    // )
    ,
    async execute(client, interaction) {
        // Declaring variables

        // Checks

        // Main
        const subcommand_files = await GetSubCommandFiles(Path.resolve(__dirname, "./"), ".subcmd.js");

        for(const file of subcommand_files) {
            if(file.endsWith(interaction.options.getSubcommand() + ".subcmd.js")) {
                await Log("append", "hdlr", "├─Handing controls to subcommand file...", "DEBUG");
                require(file)(client, interaction);
                break;
            }
        }
    }
};