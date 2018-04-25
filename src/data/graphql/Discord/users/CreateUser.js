import { DiscordUser } from 'data/models';

export const schema = [
  `
  # Discord user data for creating a new local Discord user
  input DiscordUserInput {
    # The user's unique ID
    id: String!

    # The user's tag
    tag: String!

    # The user's avatar unique ID
    avatar: String
  }
`,
];

export const mutation = [
  `
  # Creates a new Discord user in the local database
  discordCreateUser(
    # Discord user data for creating a new local Discord user
    user: DiscordUserInput!
  ): DiscordUser
`,
];

export const resolvers = {
  Mutation: {
    async discordCreateUser(parent, args) {
      // If user already exists, throw error
      const lookupUser = await DiscordUser.findById(args.user.id);

      if (lookupUser) {
        // eslint-disable-next-line no-throw-literal
        throw 'User already exists!';
      }

      // Create or update new Discord user in database
      const user = await DiscordUser.upsert(
        {
          ...args.user,
        },
        // {
        //   include: [{ model: UserProfile, as: 'profile' }],
        // },
      );

      return user;
    },
  },
};
