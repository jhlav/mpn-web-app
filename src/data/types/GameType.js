import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLList as List,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

import GameEntryType from './GameEntryType';

const GameType = new ObjectType({
  name: 'Game',
  fields: {
    id: { type: new NonNull(ID) },
    game: { type: new NonNull(StringType) },
    gamemode: { type: new NonNull(StringType) },
    platform: { type: new NonNull(StringType) },
    board: { type: new NonNull(StringType) },
    date: { type: new NonNull(StringType) },
    GameEntries: { type: new List(GameEntryType) },
  },
});

export default GameType;
