const { deploy_commands } = require("../deploy-commands");
const restricted_guilds = JSON.parse(process.env.DISCORD_BOT_RESTRICTED_GUILDS);

module.exports = {
	name: "messageCreate",
	async execute(msg) {
		if (msg.author.bot) return;
		if (restricted_guilds.includes(msg.guild.id)) return;

		if (!msg.member.permissions.has("ADMINISTRATOR")) return;
		if (
			msg.content.toLowerCase() ===
			`${msg.client.user.username.toLowerCase()}.deploy`
		) {
			deploy_commands(msg.guild.id);
			msg.reply(`Commands deployed on ${msg.guild.name}!`);
		}
	},
};
