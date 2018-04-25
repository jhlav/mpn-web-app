import { DiscordGuild, DiscordUser } from 'data/models';

export const schema = [
  `
  # A Discord user stored in the local database
  type DiscordUser {
    id: String
    tag: String
    avatar: String
    guilds: [DiscordGuild]
  }
`,
];

export const queries = [
  `
  # Retrieves all Discord users stored in the local database
  discordGetAllUsers: [DiscordUser]

  # Retrieves a single Discord user from the local database
  discordGetUser(
    # The user's unique ID
    id: String!
  ): DiscordUser
`,
];

export const resolvers = {
  RootQuery: {
    async discordGetAllUsers() {
      const users = await DiscordUser.findAll({
        include: [{ model: DiscordGuild, as: 'guilds' }],
      });
      return users;
    },
    async discordGetUser(parent, { id }) {
      const user = await DiscordUser.findOne({
        where: { id },
        include: [{ model: DiscordGuild, as: 'guilds' }],
      });
      return user;
    },
  },
};
