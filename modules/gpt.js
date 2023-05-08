const process = require("process");
const {Client, Collection, Intents, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Modal, TextInputComponent} = require("discord.js");
const {Configuration, OpenAIApi} = require("openai");
const {toNormalized} = require("../modules/JerryUtils.js");


let configed = false;
let openai;

function configOpenAI() {
    if(configed) {
        throw "config() should only be called once.";
    }

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    openai = new OpenAIApi(configuration);
    configed = true;
}


/**
 * @param {Object} message The prompt to prompt
 */
async function gpt(message, client) {
    try {
        const username = toNormalized(message.member?.nickname) ?? toNormalized(message.author.username);
        const prompt = message.content.slice(4);
        const requesting = new MessageEmbed()
            .setColor("YELLOW")
            .setAuthor({name: `${username}`, iconURL: `${message.member.user.displayAvatarURL({dynamic: true, size: 32})}`})
            .setTitle(`${prompt}`)
            .setDescription("*Generating response... This may take a while depending on complexity.*");

        const msg = await message.reply({embeds: [requesting]});
        message.channel.sendTyping();
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "assistant", content: `${prompt}`, name: `${username.replace(" ", "_")}`}],
            temperature: 0.75,
            max_tokens: 512,
            n: 1
        });


        const data = completion.data;

        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setAuthor({name: `${username}`, iconURL: `${message.member.user.displayAvatarURL({dynamic: true, size: 32})}`})
            .setTitle(`${prompt}`)
            .setDescription(`${data.choices[0].message.content}`)
            .setFooter({text: `model: OpenAI ${data.model}, tokens: ${data.usage.total_tokens}/512`});

        // Split the message into chunks of maximum length 4096 https://discord.com/developers/docs/resources/channel#embed-object-embed-limits
        const messageChunks = data.choices[0].message.content.match(/[\s\S]{1,4096}/g) || [];

        let first = true;
        for(const chunk of messageChunks) {
            if(first) {
                msg.edit({embeds: [embed]});
                first = false;
                continue;
            }

            // Send the chunk
            embed.setDescription(`${chunk}`);
            await msg.channel.send({embeds: [embed]});
        }
        // await msg.delete();

        // // Split the message into chunks of maximum length 2000
        // const messageChunks = data.choices[0].message.content.match(/[\s\S]{1,1920}/g) || [];

        // // Send each chunk as a separate message
        // let first = true;
        // for(const chunk of messageChunks) {
        //     if(first) {
        //         message.reply({content: `**Completion** (model: OpenAI __${data.model}__, tokens: ${data.usage.total_tokens})\n\n${chunk}`});
        //         first = false;
        //         continue;
        //     }
        //     // Send the chunk as a message
        //     await message.channel.send(chunk);
        // }

        // CODE FROM CHATGPT
        // const openai = require('openai');
        // const api_key = 'YOUR_API_KEY';

        // openai.api_key = api_key;

        // const prompt = 'Hello, World!';
        // const model = 'text-davinci-002';
        // const max_tokens = 5;

        // // Define a function to handle the streamed responses
        // const handleResponse = (response) => {
        //     console.log(response.choices[0].text);
        // }

        // // Call the stream method to start streaming responses
        // const stream = openai.completions.stream({
        //     prompt: prompt,
        //     model: model,
        //     max_tokens: max_tokens,
        //     n: 1,
        //     stop: '\n',
        // });

        // // Attach the response handler function to the stream
        // stream.on('data', handleResponse);
    } catch(err) {
        if(err.response) {
            console.log(err.response.status);
            console.log(err.response.data);
        } else {
            console.log(err.message);
        }
    }
}


module.exports = {
    configOpenAI,
    gpt
};
