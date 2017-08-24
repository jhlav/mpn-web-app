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
    id: { type: new NonNull(ID) },
    character: { type: new NonNull(StringType) },
    coins: { type: new NonNull(Integer) },
    stars: { type: new NonNull(Integer) },
    player: { type: DiscordUserType },
  },
});

export default GameEntryType;
