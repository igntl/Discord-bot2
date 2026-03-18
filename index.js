const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates
    ]
});

client.once('ready', () => {
    console.log(`✅ ${client.user.tag}`);

    const channel = client.channels.cache.get(process.env.VOICE_CHANNEL_ID);

    if (!channel) return console.log('❌ channel not found');

    joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
    });

    console.log('🔊 دخل الروم');
});

client.login(process.env.TOKEN);
