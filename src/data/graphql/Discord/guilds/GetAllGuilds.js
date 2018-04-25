import { DiscordGuild, DiscordUser } from 'data/models';

export const schema = [
  `
  # A Discord guild stored in the local database
  type DiscordGuild {
    id: String
    name: String
    owner: DiscordUser
    members: [DiscordUser]
  }
`,
];

export const queries = [
  `
  # Retrieves all Discord guilds stored in the local database
  discordGetAllGuilds: [DiscordGuild]

  # Retrieves a single Discord guild from the local database
  discordGetGuild(
    # The guild's unique ID
    id: String!
  ): DiscordGuild
`,
];

// TODO fix issue with multiple associations of DiscordUser
export const resolvers = {
  RootQuery: {
    async discordGetAllGuilds() {
      const guilds = await DiscordGuild.findAll({
        include: [{ model: DiscordUser, as: ['owner', 'members'] }],
        // include: [DiscordUser],
      });
      return guilds;
    },
    async discordGetGuild(parent, { id }) {
      const guild = await DiscordGuild.findOne({
        where: { id },
        include: [{ model: DiscordUser, as: ['owner', 'members'] }],
        // include: [DiscordUser],
      });
      return guild;
    },
  },
};
