import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLInt as Integer,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

import DiscordUserType from './DiscordUserType';

const GameEntryType = new ObjectType({
  name: 'GameEntry',
  fields: {
    gameId: { type: new NonNull(ID) },
    place: { type: new NonNull(Integer) },
    character: { type: new NonNull(StringType) },
    coins: { type: new NonNull(Integer) },
    minigameCoins: { type: new NonNull(Integer) },
    stars: { type: new NonNull(Integer) },
    player: { type: DiscordUserType },
  },
});

export default GameEntryType;
