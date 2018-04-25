import { Platform } from 'data/models';

export const schema = [
  `
  # Platform data for creating a new local database platform
  input PlatformInput {
    # The name of the platform
    name: String!
  }
`,
];

export const mutation = [
  `
  # Creates a new platform in the local database
  databaseCreatePlatform(
    # Platform data for creating a new local database platform
    platform: PlatformInput!
  ): Game
`,
];

export const resolvers = {
  Mutation: {
    async databaseCreatePlatform(parent, args) {
      // If platform already exists, throw error
      const lookupPlatform = await Platform.findOne({
        where: { name: args.platform.name },
      });

      if (lookupPlatform) {
        // eslint-disable-next-line no-throw-literal
        throw 'Platform already exists!';
      }

      // Create new game in database
      const platform = await Platform.create({ name: args.platform.name });

      return platform;
    },
  },
};
