import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as Integer,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import { resolver } from 'graphql-sequelize';

import DiscordUserType from './DiscordUserType';
import GameEntry from '../models/GameEntry';

const GameEntryType = new ObjectType({
  name: 'GameEntry',
  fields: {
    place: { type: new NonNull(Integer) },
    character: { type: new NonNull(StringType) },
    coins: { type: new NonNull(Integer) },
    minigameCoins: { type: new NonNull(Integer) },
    stars: { type: new NonNull(Integer) },
    player: {
      type: DiscordUserType,
      resolve: resolver(GameEntry.DiscordUser),
    },
  },
});

export default GameEntryType;
