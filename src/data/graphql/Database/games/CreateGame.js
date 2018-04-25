import { Game, Platform } from 'data/models';

export const schema = [
  `
  # Game data for creating a new local database game
  input GameInput {
    # The name of the game, baby!
    name: String!

    # The platforms which the game runs on
    platforms: [Platform]!
  }
`,
];

export const mutation = [
  `
  # Creates a new game in the local database
  databaseCreateGame(
    # Game data for creating a new local database game
    game: GameInput!
  ): Game
`,
];

export const resolvers = {
  Mutation: {
    async databaseCreateGame(parent, args) {
      // If game already exists, throw error
      const lookupGame = await Game.findOne({
        where: { name: args.game.name },
      });

      if (lookupGame) {
        // eslint-disable-next-line no-throw-literal
        throw 'Game already exists!';
      }

      // Create new game in database
      const game = await Game.create(
        {
          name: args.game.name,
          platforms: [...args.game.platforms],
        },
        {
          include: [{ model: Platform, as: 'platforms' }],
        },
      );

      return game;
    },
  },
};
