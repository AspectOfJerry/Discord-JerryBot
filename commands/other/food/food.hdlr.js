const {Client, Collection, Intents, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Modal, TextInputComponent} = require("discord.js");
const {SlashCommandBuilder} = require("@discordjs/builders");
const Path = require("path");

const {getSubCommandFiles, log, sleep} = require("../../../modules/JerryUtils.js");


module.exports = {
    data: new SlashCommandBuilder()
        .setName("food")
        .setDescription("Sends food emojis.")
        .addSubcommand(subcommand =>
            subcommand
                .setName("pizza")
                .setDescription("Pizza is good!"))
        .addSubcommand(subcommand =>
            subcommand
                .setName("sushi")
                .setDescription("Sushi is good!"))
        .addSubcommand(subcommand =>
            subcommand
                .setName("hamburger")
                .setDescription("Hamburger is good!")),
    async execute(client, interaction) {
        // Declaring variables

        // Checks

        // Main
        // eslint-disable-next-line no-undef
        const subcommand_files = await getSubCommandFiles(Path.resolve(__dirname, "./"), ".subcmd.js");

        for(const file of subcommand_files) {
            if(file.endsWith(interaction.options.getSubcommand() + ".subcmd.js")) {
                await log("append", "hdlr", "├─Handing controls to subcommand file...", "DEBUG");
                require(file)(client, interaction);
                break;
            }
        }
    }
};