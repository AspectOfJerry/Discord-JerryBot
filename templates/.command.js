import {Client, Collection, Intents, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Modal, TextInputComponent} from "discord.js";
import {SlashCommandBuilder} from "@discordjs/builders";

import {log, permissionCheck, sleep} from "../../modules/jerryUtils.js";


export default {
    data: new SlashCommandBuilder()
        .setName("STRING")
        .setDescription("STRING")
        // .addStringOption((options) =>
        //     options
        //         .setName("OPTION_NAME")
        //         .setDescription("[OPTIONAL/REQUIRED] OPTION_DESCRIPTION")
        //         .setRequired(true / false))
    ,
    async execute(client, interaction) {
        // interaction.deferReply()
        if(await permissionCheck(interaction, INT) === false) {
            return;
        }

        // Declaring variables
        // const target = interaction.options.getUser("user") || interaction.user;
        // const memberTarget = interaction.guild.members.cache.get(target.id);
        // await log("append", interaction.guild.id, `├─memberTarget: '@${memberTarget.user.tag}'`, "INFO");

        // Checks

        // Main

    }
};