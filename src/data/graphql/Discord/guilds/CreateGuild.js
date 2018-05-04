import { DiscordGuild, DiscordUser } from 'data/models';

export const schema = [
  `
  # Discord guild data for creating a new local Discord guild
  input DiscordGuildInput {
    # The guild's unique ID
    id: String!

    # The guild's name
    name: String!

    # The unique ID of the Discord user who owns the guild
    ownerId: String!
  }
`,
];

export const mutation = [
  `
  # Creates a new Discord guild in the local database
  discordCreateGuild(
    # Discord guild data for creating a new local Discord guild
    guild: DiscordGuildInput!
  ): DiscordGuild
`,
];

export const resolvers = {
  Mutation: {
    async discordCreateGuild(parent, args) {
      // If guild already exists, throw error
      const lookupGuild = await DiscordGuild.findById(args.guild.id);

      // TODO Test name and owner change on Discord
      if (lookupGuild) {
        // Update the guild's name if it changed
        if (lookupGuild.get('name') !== args.guild.name) {
          lookupGuild.set('name', args.guild.name);
        }

        // Update the guild's owner if it changed
        if (lookupGuild.get('owner') !== args.guild.ownerId) {
          lookupGuild.set('owner', args.guild.ownerId);
        }

        // eslint-disable-next-line no-throw-literal
        throw 'Guild already exists!';
      }

      // Create or update new Discord user in database
      const guild = await DiscordGuild.create(
        {
          guild: {
            ...args.guild,
            owner: args.guild.ownerId,
          },
        },
        {
          include: [{ model: DiscordUser, as: 'owner' }],
        },
      );

      return guild;
    },
  },
};
