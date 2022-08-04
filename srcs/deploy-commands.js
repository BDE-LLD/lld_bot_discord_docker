const fs = require("node:fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const deploy = (guildId) => {
	const commands = [];
	const commandFiles = fs
		.readdirSync("./commands")
		.filter((file) => file.endsWith(".js"));

	for (const file of commandFiles) {
		const command = require(`./commands/${file}`);
		commands.push(command.data);
	}

	const rest = new REST({ version: "9" }).setToken(process.env.DISCORD_BOT_TOKEN);

	rest
		.put(Routes.applicationGuildCommands(process.env.DISCORD_BOT_CLIENT_ID, guildId), { body: commands })
		.then(() => console.log("Successfully registered application commands."))
		.catch(console.error);
};

exports.deploy_commands = deploy;
