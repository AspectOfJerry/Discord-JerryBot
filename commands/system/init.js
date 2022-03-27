module.exports = {
    callback: (message, Discord, client, ...args) => {
        //Command information
        const COMMAND_NAME = undefined;
        const REQUIRED_ROLE = undefined;
        const EXCPECTED_ARGUMENTS = undefined;
        const OPTIONAL_ARGUMENTS = undefined;

        //Help command
        if(args[0] == '?') {
            const help_command = new Discord.MessageEmbed()
                .setColor('#4040ff')
                .setAuthor({name: "./commands/[STRING].js; Lines: [INT]; File size: ~[INT] KB", iconURL: "https://winaero.com/blog/wp-content/uploads/2018/12/file-explorer-folder-libraries-icon-18298.png"})
                .setTitle(`%${COMMAND_NAME} command help (${REQUIRED_ROLE})`)
                .setDescription('This command [STRING].')
                .addField(`Usage`, "`" + `%${COMMAND_NAME}` + " <[ARGUMENTS?]>" + "`", false)
                .addField(`Aliases`, "`[STRING]`", false)
                .addField(`Excpected arguments`, `${EXCPECTED_ARGUMENTS} case-in/sensitive`, true)
                .addField(`Optional arguments`, `${OPTIONAL_ARGUMENTS} case-in/sensitive`, true)
                .addField(`Notes`, "[STRING]", false)
                .addField('Related commands', "`[STRING]`", false)
                .setFooter({text: `${message.author.tag}`, iconURL: message.author.displayAvatarURL({dynamic: true})})

            message.channel.send({embeds: [help_command]})
            return;
        }

        //Declaring variables
        let verdict;
        let messageMemberHighestRole;
        let memberTargetHighestRole;

        //Declaring functions

        //Checks
        const target = message.mentions.users.first();
        const memberTarget = message.guild.members.cache.get(target.id);

        //Code

    }
}
