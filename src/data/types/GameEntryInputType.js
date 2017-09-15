import {
  GraphQLInputObjectType as InputObjectType,
  GraphQLInt as Integer,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const GameEntryInputType = new NonNull(
  new InputObjectType({
    name: 'GameEntryInput',
    fields: {
      place: {
        type: new NonNull(Integer),
        description:
          'Which place on the scoreboard was achieved (1, 2, 3, or 4).',
      },
      character: {
        type: StringType,
        description: "Which character was played, i.e 'Toad'",
      },
      coins: {
        type: new NonNull(Integer),
        description: 'How many coins the player earned from the board.',
      },
      minigameCoins: {
        type: new NonNull(Integer),
        description: 'How many coins the player earned from minigames.',
      },
      stars: {
        type: new NonNull(Integer),
        description: 'How many stars the player earned, usually less than 10.',
      },
      playerId: {
        type: new NonNull(StringType),
        description: "The player's unique Discord ID.",
      },
    },
  }),
);

export default GameEntryInputType;
