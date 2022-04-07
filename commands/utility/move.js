const {Client, Intents, Collection, MessageEmbed} = require('discord.js');
const {SlashCommandBuilder} = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("move")
        .setDescription("Moves a user to a voice channel.")
        .addChannelOption((options) =>
            options
                .setName("channel")
                .setDescription("The targeted channel to move to.")
                .setRequired(true)
        )
        .addUserOption((options) =>
            options
                .setName("user")
                .setDescription("The user to move. Defaults to yourself.")
                .setRequired(false)
        )
        .addStringOption((options) =>
            options
                .setName("all")
                .setDescription("If you want to move everyone in their current channel to the targeted channel.")
                .setRequired(false)
        ),
    async execute(client, interaction) {
        //Command information
        const REQUIRED_ROLE = "PL3";

        //Declaring variables
        const target = interaction.options.getUser('user');
        const memberTarget = interaction.guild.members.cache.get(target.id);

        //Checks

        //Code

    }
}
